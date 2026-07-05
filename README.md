# 🔍 Media Nexus

### A unified media search app — Photos, Videos & GIFs in one place.

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.x-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](#-license)

---

## 📖 Overview

**Media Nexus** is a single-page React application that lets you search for **photos, videos, and GIFs** at once through one search bar — powered by the **Unsplash**, **Pexels**, and **Giphy** APIs. Results are managed with **Redux Toolkit**, routed with **React Router**, and rendered in a **responsive** UI styled with **Tailwind CSS v4**.

You can also save items you like to a **Favorites/Collection** page for later.

---

## ✨ Features

- 🔎 **Unified Search Bar** — one query, three sources
- 🖼️ **Photos** — live results from the **Unsplash API**
- 🎥 **Videos** — live results from the **Pexels API**
- 🎞️ **GIFs** — live results from the **Giphy API**
- 🗂️ **Tabbed Navigation** — switch between Photos / Videos / GIFs
- ⭐ **Favorites / Collection** — save cards locally and revisit them on `/favorites`
- ⚡ **Redux Toolkit** — centralized search state (query, active tab, results, loading, error)
- 📱 **Fully Responsive** — mobile-first UI built with Tailwind CSS
- 🧩 **Reusable Components** — `SearchBar`, `ResultGrid`, `ResultCard`, and more

---

## 🛠️ Tech Stack

| Category             | Technology                                   |
| --------------------- | --------------------------------------------- |
| **Frontend Library**  | React 19 (Functional Components + Hooks)      |
| **State Management**  | Redux Toolkit (`@reduxjs/toolkit`, `react-redux`) |
| **Routing**           | React Router (`react-router-dom`)             |
| **Styling**           | Tailwind CSS 4 (via `@tailwindcss/vite`)      |
| **HTTP Requests**     | Axios                                         |
| **Icons**             | React Icons                                   |
| **APIs**              | Unsplash · Pexels · Giphy                     |
| **Build Tool**        | Vite                                          |
| **Linting**           | oxlint                                        |
| **Language**          | JavaScript (ES6+)                             |

---

## 📁 Project Structure

```
Media-Nexus/
├── public/
├── src/
│   ├── Components/
│   │   ├── SearchBar.jsx      # Search input + tab controls
│   │   ├── ResultGrid.jsx     # Fetches & routes results per active tab
│   │   └── ResultCard.jsx     # Individual media card + save-to-favorites
│   ├── pages/
│   │   └── Collection.jsx     # /favorites — saved items view
│   ├── features/ (or similar)
│   │   └── searchSlice.js     # Redux slice: query, activeTab, results, loading, error
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env                        # API keys (see below) — DO NOT COMMIT REAL KEYS
├── .oxlintrc.json
├── index.html
├── package.json
└── vite.config.js
```

> Note: exact file locations may vary slightly — the layout above reflects the app's actual component/page split as found in the codebase.

---

## ⚙️ Installation

```bash
# 1. Clone the repository
git clone https://github.com/atharv7676/Media-Nexus.git

# 2. Navigate into the project directory
cd Media-Nexus

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will run at `http://localhost:5173` by default (Vite).

Other available scripts:

```bash
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint       # run oxlint
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root with your own API keys:

```
VITE_UNSPLASH_KEY=your_unsplash_access_key
VITE_PEXELS_KEY=your_pexels_api_key
VITE_GIPHY_KEY=your_giphy_api_key
```

> ⚠️ **Security note:** Never commit a `.env` file containing real API keys to a public repository. Add `.env` to your `.gitignore`, and if keys have already been pushed, rotate/regenerate them on each provider's dashboard right away — a committed key in Git history stays recoverable even after you delete the file.

---

## 🔑 Getting API Keys

### 1️⃣ Unsplash

1. Go to [unsplash.com/developers](https://unsplash.com/developers)
2. Create a new application
3. Copy the **Access Key** into `VITE_UNSPLASH_KEY`

### 2️⃣ Pexels

1. Go to [pexels.com/api](https://www.pexels.com/api/)
2. Sign up and generate an API key
3. Copy it into `VITE_PEXELS_KEY`

### 3️⃣ Giphy

1. Go to [developers.giphy.com](https://developers.giphy.com/)
2. Create an app to get an API key
3. Copy it into `VITE_GIPHY_KEY`

---

## 🚀 Usage

1. Run the app with `npm run dev`
2. Type a search term (e.g. `nature`, `technology`, `coffee`) into the search bar
3. Use the tabs to switch between **Photos**, **Videos**, and **GIFs**
4. Click the save icon on a card to add it to your **Favorites**
5. Visit `/favorites` to view your saved collection

---

## 🧭 Roadmap / Known Issues

- [ ] Favorites page: finish wiring `Collection.jsx` to read and render saved items from `localStorage`
- [ ] Move favorites from `localStorage` into Redux for consistency with the rest of app state
- [ ] Pagination / infinite scroll for search results
- [ ] Debounced search-as-you-type
- [ ] Dark mode toggle
- [ ] Unit & integration tests

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```bash
   git commit -m "Add some AmazingFeature"
   ```
4. Push to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ using **React**, **Redux Toolkit**, and **Tailwind CSS**

⭐ If you found this project helpful, consider giving it a star!
