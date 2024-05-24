import { listData } from "../../dummyData";
import Filter from "./Filter/Filter";
import Card from "./Card/Card";

const Listings = () => {
  const dummyData = listData;
  return (
    <main className="flex justify-center my-20 mx-4 gap-4">
      <div className="flex flex-col w-3/5">
        <Filter />
        {dummyData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div className="bg-pink-200 w-2/5">Map</div>
    </main>
  );
};

export default Listings;
