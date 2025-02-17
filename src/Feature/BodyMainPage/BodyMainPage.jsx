import { useState, useEffect } from "react";
import { FaHeart, FaGasPump, FaCar, FaDollarSign } from "react-icons/fa";
import { useSearch } from "../../Context/ContextApi";
import { useDispatch } from "react-redux";
import { increment, incrementhearth } from "../../Redux/Redux";
import LoadingPage from "../LoadingPage/LoadingPage";
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
import { useNavigate } from "react-router-dom";

const cars = [
  { id: 1, brand: "Toyota", fuel: 50, seats: 5, price: 30000 },
  { id: 2, brand: "Honda", fuel: 45, seats: 5, price: 28000 },
  { id: 3, brand: "BMW", fuel: 60, seats: 4, price: 50000 },
  { id: 4, brand: "Audi", fuel: 55, seats: 4, price: 45000 },
  { id: 5, brand: "Mercedes", fuel: 70, seats: 5, price: 60000 },
  { id: 6, brand: "Ford", fuel: 50, seats: 5, price: 25000 },
  { id: 7, brand: "Chevrolet", fuel: 65, seats: 5, price: 32000 },
  { id: 8, brand: "Nissan", fuel: 55, seats: 5, price: 28000 },
  { id: 9, brand: "Tesla", fuel: 0, seats: 5, price: 70000 },
  { id: 10, brand: "Hyundai", fuel: 45, seats: 5, price: 27000 },
  { id: 11, brand: "Tesla", fuel: 5, seats: 5, price: 23000 },
  { id: 12, brand: "Chevrolet", fuel: 52, seats: 6, price: 77000 },
];

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

function BodyMainPage() {
  const [hearths, setHearths] = useState({});
  const { search } = useSearch();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  function handelishearth(Cartid, fuel, image) {
    setHearths((prevState) => ({
      ...prevState,
      [Cartid]: !prevState[Cartid],
    }));

    const newItem = { Cartid, fuel, image };

    dispatch(incrementhearth(newItem));
  }

  const filteredCars = cars.filter((car) =>
    car.brand.toLowerCase().includes(search.toLowerCase())
  );

  function handeladdtocarts(id, name, fuel, seats, image, price) {
    const newItem = { id, name, fuel, seats, image, price };
    dispatch(increment(newItem));
  }

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  const displayCars = filteredCars.length === 0 ? cars : filteredCars;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {displayCars.map((car, index) => (
        <div
          key={car.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] h-[330px] w-[300px] flex flex-col border border-gray-100 hover:border-[#3563E9]"
        >
          <div className="relative flex-1 p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">{car.brand}</h3>
              <FaHeart
                onClick={() =>
                  handelishearth(
                    car.id,
                    car.fuel,
                    images[`Image${(index % 12) + 1}`]
                  )
                }
                className={`text-2xl cursor-pointer ${
                  hearths[car.id] ? "text-red-500" : "text-gray-300"
                } hover:text-red-500 transition-colors duration-300`}
              />
            </div>
            <img
              onClick={() => navigate(`/product/${car.id}`)}
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
