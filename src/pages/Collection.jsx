import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import ResultCard from "../Components/ResultCard";
import { Link } from "react-router-dom";
import { BsStars } from "react-icons/bs";
import { useState } from "react";

function Collection() {
  const [collection, setCollection] = useState(
    JSON.parse(localStorage.getItem("collection")) || [],
  );

  const refreshCollection = () => {
    const updatedCollection =
      JSON.parse(localStorage.getItem("collection")) || [];

    setCollection(updatedCollection);
  };
  return (
    <div>
      <div className="flex justify-center items-center gap-3 py-8">
        <BsStars className="text-cyan-400 text-5xl" />

        <h1 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Favorites
        </h1>
      </div>

      <div className="flex justify-center">
        <Link to="/">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-2xl px-5 py-3 sm:px-8 sm:py-4 transition duration-200">
            <FaArrowLeft className="text-white text-lg" />
            <span className="text-white font-medium">Back</span>
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {collection.map((item) => (
            <ResultCard
              key={`${item.type}-${item.id}`}
              item={item}
              showSave={false}
              showRemove={true}
              onRemove={refreshCollection} // 👈 STEP 8 YAHAN USE HOGA
            />
          ))}
        </div>
      </div>
    
  );
}

export default Collection;
