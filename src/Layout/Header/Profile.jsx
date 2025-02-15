import { FaHeart, FaShoppingCart, FaCog } from "react-icons/fa";

function Profile() {
  return (
    <div className="flex">
      <div className="flex items-center space-x-2 border-stone-200 rounded-full p-2 w-10 border-1 justify-center hover:bg-gray-200 hover:text-gray-700">
        <FaHeart className="text-gray-600" />
      </div>
      <div className="flex items-center space-x-2 border-stone-200 rounded-full p-2 w-10 border-1 justify-center hover:bg-gray-200 hover:text-gray-700">
        <FaShoppingCart className="text-gray-600" />
      </div>
      <div className="flex items-center space-x-2 border-stone-200 rounded-full p-2 w-10 border-1 justify-center hidden sm:block hover:bg-gray-200 hover:text-gray-700">
        <FaCog className="text-gray-600" />
      </div>

      <div className="border-stone-200 rounded-full w-10 border-1 justify-center">
        <img
          className="justify-center flex items-center"
          src="./Imageheader/Image7.png"
          alt="Prof"
        />
      </div>
    </div>
  );
}

export default Profile;
