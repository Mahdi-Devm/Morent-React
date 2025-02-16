import { useSelector } from "react-redux";

function HearthPage() {
  const cartHearth = useSelector((state) => state.addcart.carthearth);
  console.log(cartHearth);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartHearth.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartHearth.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-4">
            <div>
              <h3>{item.img}</h3>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default HearthPage;
