import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../app/features/searchSlice";
import { BsStars } from "react-icons/bs";

function SearchBar() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
  };
  return (
    <div>
      <div className="flex justify-center items-center gap-3 py-8">
        <BsStars className="text-cyan-400 text-3xl sm:text-5xl" />

        <h1 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Media Nexus
        </h1>
      </div>
      <form
       className="flex flex-col sm:flex-row gap-5 bg-gray-900 mx-4 sm:mx-8 items-center rounded-xl"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          required
          type="text"
          placeholder="Explore Media Here"
         className="px-4 py-2 m-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 w-80 sm:w-8/12 min-w-0"
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition m-4 active:scale-95 w-50 sm:w-auto">
          Search Here
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
