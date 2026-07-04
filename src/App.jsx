import { Route, Routes } from "react-router-dom";
import ResultGrid from "./Components/ResultGrid";
import SearchBar from "./Components/SearchBar";
import Tabs from "./Components/Tabs";
import Home from "./pages/Home";
import Collection from "./pages/Collection";

function App() {
  return (
    <div className="min-h-screen text-white w-full bg-gray-950">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorites" element={<Collection />} />
      </Routes>
    </div>
  );
}

export default App;
