import { useEffect, useState } from "react";
import { FaHeart, FaGasPump, FaCar, FaDollarSign } from "react-icons/fa";
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
import { useSearch } from "../../Context/ContextApi";
import { useDispatch } from "react-redux";
import { increment } from "../../Redux/Redux";

function BodyMainPage() {
  const [cars, setCars] = useState([]);
  const [hearths, setHearths] = useState(false);
  const { search } = useSearch();
  const dispatch = useDispatch();

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

  const getCars = async () => {
    const response = await fetch("http://localhost:3000/cars");
    const data = await response.json();
    setCars(data);
  };

  useEffect(() => {
    getCars();
  }, []);

  function handelishearth(Cartid) {
    setHearths((prevState) => ({
      ...prevState,
      [Cartid]: !prevState[Cartid],
    }));
  }
  const filteredCars = cars.filter((car) =>
    car.brand.toLowerCase().includes(search.toLowerCase())
  );

  function handeladdtocarts(id, name, fuel, seats, image, price) {
    const newItem = {
      id,
      name,
      fuel,
      seats,
      image,
      price,
    };
    dispatch(increment(newItem));
    console.log(id, name, fuel, seats, image, price);
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {filteredCars.length === 0
        ? cars.map((car, index) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] h-[330px] w-[300px] flex flex-col border border-gray-100 hover:border-[#3563E9]"
            >
              <div className="relative flex-1 p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {car.brand}
                  </h3>
                  <FaHeart
                    onClick={() => handelishearth(car.id)}
                    className={`text-2xl cursor-pointer ${
                      hearths[car.id] ? "text-red-500" : "text-gray-300"
                    } hover:text-red-500 transition-colors duration-300`}
                  />
                </div>
                <img
                  src={images[`Image${(index % 12) + 1}`]}
                  alt={car.brand}
                  className="w-full h-32 object-contain rounded-lg"
                />
              </div>
              <div className="p-4 bg-gray-50">
                <div className="flex gap-4 items-center mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaGasPump className="text-xl font-semibold text-[#3563E9]" />
                    <p>{car.fuel}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaCar className="text-xl text-[#3563E9]" />
                    <p className="font-semibold text-md">{car.seats} Seats</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() =>
                      handeladdtocarts(
                        car.id,
                        car.brand,
                        car.fuel,
                        car.seats,
                        images[`Image${(index % 12) + 1}`],
                        car.price
                      )
                    }
                    className="bg-[#3563E9] text-white py-2 px-6 rounded-lg hover:bg-[#2a4fb5] transition-colors duration-300 text-sm font-semibold"
                  >
                    Add to Cart
                  </button>
                  <p className="text-lg font-semibold text-[#3563E9] flex items-center gap-2">
                    <FaDollarSign />
                    {car.price}
                  </p>
                </div>
              </div>
            </div>
          ))
        : filteredCars.map((car, index) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] h-[330px] w-[300px] flex flex-col border border-gray-100 hover:border-[#3563E9]"
            >
              <div className="relative flex-1 p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {car.brand}
                  </h3>
                  <FaHeart
                    onClick={() => handelishearth(car.id)}
                    className={`text-2xl cursor-pointer ${
                      hearths[car.id] ? "text-red-500" : "text-gray-300"
                    } hover:text-red-500 transition-colors duration-300`}
                  />
                </div>
                <img
                  src={images[`Image${(index % 12) + 1}`]}
                  alt={car.brand}
                  className="w-full h-32 object-contain rounded-lg"
                />
              </div>
              <div className="p-4 bg-gray-50">
                <div className="flex gap-4 items-center mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaGasPump className="text-xl font-semibold text-[#3563E9]" />
                    <p>{car.fuel}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaCar className="text-xl text-[#3563E9]" />
                    <p className="font-semibold text-md">{car.seats} Seats</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() =>
                      handeladdtocarts(
                        car.id,
                        car.brand,
                        car.fuel,
                        car.seats,
                        images[`Image${(index % 12) + 1}`],
                        car.price
                      )
                    }
                    className="bg-[#3563E9] text-white py-2 px-6 rounded-lg hover:bg-[#2a4fb5] transition-colors duration-300 text-sm font-semibold"
                  >
                    Add to Cart
                  </button>
                  <p className="text-lg font-semibold text-[#3563E9] flex items-center gap-2">
                    <FaDollarSign />
                    {car.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}

export default BodyMainPage;
