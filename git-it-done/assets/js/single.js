const repoNameEl = document.querySelector("#repo-name");
const issueContainerEl = document.querySelector("#issues-container");
const limitWarningEl = document.querySelector("#limit-warning");

// Fetch JSON helper with error handling
async function fetchFromGitHub(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  } catch (err) {
    alert("Unable to connect to GitHub: " + err.message);
    return [];
  }
}

// Get repo name from query string
function getRepoName() {
  const queryString = document.location.search;
  const repo = queryString.split("=")[1];

  if (!repo) {
    document.location.replace("./index.html");
    return;
  }

  repoNameEl.textContent = repo;
  document.title = `Git it Done - ${repo}`;

  getRepoIssues(repo);
}

// Fetch issues from GitHub
async function getRepoIssues(repo) {
  issueContainerEl.innerHTML = "<p>Loading issues...</p>";
  const apiUrl = `https://api.github.com/repos/${repo}/issues?direction=asc`;
  const issues = await fetchFromGitHub(apiUrl);

  displayIssues(issues);

  // Check if paginated (more than 30 issues)
  const res = await fetch(apiUrl, { method: "HEAD" });
  if (res.headers.get("Link")) {
    displayWarning(repo);
  }
}

// Display issues in the DOM
function displayIssues(issues) {
  issueContainerEl.innerHTML = "";

  if (!issues || issues.length === 0) {
    issueContainerEl.innerHTML = "<p>This repo has no open issues!</p>";
    return;
  }

  issues.forEach(issue => {
    const issueEl = document.createElement("a");
    issueEl.className = "list-item flex-row justify-space-between align-center";
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

// Display warning for paginated issues
function displayWarning(repo) {
  limitWarningEl.innerHTML = `To see more than 30 issues, visit `;
  const linkEl = document.createElement("a");
  linkEl.href = `https://github.com/${repo}/issues`;
  linkEl.target = "_blank";
  linkEl.textContent = "GitHub.com";
  limitWarningEl.appendChild(linkEl);
}

// Initialize page
getRepoName();
