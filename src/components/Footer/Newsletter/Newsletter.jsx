import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import "./Newsletter.scss";


const Newsletter = () => {
  return (
    <div className="newsLetterSection">
      <div className="newsLetterContent wrapper">
        <span className="smallText">NewsLetter</span>
        <span className="bigText">Sign up for new updates and offers</span>
        <div className="form">
          <input type="mail" placeholder="Email" required />
          <button>Subscribe</button>
        </div>
        <div className="privacyText">Will be used in accordance with our Privacy Policy</div>
        <div className="socialIcons">
            <FaFacebookF/>
            <FaTwitter/>
            <FaInstagram/>
            <FaLinkedin/>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
