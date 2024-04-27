import React from "react";
import home from "../assets/home.png";
import about from "../assets/about.png";
import product  from "../assets/product.png"
import phone from "../assets/phone.png"
import phone2 from "../assets/phone-call.gif"
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="social_links_container">
      <Link className="social_link" title="Home">
        <img className="social_logo" src={home} width={30} />
      </Link>
      <Link className="social_link" title="About">
        <img className="social_logo" src={about} width={30} />
      </Link>
      <Link className="social_link" title="Products">
        <img className="social_logo" src={product} width={30} />
      </Link>
      {/* <Link className="social_link" title="Services">
        <img className="social_logo" src={home} alt="Linkedin" width={30} />
      </Link> */}
      <Link  className="social_link" title="Contact">
        <img className="social_logo" src={phone} alt="Contact" width={30} />
      </Link>
    </div>
  );
};

export default Navbar;
