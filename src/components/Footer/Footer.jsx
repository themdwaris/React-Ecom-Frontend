import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import payment from "../../assets/payments.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footerSection">
      <div className="footerContent wrapper">
        <div className="footerCol">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos culpa quod nihil nesciunt, saepe optio error earum
            aspernatur expedita sint.
          </div>
        </div>
        <div className="footerCol">
          <div className="title">Contact</div>
          <div className="contactItems">
            <FaLocationArrow />
            <div className="text">
              Kajipur, Suti Mil Rd, Maghar Sant Kabir Nagar, 272173
            </div>
          </div>

          <div className="contactItems">
            <FaMobileAlt />
            <div className="text">Phone: 381276252</div>
          </div>

          <div className="contactItems">
            <FaEnvelope />
            <div className="text">Email: example@gmail.com</div>
          </div>
        </div>
        <div className="footerCol">
          <div className="title">Categories</div>

          <span className="text">Headphone</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Projectors</span>
        </div>
        <div className="footerCol">
          <div className="title">Pages</div>

          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Categories</span>
          <span className="text">Privacy & Policy</span>
          <span className="text">Contact Us</span>
        </div>
      </div>

      <div className="bottomBar">
        <div className="bottomBarContent wrapper">
          <div className="text">
            Shopify created by 
            <a href="https://themdwaris.netlify.app" target="_blank"> themdwaris</a> &copy;
            copyright 2023 All Right reserved.
          </div>
          <img src={payment} alt="paymentLogo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
