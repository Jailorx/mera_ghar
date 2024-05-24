import { listData } from "../../dummyData";
import Filter from "./Filter/Filter";

const Listings = () => {
  const dummyData = listData;
  return (
    <main className="flex w-full justify-center my-20 mx-4">
      <Filter />
    </main>
  );
};

export default Listings;
