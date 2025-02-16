import { FaHeart, FaShoppingCart, FaCog } from "react-icons/fa";
import Image1 from "./Imageheader/Image7.png";
import { useNavigate } from "react-router-dom";
function Profile() {
  const nav = useNavigate();
  return (
    <div className="flex">
      <div className="flex items-center space-x-2 border-stone-200 rounded-full p-2 w-10 border-1 justify-center hover:bg-gray-200 hover:text-gray-700">
        <FaHeart onClick={() => nav("/hearth")} className="text-gray-600" />
      </div>
      <div className="flex items-center space-x-2 border-stone-200 rounded-full p-2 w-10 border-1 justify-center hover:bg-gray-200 hover:text-gray-700">
        <FaShoppingCart
          onClick={() => nav("/shopingcart")}
          className="text-gray-600"
        />
      </div>
      <div className="flex items-center space-x-2 border-stone-200 rounded-full p-2 w-10 border-1 justify-center hidden sm:block hover:bg-gray-200 hover:text-gray-700">
        <FaCog className="text-gray-600" />
      </div>

      <div className="border-stone-200 rounded-full w-10 border-1 justify-center ml-1">
        <img
          className="justify-center flex items-center"
          src={Image1}
          alt="Prof"
        />
      </div>
    </div>
  );
}

export default Profile;
