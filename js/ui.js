const userCard = document.getElementById("userCard");
const repoList = document.getElementById("repoList");
const notice = document.getElementById("notice");

export function showProfile(user) {
  userCard.innerHTML = `
    <div class="profile">
      <img class="avatar" src="${user.avatar_url}" alt="${user.login}" width="100" height="100" />
      <div class="profile-info">
        <h2>${user.name || user.login}</h2>
        ${user.bio ? `<p class="bio">${user.bio}</p>` : ""}
        <p class="muted">
          ${user.public_repos} repos · ${user.followers} followers · ${user.following} following
        </p>
      </div>
    </div>
  `;
}

export function showRepos(repos) {
  if (!repos || repos.length === 0) {
    repoList.innerHTML = '<p class="muted">No public repositories found.</p>';
    return;
  }

  const sorted = repos
    .slice()
    .sort((a, b) => b.stargazers_count - a.stargazers_count);

  repoList.innerHTML =
    "<h3>Repositories</h3>" +
    sorted
      .map(
        (repo) => `
      <div class="repo">
        <a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a>
        ${repo.description ? `<p class="repo-desc">${repo.description}</p>` : ""}
        <p class="repo-meta">⭐ ${repo.stargazers_count}  ·  🍴 ${repo.forks_count}  ·  ${repo.language || "—"}</p>
      </div>
    `
      )
      .join("");
}

export function clearResults() {
  userCard.innerHTML = "";
  repoList.innerHTML = "";
  notice.innerHTML = "";
  notice.className = "";
  document.getElementById("langChart").innerHTML = "";
}

export function setLoading(isLoading) {
  const btn = document.getElementById("searchBtn");
  btn.disabled = isLoading;
  btn.style.opacity = isLoading ? "0.6" : "1";
}

export function showError(message) {
  notice.className = "msg-error";
  notice.textContent = message;
}

export function showMessage(message) {
  notice.className = "msg-info";
  notice.textContent = message;
}
