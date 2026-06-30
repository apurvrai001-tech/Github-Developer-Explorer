<![CDATA[<div align="center">

# 🔍 GitHub Developer Explorer

**A sleek, dark-themed web app to explore any GitHub developer's profile, repositories, and language statistics — all from a single search.**

[![GitHub](https://img.shields.io/badge/GitHub-API-181717?style=for-the-badge&logo=github)](https://docs.github.com/en/rest)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

</div>

---

## ✨ Features

- 🔎 **User Search** — Enter any GitHub username to instantly fetch their profile
- 👤 **Profile Card** — Displays avatar, name, bio, repo count, followers & following
- 📦 **Repository Listing** — All public repos sorted by stars, with descriptions, star/fork counts, and primary language
- 📊 **Language Breakdown** — Visual bar chart showing the top languages used across all repositories (by byte count)
- ⚡ **Lightweight & Fast** — Zero dependencies, pure vanilla JavaScript with ES6 modules
- 🌙 **Dark Theme** — Modern dark UI with glassmorphism-inspired card designs

---

## 🖼️ Screenshots

### Search Interface
> Clean, minimal search bar with a glowing green border

### Profile & Repositories
> User profile card with avatar and stats, followed by a sorted list of public repositories

### Language Statistics
> Color-coded language distribution bars with percentage breakdowns

---

## 🛠️ Tech Stack

| Layer       | Technology                          |
| ----------- | ----------------------------------- |
| **Markup**  | HTML5 (Semantic)                    |
| **Styling** | Vanilla CSS (Dark theme, Glassmorphism) |
| **Logic**   | Vanilla JavaScript (ES6 Modules)    |
| **API**     | [GitHub REST API v3](https://docs.github.com/en/rest) |

---

## 📁 Project Structure

```
Github-Developer-Explorer/
├── index.html          # Main HTML page
├── css/
│   └── style.css       # All styles (dark theme, layout, components)
├── js/
│   ├── app.js          # Entry point — event listeners & search orchestration
│   ├── api.js          # GitHub API calls (user & repos)
│   ├── ui.js           # DOM manipulation (profile card, repo list, notices)
│   ├── chart.js        # Language chart rendering
│   └── utils.js        # Helpers (language colors, sorting)
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- *(Optional)* A local development server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/apurvrai001-tech/Github-Developer-Explorer.git
   cd Github-Developer-Explorer
   ```

2. **Open the app**

   - **Option A:** Open `index.html` directly in your browser
   - **Option B:** Use VS Code's Live Server extension for hot reload
   - **Option C:** Use any static file server:

     ```bash
     # Python
     python3 -m http.server 8080

     # Node.js (npx)
     npx serve .
     ```

3. **Search for a user** — Type any GitHub username and hit **Search** or press **Enter**

> **Note:** The GitHub API allows 60 requests/hour for unauthenticated requests. For heavier usage, consider adding a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

---

## 🔧 How It Works

1. **User enters a GitHub username** and clicks Search (or presses Enter)
2. **`api.js`** fetches the user profile and public repositories from the GitHub REST API
3. **`ui.js`** renders the profile card and repository list into the DOM
4. **`chart.js`** fetches the language breakdown for the top 30 repos (by stars) and renders a color-coded bar chart
5. **`utils.js`** provides language-to-color mappings and sorting utilities

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📜 License

This project is open source and available for educational and personal use.

---

<div align="center">

**Built with ❤️ using vanilla web technologies**

⭐ Star this repo if you found it useful!

</div>
]]>
