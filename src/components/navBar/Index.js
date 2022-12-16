/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Style.css'
import Logo from "../../assets/logo.png"
const Index = () => {
  return (
    <div className="nav">
  <input type="checkbox" id="nav-check" />
  <div className="nav-header">
    <div className="logo" >
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
      <li><a href="#" target="_blank">Home</a></li>
      <li><a href="#" target="_blank">About us</a></li>
      <li><a href="#" target="_blank">Blog</a></li>
      <li><a href="#" target="_blank">Contact us</a></li>
      <a className="icon">
        <i className="fa fa-twitter" />
        <i className="fa fa-linkedin" />
        <i className="fa fa-youtube" />
      </a>
    </ul>
  </div>
</div>


  )
}

export default Index