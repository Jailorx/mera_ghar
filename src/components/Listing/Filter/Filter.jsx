import { FaSearch } from "react-icons/fa";

const Filter = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="text-2xl font-bold text-primary-custom-indigo-600">
        Search results
      </h1>
      <div className="flex flex-col">
        <label htmlFor="location" className="text-sm font-bold">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="City Location"
          className="px-4 py-2  focus:outline-none border-2 border-primary-custom-indigo-700 rounded-lg"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="minPrice" className="text-sm font-bold">
          Price
        </label>
        <input
          type="number"
          id="minPrice"
          name="minPrice"
          placeholder="any"
          className="px-4 py-2  focus:outline-none border-2 border-primary-custom-indigo-700 rounded-lg"
        />
      </div>
      <div className="flex flex-row gap-4 ">
        <div className="flex flex-col ">
          <label htmlFor="type" className="font-bold ">
            Type
          </label>
          <select
            name="type"
            id="type"
            className="p-2 border-2 border-primary-custom-indigo-700 rounded-lg"
          >
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="protperty" className="font-bold  ">
            Property
          </label>
          <select
            name="property"
            id="property"
            className="p-2 border-2 border-primary-custom-indigo-700 rounded-lg w-30 "
          >
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="bedroom" className="font-bold  ">
            Bedroom
          </label>
          <input
            type="number"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            className="p-2 border-2 border-primary-custom-indigo-700 rounded-lg w-20"
          />
        </div>
        <button className="w-full">
          <FaSearch className="text-primary-custom-indigo-700 " size="50px" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
