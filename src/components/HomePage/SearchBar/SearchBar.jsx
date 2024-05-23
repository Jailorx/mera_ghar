import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 5000,
    maxPrice: 5000,
  });

  const handleTypeChange = () => {
    if (searchQuery.type === "buy")
      setSearchQuery({ ...searchQuery, type: "rent" });
    else setSearchQuery({ ...searchQuery, type: "buy" });
  };

  const handleSearchQueryChange = (e) => {
    console.log("searchQuery:", searchQuery);
    const target = e.target.name;
    const value = e.target.value;
    setSearchQuery({ ...searchQuery, [target]: value });
  };
  return (
    <div className=" flex flex-col my-20 gap-5  bg-primary-custom-indigo-200 px-10 py-5 rounded-3xl">
      <div className="flex gap-2">
        {types.map((type) => (
          <button
            key={type}
            onClick={handleTypeChange}
            className={`${
              searchQuery.type === type
                ? "bg-primary-custom-indigo-600 font-bold text-white rounded-md"
                : "bg-transparent"
            } px-4 py-2 `}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row">
        <form className="flex flex-col lg:flex-row gap-5 px-10 py-5 rounded-3xl">
          <input
            type="text"
            name="location"
            placeholder="Desired Location"
            className="p-3 focus:outline-none w-64 rounded-xl"
            onChange={handleSearchQueryChange}
          />
          <input
            type="number"
            name="minPrice"
            min={5000}
            max={100000000}
            placeholder="Min. Price"
            className="p-3 focus:outline-none w-64 rounded-xl"
            onChange={handleSearchQueryChange}
          />
          <input
            type="number"
            name="maxPrice"
            min={5000}
            max={100000000}
            placeholder="Max. Price"
            className="p-3 focus:outline-none w-64 rounded-xl"
            onChange={handleSearchQueryChange}
          />
        </form>
        <button>
          <FaSearch
            size="30px"
            className="text-primary-custom-indigo-700 hover:scale-125 w-full"
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
