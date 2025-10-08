const userFormEl = document.querySelector("#user-form");
const languageButtonsEl = document.querySelector("#language-buttons");
const nameInputEl = document.querySelector("#username");
const repoContainerEl = document.querySelector("#repos-container");
const repoSearchTerm = document.querySelector("#repo-search-term");

async function fetchFromGitHub(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  } catch (err) {
    alert("Error: " + err.message);
    return [];
  }
}

async function getUserRepos(user) {
  repoContainerEl.innerHTML = "<p>Loading repositories...</p>";
  const data = await fetchFromGitHub(`https://api.github.com/users/${user}/repos`);
  displayRepos(data, user);
}

async function getFeaturedRepos(language) {
  repoContainerEl.innerHTML = "<p>Loading repositories...</p>";
  const data = await fetchFromGitHub(`https://api.github.com/search/repositories?q=${language}+is:featured&sort=help-wanted-issues`);
  displayRepos(data.items, language);
}

function displayRepos(repos, searchTerm) {
  repoSearchTerm.textContent = searchTerm;
  repoContainerEl.innerHTML = "";

  if (!repos || repos.length === 0) {
    repoContainerEl.innerHTML = "<p>No repositories found.</p>";
    return;
  }

  repos.forEach(repo => {
    const repoEl = document.createElement("a");
    repoEl.className = "list-item";
    repoEl.href = `./single-repo.html?repo=${repo.owner.login}/${repo.name}`;

    const titleEl = document.createElement("span");
    titleEl.textContent = `${repo.owner.login}/${repo.name}`;
    repoEl.appendChild(titleEl);

    const statusEl = document.createElement("span");
    statusEl.className = "status-icon";
    if (repo.open_issues_count > 0) {
      statusEl.innerHTML = `<i class="fas fa-times icon-danger"></i>${repo.open_issues_count} issue(s)`;
    } else {
      statusEl.innerHTML = `<i class="fas fa-check-square icon-success"></i>`;
    }
    repoEl.appendChild(statusEl);

    repoContainerEl.appendChild(repoEl);
  });
}

userFormEl.addEventListener("submit", e => {
  e.preventDefault();
  const username = nameInputEl.value.trim();
  if (username) getUserRepos(username);
});

languageButtonsEl.addEventListener("click", e => {
  const language = e.target.getAttribute("data-language");
  if (language) getFeaturedRepos(language);
});

