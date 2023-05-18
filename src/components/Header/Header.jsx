import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { useYourContext } from "../../utils/context";

import "./Header.scss";
const Header = () => {
  const [sticky, setSticky] = useState("");
  const [lastScroll, setLastScroll] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const {cartCount} = useYourContext()


  const scrollHandler = () => {
    let scrollValue = window.scrollY;
    if (scrollValue > 250) {
      setSticky("sticky");
      setLastScroll(scrollValue);
    } else {
      setSticky("");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);
  return (
    <>
      <header className={`mainHeader ${lastScroll > 250 ? sticky : ""}`}>
        <div className="headerContent wrapper">
          <ul className="left">
            <li><NavLink to="/">Home</NavLink></li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center">
            <span className="menuBar">
              <IoIosMenu />
            </span>
            <NavLink to="/">Shopify</NavLink>
          </div>
          <div className="right">
            <TbSearch onClick={()=>setShowSearch(true)}/>
            <AiOutlineHeart />
            <span className="cartIcon" onClick={()=>setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount&&<span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart&&<Cart setShowCart={setShowCart}/>}
      {showSearch&&<Search setShowSearch={setShowSearch}/>}
    </>
  );
};

export default Header;
