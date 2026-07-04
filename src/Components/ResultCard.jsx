function ResultCard({ item, showSave = true, showRemove = false, onRemove }) {
  const addToCollection = (item) => {
    const oldData = JSON.parse(localStorage.getItem("collection")) || [];

    const alreadyExists = oldData.some((savedItem) => savedItem.id === item.id);
    const newData = [...oldData, item];
    if (!alreadyExists) {
      localStorage.setItem("collection", JSON.stringify(newData));
    }
  };

  const removeFromCollection = (id) => {
    const oldData = JSON.parse(localStorage.getItem("collection")) || [];

    const updatedData = oldData.filter(
      (savedItem) => !(savedItem.id === id && savedItem.type === item.type),
    );

    localStorage.setItem("collection", JSON.stringify(updatedData));

    if (onRemove) {
      onRemove();
    }
  };
  return (
    <div className="bg-gradient-to-br from-black via-gray-950 to-blue-950 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer w-full max-w-sm mx-auto">
      <div className="relative">
        {item.type === "video" ? (
          <video
            src={item.src}
            poster={item.thumbnail}
            className="w-full h-52 sm:h-64 object-cover"
            controls
          />
        ) : (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-52 sm:h-64 object-cover"
          />
        )}

        <span className="absolute top-3 right-3 bg-black/70 text-xs px-3 py-1 rounded-full capitalize">
          {item.type}
        </span>
      </div>

      <div className="p-4">
        <h2 className="text-white font-semibold text-base sm:text-lg truncate">
          {item.title}
        </h2>

        <p className="text-gray-400 text-sm mt-2">ID: {item.id}</p>

        <a
          href={item.src}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block w-full text-center bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition active:scale-95"
        >
          Open {item.type}
        </a>

        {showSave && (
          <button
            className="mt-4 inline-block w-full text-center bg-green-600 hover:bg-green-700 py-2 rounded-lg transition active:scale-95"
            onClick={() => {
              addToCollection(item);
            }}
          >
            Save
          </button>
        )}

        {showRemove && (
          <button
            className="mt-4 inline-block w-full text-center bg-red-600 hover:bg-red-700 py-2 rounded-lg transition active:scale-95"
            onClick={() => removeFromCollection(item.id)}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}

export default ResultCard;
