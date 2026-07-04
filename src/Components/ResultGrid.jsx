import { useEffect } from "react";
import { fetchGifs, fetchVideos, fetchPhotos } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
  setActiveTabs,
  nextPage,
  prevPage,
  setPage,
} from "../app/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

function ResultGrid() {
  const { query, activeTab, results, loading, error, page } = useSelector(
    (store) => store.search,
  );

  const dispatch = useDispatch();

  useEffect(
    function () {
      // if(!query) return <h1>Type Something Idiot !!</h1>
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data;

          if (activeTab === "photos") {
            const response = await fetchPhotos(query, page);
            data = response.results.map((photo) => ({
              id: photo.id,
              src: photo.urls.regular,
              thumbnail: photo.urls.small,
              title: photo.alt_description || photo.description || "Untitled",
              type: "photo",
            }));
          }

          if (activeTab === "videos") {
            const response = await fetchVideos(query, page);
            data = response.videos.map((video) => ({
              id: video.id,
              src: video.video_files?.[0]?.link,
              thumbnail: video.image,
              title: video.user.name,
              type: "video",
            }));
          }

          if (activeTab === "gifs") {
            const response = await fetchGifs(query, page);
            data = response.data.map((gif) => ({
              id: gif.id,
              src: gif.images.original.url,
              thumbnail: gif.images.fixed_height_small.url,
              title: gif.title || "Untitled",
              type: "gif",
            }));
          }

          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err));
        }
      };
      getData();
    },
    [query, activeTab, page],
  );
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading....</h1>;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {results.map((item, idx) => {
          return (
            <div key={idx}>
              <ResultCard item={item} />
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center gap-6 py-10">
        <button
          onClick={() => dispatch(prevPage())}
          disabled={page === 1}
          className="
      px-5 py-2
      bg-gray-800 text-white
      rounded-xl
      hover:bg-gray-700
      active:scale-95
      transition-all duration-200
      disabled:opacity-40
      disabled:cursor-not-allowed
    ">
          ← Previous
        </button>

        <div
          className="
      px-5 py-2
      bg-green-600
      text-white
      rounded-xl
      font-semibold
      shadow-lg
    "
        >
          Page {page}
        </div>

        <button
          onClick={() => dispatch(nextPage())}
          className="
      px-5 py-2
      bg-blue-600 text-white
      rounded-xl
      hover:bg-blue-700
      active:scale-95
      transition-all duration-200
    "
        >
          Next →
        </button>
      </div>
    </>
  );
}

export default ResultGrid;
