<div align="center">

# 🔍 Media Explorer

### A unified, blazing-fast media search experience — Photos, Videos & GIFs in one place.

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.x-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](#-license)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge)](#-contributing)

</div>

---

## 📖 Overview

**Media Explorer** is a single-page web application that lets users search for **photos, videos, and GIFs** simultaneously through one clean search bar — powered by the **Unsplash**, **Pexels**, and **Giphy** APIs respectively. Results are normalized into a consistent data shape, managed globally with **Redux Toolkit**, and rendered in a fully **responsive** UI styled with **Tailwind CSS**.

Whether you're a designer looking for inspiration, a developer needing stock assets, or just browsing for fun — Media Explorer brings multiple media sources together in one seamless interface.

---

## 🎬 Demo Preview

> 🔗 **Live Demo:** [your-deployed-link.vercel.app](#)

<div align="center">

![Media Explorer Demo](https://via.placeholder.com/900x480.png?text=Media+Explorer+Demo+GIF)

</div>

---

## ✨ Features

- 🔎 **Unified Search Bar** — search across all media types with a single query
- 🖼️ **Photos** — fetched live from the **Unsplash API**
- 🎥 **Videos** — fetched live from the **Pexels API**
- 🎞️ **GIFs** — fetched live from the **Giphy API**
- 🗂️ **Tabbed Navigation** — instantly switch between Photos / Videos / GIFs
- ⚡ **Redux Toolkit** — centralized, predictable global state management
- 📱 **Fully Responsive** — mobile-first UI built with Tailwind CSS
- ⏳ **Loading & Error States** — graceful UX during fetches and failures
- 📄 **Pagination** — load more results without overwhelming the UI
- ♻️ **Normalized Data Model** — consistent object shape across all three APIs
- 🧩 **Reusable Components** — clean, modular, and easy to extend

---

## 🛠️ Tech Stack

| Category            | Technology                                      |
|---------------------|--------------------------------------------------|
| **Frontend Library** | React (Functional Components + Hooks)           |
| **State Management** | Redux Toolkit (slices, thunks, actions)         |
| **Styling**           | Tailwind CSS                                    |
| **HTTP Requests**     | Native Fetch API                                |
| **APIs**              | Unsplash · Pexels · Giphy                       |
| **Build Tool**        | Vite / Create React App                         |
| **Language**          | JavaScript (ES6+)                               |

---

## 📁 Project Structure

```bash
media-explorer/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   ├── unsplashApi.js       # Unsplash fetch logic
│   │   ├── pexelsApi.js         # Pexels fetch logic
│   │   └── giphyApi.js          # Giphy fetch logic
│   │
│   ├── components/
│   │   ├── SearchBar/
│   │   │   └── SearchBar.jsx
│   │   ├── Tabs/
│   │   │   └── MediaTabs.jsx
│   │   ├── MediaCard/
│   │   │   └── MediaCard.jsx
│   │   ├── MediaGrid/
│   │   │   └── MediaGrid.jsx
│   │   ├── Loader/
│   │   │   └── Loader.jsx
│   │   ├── ErrorMessage/
│   │   │   └── ErrorMessage.jsx
│   │   └── Pagination/
│   │       └── Pagination.jsx
│   │
│   ├── features/
│   │   └── media/
│   │       ├── mediaSlice.js    # Redux Toolkit slice
│   │       └── mediaThunks.js   # Async thunks for API calls
│   │
│   ├── utils/
│   │   └── normalizeMedia.js    # Normalizes API responses
│   │
│   ├── store/
│   │   └── store.js             # Redux store configuration
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env.example
├── package.json
├── tailwind.config.js
└── README.md
```

---

## ⚙️ Installation

Clone the repository and install dependencies:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/media-explorer.git

# 2. Navigate into the project directory
cd media-explorer

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app should now be running at `http://localhost:5173` (or `http://localhost:3000` depending on your bundler).

---

## 🔐 Environment Variables

Create a `.env` file in the root directory (you can copy `.env.example` as a starting point):

```env
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
VITE_PEXELS_API_KEY=your_pexels_api_key
VITE_GIPHY_API_KEY=your_giphy_api_key
```

> ⚠️ **Note:** If you're using Create React App instead of Vite, prefix your variables with `REACT_APP_` instead of `VITE_`.

---

## 🔑 API Keys Setup

Media Explorer requires **three free API keys**. Here's how to get each one:

### 1️⃣ Unsplash API
1. Go to [unsplash.com/developers](https://unsplash.com/developers)
2. Create a new application
3. Copy your **Access Key**
4. Paste it into `VITE_UNSPLASH_ACCESS_KEY`

### 2️⃣ Pexels API
1. Go to [pexels.com/api](https://www.pexels.com/api/)
2. Sign up and generate an API key
3. Copy the key into `VITE_PEXELS_API_KEY`

### 3️⃣ Giphy API
1. Go to [developers.giphy.com](https://developers.giphy.com/)
2. Create an app to receive an API key
3. Copy the key into `VITE_GIPHY_API_KEY`

---

## 🚀 Usage

1. Launch the app using `npm run dev`
2. Type a search term (e.g. `"nature"`, `"technology"`, `"coffee"`) into the search bar
3. Use the **tabs** to switch between **Photos**, **Videos**, and **GIFs**
4. Scroll and use **Pagination** to load more results
5. Click on any media card to preview it in more detail

```jsx
// Example: dispatching a search action
dispatch(searchMedia({ query: "mountains", type: "photos" }));
```

---

## 📸 Screenshots

<div align="center">

| Photos Tab | Videos Tab | GIFs Tab |
|:---:|:---:|:---:|
| ![Photos](https://via.placeholder.com/300x200.png?text=Photos+Tab) | ![Videos](https://via.placeholder.com/300x200.png?text=Videos+Tab) | ![GIFs](https://via.placeholder.com/300x200.png?text=GIFs+Tab) |

</div>

> 💡 Replace the placeholder images above with actual screenshots stored in a `/screenshots` folder.

---

## 🧭 Future Improvements

- [ ] 🌙 Dark mode toggle
- [ ] ❤️ Favorites / bookmarking system with local storage
- [ ] 🔄 Infinite scroll as an alternative to pagination
- [ ] 🧠 Debounced search-as-you-type
- [ ] 📥 Download media directly from the UI
- [ ] 🧪 Unit & integration tests (Jest + React Testing Library)
- [ ] 🌐 Multi-language support (i18n)
- [ ] 🔍 Advanced filters (orientation, color, duration, etc.)

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn and create. Any contributions are **greatly appreciated**!

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

Please make sure to update tests and documentation as appropriate.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ using **React**, **Redux Toolkit**, and **Tailwind CSS**

⭐ If you found this project helpful, consider giving it a star!

</div>
