import { useParams } from "react-router-dom";
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
import { FaRegStar, FaStar } from "react-icons/fa";
import { cars, reviews } from "./DataFake";
import { increment } from "../../Redux/Redux";
import { useDispatch } from "react-redux";

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

function ProductDetailPage() {
  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id));
  const dispatch = useDispatch();
  function handeladdtocarts(id, name, fuel, seats, image, price) {
    const newItem = { id, name, fuel, seats, image, price };
    dispatch(increment(newItem));
  }
  if (!car) {
    return <div>Product not found!</div>;
  }

  return (
    <>
      <div className="w-full flex flex-col justify-center mx-auto">
        <div className="container mx-auto px-4 py-8 mt-18 flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col gap-4 lg:w-1/2 bg-white p-2 rounded-2xl">
            <img
              src={images[`Image${car.id}`]}
              alt={car.brand}
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
            <div className="grid grid-cols-3 gap-2 mt-4">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="w-full">
                  <img
                    src={images[`Image${car.id}`]}
                    alt={car.brand}
                    className="w-full h-auto rounded-lg border-2 border-gray-300 transition-transform transform hover:scale-105 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6 bg-white p-2 rounded-2xl">
            <h1 className="text-4xl font-semibold text-[#2A4FB5]">
              {car.brand}
            </h1>
            <p className="text-lg text-gray-600">{car.description}</p>
            <div className="space-y-2 mt-4 text-lg">
              <div>
                <strong>Gasoline:</strong> {car.gasoline}
              </div>
              <div>
                <strong>Steering:</strong> {car.steering}
              </div>
              <div>
                <strong>Capacity:</strong> {car.capacity}
              </div>
              <div>
                <strong>Type:</strong> {car.type}
              </div>
            </div>
            <div className="flex items-center mt-6">
              <span className="text-2xl font-bold text-[#2A4FB5]">
                {car.price}
              </span>
              <span className="ml-2 text-gray-500">/ day</span>
            </div>
            <button
              onClick={() =>
                handeladdtocarts(
                  car.id,
                  car.brand,
                  car.fuel,
                  car.seats,
                  images[`Image${car.id}`],
                  car.price
                )
              }
              className="mt-6 bg-[#2A4FB5] text-white py-3 px-6 rounded-lg hover:bg-[#1A3D8B] transition duration-200 transform hover:scale-101 hover:cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="mt-10 w-full lg:w-3/4 mx-auto bg-white p-2 rounded-2xl">
          <h2 className="text-3xl font-semibold text-[#2A4FB5] mb-6">
            Customer Reviews
          </h2>
          {reviews
            .filter((review) => review.carId === car.id)
            .map((review, index) => (
              <div key={index} className="border-t-2 pt-6 mt-6">
                <div className="flex items-center gap-4">
                  <div className="font-semibold text-xl">{review.user}</div>
                  <div className="text-gray-500 text-sm">
                    {review.profession}
                  </div>
                </div>

                <div className="text-gray-400 text-sm mt-2">
                  {review.location} • {review.date}
                </div>

                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">
                      {i < review.rating ? <FaStar /> : <FaRegStar />}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 mt-4">{review.comment}</p>

                <div className="text-gray-500 text-sm mt-2">
                  {review.helpfulVotes} people found this helpful
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default ProductDetailPage;
