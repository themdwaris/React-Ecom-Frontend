import RelatedProducts from "./RelatedProducts/RelatedProducts";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";

import "./SingleProduct.scss";
import { NavLink, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";
import { useYourContext } from "../../utils/context";


const SingleProduct = () => {
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const [quantity, setQuantity] = useState(1);
  const { handleAddToCart } = useYourContext();
  // console.log(data)
  

  const incre = () => {
    setQuantity((prevVal) => prevVal + 1);
  };

  const decre = () => {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity((prevVal) => prevVal - 1);
    }
  };
  if (!data) return;
  const product = data.data[0].attributes;
  return (
    <div className="singleProductContainer">
      <div className="layoutContainer wrapper">
        <div className="singleProductContent">
          <div className="left">
            <img src={product?.img.data[0].attributes.url} alt="" />
          </div>
          <div className="right">
            <div className="title">{product?.title}</div>
            <p className="price">&#8377;{product.price}</p>
            <p className="desc">{product.desc}</p>

            <div className="cartButton">
              <div className="quantityButton">
                <span onClick={decre}>-</span>
                <span>{quantity}</span>
                <span onClick={incre}>+</span>
              </div>
              <button
                onClick={() => {
                  handleAddToCart(data.data[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus /> Add to Cart
              </button>
              <NavLink to='/'><button className="gotoBack">Back</button></NavLink>
            </div>

            <span className="divider" />

            <div className="itemInfo">
              <p className="category">
                Category:{" "}
                <span>{product.categories.data[0].attributes.text}</span>
              </p>
              <p className="shareIcons">
                Share:
                <span>
                  <FaInstagram size={18} /> <FaTwitter size={18} />{" "}
                  <FaFacebook size={18} /> <FaPinterest size={18} />
                </span>
              </p>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
