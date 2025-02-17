import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../Redux/Redux";
import Image1 from "./car.png";
import Image2 from "./Car1.png";
import Image3 from "./Car2.png";
import Image4 from "./Car3.png";
import Image5 from "./Car4.png";
import Image6 from "./Car5.png";
import Image7 from "./Car6.png";
import Image8 from "./Car7.png";
import Image9 from "./Car8.png";
import Image10 from "./Car9.png";
import Image11 from "./Car10.png";
import Image12 from "./Car11.png";
import { useEffect, useState } from "react";
import LoadingPage from "../LoadingPage/LoadingPage";

function HearthPage() {
  const dispatch = useDispatch();
  const cartHearth = useSelector((state) => state.addcart.carthearth);
  const [Loading, setLoading] = useState(true);
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
    console.log(itemId);
  };
  const images = {
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
  };
  useEffect(() => {
    setLoading(false);
  }, []);

  if (Loading) {
    return <LoadingPage />;
  }

  return (
    <div className="mt-18 px-4">
      <h2 className="text-3xl font-semibold text-gray-900 mb-8">Heart plate</h2>
      {cartHearth.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
          {cartHearth.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] h-[330px] w-[300px] flex flex-col border border-gray-100 hover:border-[#3563E9]"
            >
              <div className="relative flex-1 p-4">
                <div className="flex justify-between items-center mb-4">
                  <span
                    onClick={() => handleRemoveFromCart(item.Cartid)}
                    className="text-2xl cursor-pointer text-gray-300 hover:text-red-500 transition-colors duration-300"
                  >
                    ❤️
                  </span>
                </div>
                <img
                  onClick={() => console.log(`Navigate to ${item.fuel}`)}
                  src={images[`Image${(index % 12) + 1}`]}
                  alt={item.fuel}
                  className="w-full h-32 object-contain rounded-lg"
                />
              </div>
              <div className="p-4 bg-gray-50">
                <div className="flex gap-4 items-center mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-xl font-semibold text-[#3563E9]">
                      ⛽
                    </span>
                    <p>{item.fuel}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-xl text-[#3563E9]">🚗</span>
                    <p className="font-semibold text-md">{item.seats} Seats</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HearthPage;
