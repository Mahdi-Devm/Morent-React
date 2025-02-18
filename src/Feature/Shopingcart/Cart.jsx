import { FaCar, FaDollarSign, FaGasPump, FaTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";

function Cart({ cart, handleRemove, handleAdd }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cart.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] h-[330px] w-[300px] flex flex-col border border-gray-100 hover:border-[#1D74D2]"
          >
            <div className="relative flex-1 p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {item.name} (x{item.quantity})
                </h3>
                <FaTrashAlt
                  onClick={() => handleRemove(item.id)}
                  className="text-2xl cursor-pointer text-gray-400 hover:text-red-600 transition-colors duration-300"
                />
              </div>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-contain rounded-lg"
              />
            </div>
            <div className="p-4 bg-gray-50">
              <div className="flex gap-4 items-center mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FaGasPump className="text-xl font-semibold text-[#1D74D2]" />
                  <p>{item.fuel}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FaCar className="text-xl text-[#1D74D2]" />
                  <p className="font-semibold text-md">{item.seats} Seats</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => {
                    handleAdd(
                      item.id,
                      item.name,
                      item.price,
                      item.image,
                      item.fuel,
                      item.seats
                    );
                  }}
                  className="bg-[#1D74D2] text-white py-2 px-6 rounded-lg hover:bg-[#155A8A] transition-colors duration-300 text-sm font-semibold"
                >
                  Add Another
                </button>

                <div className="flex items-center gap-2 text-lg font-semibold text-[#1D74D2]">
                  <FaDollarSign className="text-xl" />
                  <p>{item.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      fuel: PropTypes.string.isRequired,
      seats: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

export default Cart;
