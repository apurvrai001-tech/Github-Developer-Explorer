export const LANGUAGE_COLORS = {
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  TypeScript: "#2b7489",
  "C++": "#f34b7d",
  "C#": "#178600",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Go: "#00ADD8",
  Shell: "#89e051",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Jupyter: "#DA5B0B",
};

export function getLanguageColor(lang) {
  return LANGUAGE_COLORS[lang] || "#999999";
}

export function sortObjectByValueDesc(obj) {
  return Object.entries(obj).sort((a, b) => b[1] - a[1]);
}
