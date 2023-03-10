/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Style.css";
import Logo from "../../assets/logo.png";

const Index = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fa fa-map-marker" />
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>Remera Nobiscum house</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fa fa-phone" />
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>+250 722472140</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fa fa-envelope-open" />
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>visibilitymag@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src={Logo} className="img-fluid" alt="logo" />
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                    The Eye Visibility Ltd is an advertising company with
                    footprints in Rwanda supporting companies establish a solid
                    brand and reputation through its advertising campaigns using
                    a combination of advertising channels.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="https://twitter.com/the_visibility">
                    <i className="fa fa-twitter twitter-bg" />
                  </a>
                  <a href="https://instagram.com/thevisibilitymaga">
                    <i className="fa fa-instagram twitter-bg" />
                  </a>
                  <a href="https://google.com/theeyevisibilitymag.com">
                    {" "}
                    <i className="fa fa-google twitter-bg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="https://formsubmit.co/el/moloxe" method="POST" >
                    <input type="email" placeholder="Email Address" name="email"></input>
                    <button type="submit">
                      <i className="fa fa-telegram" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright © {date}, All Right Reserved{" "}
                  <a href="https://theeyevisibilitymag.com/">theeyevisibilitymag</a>
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Policy</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Index;
