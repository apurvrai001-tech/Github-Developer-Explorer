import { getLanguageColor, sortObjectByValueDesc } from "./utils.js";

export async function renderLanguageChart(repos) {
  const languagesContainer = document.getElementById("langChart");
  languagesContainer.innerHTML =
    '<h3>Languages</h3><p class="muted">Loading languages...</p>';

  try {
    const totals = {};

    const top = (repos || [])
      .slice()
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 30);

    for (const r of top) {
      try {
        const resp = await fetch(r.languages_url);
        if (!resp.ok) continue;
        const data = await resp.json();
        for (const [lang, bytes] of Object.entries(data)) {
          totals[lang] = (totals[lang] || 0) + bytes;
        }
      } catch (e) {}
    }

    const sorted = sortObjectByValueDesc(totals).slice(0, 10);

    if (sorted.length === 0) {
      languagesContainer.innerHTML =
        '<h3>Languages</h3><p class="muted">No language data available.</p>';
      return;
    }

    const totalBytes = sorted.reduce((s, [, v]) => s + v, 0);

    const bars = sorted
      .map(([lang, bytes]) => {
        const pct = ((bytes / totalBytes) * 100).toFixed(1);
        const color = getLanguageColor(lang);
        return `
        <div class="lang-row">
          <div class="lang-label">${lang} <span class="lang-pct">${pct}%</span></div>
          <div class="lang-bar" style="background:${color}; width:${pct}%;"></div>
        </div>
      `;
      })
      .join("");

    languagesContainer.innerHTML = `<h3>Languages</h3><div class="lang-list">${bars}</div>`;
  } catch (err) {
    languagesContainer.innerHTML =
      '<h3>Languages</h3><p class="muted">Failed to load languages.</p>';
  }
}
