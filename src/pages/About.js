import React from "react";
import NavBar from "../components/navBar/Index";
import PageIndicator from "../components/pageIndicator/Index";
import Footer from "../components/footer/Index";
import Vector from "../assets/Vector.png";
import "./About.css";
function About() {
  return (
    <div>
      <NavBar />
      <PageIndicator name="About Us" src={Vector} />
      <section class="services">
        <div className="container">
          <div className="title">
            <h1>
              Our top <span>services</span>
            </h1>
            <span className="slogan">enjoy our services</span>
          </div>
          <div className="services_boxes">
            <div className="box">
              <i className="fa fa-map" />
              <h4>Advertising</h4>
              <p>
                The goal of advertising is to reach people most likely to be
                willing to pay for a company's products or services and entice
                them to buy.
              </p>
            </div>
            <div className="box br">
              <i className="fa fa-window-restore" />
              <h4>Printing</h4>
              <p>
                putting words and images on paper by mechanical means. Books and
                newspapers are made by printing.
              </p>
            </div>
            <div className="box">
              <i className="fa fa-clone" />
              <h4>copying</h4>
              <p>
                reproducing material by any means (into digital or analogue
                form)  making a photocopy or recording,
                scanning onto a computer ...
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
