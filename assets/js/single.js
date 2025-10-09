const repoNameEl = document.querySelector("#repo-name");
const issueContainerEl = document.querySelector("#issues-container");
const limitWarningEl = document.querySelector("#limit-warning");

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
    issueContainerEl.innerHTML = `<p>Error loading issues: ${err.message}</p>`;
    return [];
  }
}

function getRepoName() {
  const query = document.location.search.split("=")[1];
  if (!query) return document.location.replace("./index.html");
  repoNameEl.textContent = query;
  getRepoIssues(query);
}

async function getRepoIssues(repo) {
  issueContainerEl.innerHTML = `<div class="skeleton"></div><div class="skeleton"></div>`;
  const issues = await fetchFromGitHub(`https://api.github.com/repos/${repo}/issues?direction=asc`);
  displayIssues(issues);

  const res = await fetch(`https://api.github.com/repos/${repo}/issues?direction=asc`, { method: "HEAD" });
  if (res.headers.get("Link")) displayWarning(repo);
}

function displayIssues(issues) {
  issueContainerEl.innerHTML = "";
  if (!issues.length) {
    issueContainerEl.innerHTML = "<p>No open issues!</p>";
    return;
  }

  issues.forEach(issue => {
    const issueEl = document.createElement("a");
    issueEl.className = "list-item";
    issueEl.href = issue.html_url;
    issueEl.target = "_blank";

    const titleEl = document.createElement("span");
    titleEl.textContent = issue.title;
    issueEl.appendChild(titleEl);

    const typeEl = document.createElement("span");
    typeEl.textContent = issue.pull_request ? "(Pull request)" : "(Issue)";
    issueEl.appendChild(typeEl);

    issueContainerEl.appendChild(issueEl);
  });
}

function displayWarning(repo) {
  limitWarningEl.innerHTML = `More than 30 issues. See all on <a href="https://github.com/${repo}/issues" target="_blank">GitHub.com</a>`;
}

getRepoName();

