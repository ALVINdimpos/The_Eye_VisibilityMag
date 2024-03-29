/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Style.css";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
const Index = () => {

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span />
          <span />
          <span />
        </label>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            {" "}
            <NavLink to="/Home" onClick={handleLinkClick}>HOME</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/About" onClick={handleLinkClick}>ABOUT US</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/Blogs" onClick={handleLinkClick}>BLOGS</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/Contact" onClick={handleLinkClick}>CONTACT US</NavLink>
          </li>
          <a className="icon">
          <a href="https://twitter.com/the_visibility"><i className="fa fa-twitter" /></a>
          <a href="https://instagram.com/thevisibilitymaga"><i className="fa fa-instagram" /></a>
          <a href="https://google.com/theeyevisibilitymag.com"> <i className="fa fa-google" /></a> 
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Index;
