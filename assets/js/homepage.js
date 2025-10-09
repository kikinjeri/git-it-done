const userFormEl = document.querySelector("#user-form");
const languageButtonsEl = document.querySelector("#language-buttons");
const nameInputEl = document.querySelector("#username");
const repoContainerEl = document.querySelector("#repos-container");
const repoSearchTerm = document.querySelector("#repo-search-term");

async function fetchFromGitHub(url) {
  try {
    const cached = sessionStorage.getItem(url);
    if (cached) return JSON.parse(cached);

    const res = await fetch(url);
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    sessionStorage.setItem(url, JSON.stringify(data));
    return data;
  } catch (err) {
    alert("Error: " + err.message);
    return [];
  }
}

async function getUserRepos(user) {
  repoContainerEl.innerHTML = `<p>Loading repos...</p>`;
  const url = `https://api.github.com/users/${user}/repos`;
  const repos = await fetchFromGitHub(url);
  displayRepos(repos, user);
}

async function getFeaturedRepos(language) {
  repoContainerEl.innerHTML = `<p>Loading featured repos...</p>`;
  const url = `https://api.github.com/search/repositories?q=${language}+is:featured&sort=help-wanted-issues`;
  const data = await fetchFromGitHub(url);
  displayRepos(data.items, language);
}

function displayRepos(repos, searchTerm) {
  repoContainerEl.innerHTML = "";
  if (!repos.length) {
    repoContainerEl.innerHTML = `<p>No repositories found.</p>`;
    return;
  }

  repoSearchTerm.textContent = searchTerm;

  repos.forEach(repo => {
    const repoName = `${repo.owner.login}/${repo.name}`;
    const repoEl = document.createElement("a");
    repoEl.className = "list-item";
    repoEl.href = `./single-repo.html?repo=${repoName}`;

    const titleEl = document.createElement("span");
    titleEl.textContent = repoName;
    repoEl.appendChild(titleEl);

    const statusEl = document.createElement("span");
    statusEl.className = "status-icon";
    statusEl.textContent = repo.open_issues_count > 0 ? `${repo.open_issues_count} issues` : "No issues";
    statusEl.classList.add(repo.open_issues_count > 0 ? "icon-danger" : "icon-success");
    repoEl.appendChild(statusEl);

    repoContainerEl.appendChild(repoEl);
  });
}

userFormEl.addEventListener("submit", e => {
  e.preventDefault();
  const username = nameInputEl.value.trim();
  if (username) getUserRepos(username);
  nameInputEl.value = "";
});

languageButtonsEl.addEventListener("click", e => {
  const lang = e.target.dataset.language;
  if (lang) getFeaturedRepos(lang);
});

