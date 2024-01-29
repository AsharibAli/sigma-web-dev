import React from "react";
import Footer from "./Footer";

const Navbar = ({logoText}) => {
  return (
    <div>
      <div className="logo">{logoText}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <Footer />
    </div>
  );
};

export default Navbar;
