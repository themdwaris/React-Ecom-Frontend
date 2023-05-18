import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import "./Cart.scss";
import { useYourContext } from "../../utils/context";
import { useLocation, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/api";

const Cart = ({ setShowCart }) => {
  const { cartItem, cartSubTotal } = useYourContext();
  const location = useLocation();
  const navigate = useNavigate();

  const stripePromise = loadStripe(import.meta.env.VITE_APP_PAYMENT_KEY);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: cartItem,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cartPanel">
      <div className="backShadow" onClick={() => setShowCart(false)}></div>
      <div className="cartContent">
        <div className="cartHeader">
          <span className="heading">Shopping Cart</span>
          <span className="closeBtn" onClick={() => setShowCart(false)}>
            <MdClose /> <span className="text">Close</span>
          </span>
        </div>
        {cartItem.length === 0 && (
          <div className="emptyCart">
            <BsCartX />
            <span>No products in the cart.</span>
            <button
              className="returnCta"
              onClick={() => {
                navigate(location.pathname);
                setShowCart(false);
              }}
            >
              Return to shop
            </button>
          </div>
        )}
        <>
          <CartItem setShowCart={setShowCart} />
          <div className="cartFooter">
            <div className="subTotal">
              <span className="text">Subtotal</span>

              <span className="text total">&#8377;{cartSubTotal}</span>
            </div>
            <div className="checkout">
              <button onClick={handlePayment}>Checkout</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
