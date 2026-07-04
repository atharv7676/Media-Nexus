import ResultGrid from "./Components/ResultGrid";
import SearchBar from "./Components/SearchBar";
import Tabs from "./Components/Tabs";

function App() {
  return (
    <div className="min-h-screen text-white w-full bg-gray-950">
      
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  );
}

export default App;

