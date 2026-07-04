import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../app/features/searchSlice";
import { Link } from "react-router-dom";
function Tabs() {
  const tabs = ["photos", "videos", "gifs"];

  const activeTab = useSelector((state) => state.search.activeTab);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 px-4 py-8">
      <div className="flex flex-wrap justify-center gap-3 bg-gray-900/80 backdrop-blur-md p-2 rounded-2xl border border-gray-800 shadow-lg">
        {tabs.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`text-white px-6 sm:px-10 py-3 rounded-2xl active:scale-95 transition cursor-pointer ${
                activeTab === tab
                  ? `bg-blue-600 text-white`
                  : `bg-gray-700 text-gray-300`
              }`}
              onClick={() => {
                dispatch(setActiveTabs(tab));
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div>
        <Link to="/favorites">
          <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white transition active:scale-95">
            Favorites
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Tabs;
