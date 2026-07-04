# Changes applied (before/after)

## 1) `src/App.jsx`
### Why
Previously the page only showed `hello` and did not render any UI.

### Before
```js
import { fetchPhotos, fetchVideos, fetchGifs } from "./api/mediaApi";

function App() {
  return (
    <>
      <div className="h-screen text-white w-full bg-gray-950">
          hello
      </div>
    </>
  );
}

export default App;
```

### After
```js
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <div className="h-screen text-white w-full bg-gray-950">
      hello
      <SearchBar />
    </div>
  );
}

export default App;
```

---

## 2) `src/Components/SearchBar.jsx`
### Why
Previously SearchBar returned an empty `<div>`, so even after wiring Redux/API nothing was visible or usable.

### Before
```js
const SearchBar = () => {
  return (
    <div>
      
    </div>
  )
}

export default SearchBar
```

### After
```js
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  setQuery,
  setActiveTabs,
  setLoading,
  setError,
  setResults,
} from "../app/features/searchSlice";
import { fetchPhotos, fetchVideos, fetchGifs } from "../api/mediaApi";

const SearchBar = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((s) => s.search.activeTab);

  const [value, setValue] = useState("");

  async function onSubmit(e) {
    e.preventDefault();

    const query = value.trim();
    if (!query) return;

    dispatch(setQuery(query));
    dispatch(setLoading());

    try {
      let data;
      if (activeTab === "photos") data = await fetchPhotos(query);
      if (activeTab === "videos") data = await fetchVideos(query);
      if (activeTab === "gifs") data = await fetchGifs(query);

      if (!data) {
        dispatch(setError("No response from API (missing keys or network error)."));
        return;
      }

      dispatch(setResults(data.results ?? data));
    } catch (err) {
      dispatch(setError(err?.message ?? "Search failed"));
    }
  }

  return (
    <div className="p-4 border border-white/10 rounded">
      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-1 rounded bg-white/5 px-3 py-2 outline-none"
          placeholder="Search"
        />
        <button
          className="px-4 py-2 rounded bg-white/10 hover:bg-white/15"
          type="submit"
        >
          Search
        </button>
      </form>

      <div className="mt-3 flex gap-2">
        {[
          { key: "photos", label: "Photos" },
          { key: "videos", label: "Videos" },
          { key: "gifs", label: "GIFs" },
        ].map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => dispatch(setActiveTabs(t.key))}
            className={`px-3 py-1 rounded border ${
              activeTab === t.key ? "border-white/60" : "border-white/10"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
```

---

## 3) `src/app/features/searchSlice.js`
### Why
`src/app/store.js` imports a **named** export `searchReducer`, but `searchSlice.js` initially only exported a default reducer.

Build error:
> MISSING_EXPORT "searchReducer" is not exported by "src/app/features/searchSlice.js".

### Before
```js
export const {setActiveTabs, setError, setLoading, setQuery, setResults, clearResults} = searchSlice.actions

export  default searchSlice.reducer
```

### After
```js
export const {setActiveTabs, setError, setLoading, setQuery, setResults, clearResults} = searchSlice.actions

export const searchReducer = searchSlice.reducer
export default searchSlice.reducer
```

