import PropTypes from "prop-types";
function TotalItems({ totalItems, totalPrice }) {
  return (
    <div className="flex justify-between items-center mb-8 p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="text-xl font-semibold text-gray-800">
        <p>Total Items: {totalItems}</p>
        <p>
          Total Price:{" "}
          <span className="text-[#1D74D2]">${totalPrice.toFixed(2)}</span>
        </p>
      </div>
      <div>
        <button className="bg-[#1D74D2] text-white py-2 px-4 rounded-lg hover:bg-[#155A8A] transition-colors duration-300">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
TotalItems.propTypes = {
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default TotalItems;
