import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// import product1 from "../../../assets/products/earbuds-prod-3.webp";
import { useYourContext } from "../../../utils/context";

import "./CartItem.scss";

const CartItem = ({ setShowCart }) => {
  const { cartItem, handleRemoveFromCart, handleCartProductQuantity } =
    useYourContext();
  // console.log(cartItem);
  const navigate = useNavigate();

  return (
    <div className="cartProducts">
      {cartItem?.map((item) => {
        return (
          <div className="cartProduct" key={item?.id}>
            <div
              className="img"
              onClick={() => {
                navigate(`/product/${item.id}`);
                setShowCart(false);
              }}
            >
              <img
                src={item?.attributes?.img?.data?.[0]?.attributes.url}
                alt=""
              />
            </div>
            <div className="cartDetails">
              <span className="name">
                {item?.attributes?.title}
                <MdClose onClick={() => handleRemoveFromCart(item)} />
              </span>

              <div className="quantityButton">
                <span onClick={() => handleCartProductQuantity("dec", item)}>
                  -
                </span>
                <span>{item?.attributes?.quantity}</span>
                <span onClick={() => handleCartProductQuantity("inc", item)}>
                  +
                </span>
              </div>
              <div className="subTotalPrice">
                <span>{item?.attributes?.quantity}</span>
                <span>x</span>
                <span className="price">
                  &#8377;{item?.attributes?.price * item?.attributes?.quantity}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
