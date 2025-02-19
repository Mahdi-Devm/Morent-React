import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Image1 from "./Imageheader/Image7.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Profile() {
  const nav = useNavigate();

  const cart = useSelector((state) => state.addcart.cart);
  const conts = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="flex gap-1">
      <div
        onClick={() => nav("/hearth")}
        className="relative flex items-center space-x-2 border-stone-200 rounded-full p-2 w-10 border-1 justify-center hover:bg-gray-200 hover:text-gray-700 hover:cursor-pointer"
      >
        <FaHeart className="text-gray-600" />
      </div>

      <div
        onClick={() => nav("/shopingcart")}
        className="relative flex items-center space-x-2 border-stone-200 rounded-full p-2 w-10 border-1 justify-center hover:bg-gray-200 hover:text-gray-700 hover:cursor-pointer"
      >
        <FaShoppingCart className="text-gray-600" />
        {conts > 0 && (
          <span className="absolute top-0 right-0 bg-[#1D74D2] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {conts}
          </span>
        )}
      </div>

      <div className="border-stone-200 rounded-full w-10 border-1 justify-center ml-1 hover:border hover:border-stone-600 hover:transition-all hover:duration-300">
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
