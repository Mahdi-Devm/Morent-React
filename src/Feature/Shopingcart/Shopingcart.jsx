import { useSelector, useDispatch } from "react-redux";
import { increment, removeItem } from "../../Redux/Redux";
import TotalItems from "./TotalItems";
import Cart from "./Cart";

function Shopingcart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.addcart.cart);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  function handleRemove(id) {
    dispatch(removeItem(id));
  }

  function handleAdd(id, name, price, image, fuel, seats) {
    const newItem = { id, name, price, image, fuel, seats };
    dispatch(increment(newItem));
  }

  return (
    <div className="p-8 mt-10">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Shopping Cart</h2>
      <TotalItems totalPrice={totalPrice} totalItems={totalItems} />

      {cart.length === 0 ? (
        <p className="text-xl text-gray-600">Your cart is empty</p>
      ) : (
        <Cart cart={cart} handleRemove={handleRemove} handleAdd={handleAdd} />
      )}
    </div>
  );
}

export default Shopingcart;
