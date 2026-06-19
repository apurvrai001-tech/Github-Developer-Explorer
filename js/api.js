const BASE_URL = "https://api.github.com/users";

export async function getUser(username) {
  const response = await fetch(⁠ ${BASE_URL}/${username} ⁠);

  if (!response.ok) {
    throw new Error("User not found");
  }

  return await response.json();
}

export async function getRepos(username) {
  const response = await fetch(⁠ ${BASE_URL}/${username}/repos ⁠);

  return await response.json();
}
