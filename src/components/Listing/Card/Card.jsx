import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineBedroomParent } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";

const Card = ({ item }) => {
  return (
    <div className="flex my-4 gap-4 hover:scale-95 p-2 shadow-lg">
      <Link to={`/${item.id}`}>
        <img
          src={item.img}
          alt={`${item.title}_picture`}
          width="300px"
          className="rounded-lg"
        />
      </Link>
      <div className="flex flex-col gap-4 w-3/5">
        <Link to={`/${item.id}`}>
          <h2 className="text-lg font-bold text-primary-custom-indigo-600">
            {item.title}
          </h2>
        </Link>

        <div className="flex items-center">
          <FaLocationDot />
          <span>{item.address}</span>
        </div>
        <p className="text-lg font-bold">${item.price}</p>

        <div className="flex items-center justify-between w-cover">
          <div className="flex items-center gap-4">
            <div className="flex items-center p-1 rounded bg-primary-custom-indigo-100">
              <MdOutlineBedroomParent />
              <span>Bedroom</span>
            </div>
            <div className="flex items-center p-1 rounded bg-primary-custom-indigo-100">
              <LuBath />
              <span>Bathroom</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaBookmark size="30px" className="hover:scale-125" />
            <IoChatboxEllipsesSharp size="30px" className="hover:scale-125" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
