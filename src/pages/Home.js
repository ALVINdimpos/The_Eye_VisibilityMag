import React from "react";
import NavBar from "../components/navBar/Index";
import Slider from "../components/ImageSlider/Link";
import Footer from "../components/footer/Index";
import IMAG from "../assets/ss1.jpg";
import IMAG1 from "../assets/ss2.jpg";
import IMAG2 from "../assets/ss3.jpg";
import IMAG4 from "../assets/sss4.jpg";
import IMAG5 from "../assets/sss5.jpg";
import Card from "../components/cards/Index";
import "./Home.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const HomePage = () => {
  return (
    <div>
      <NavBar />
      <h1 className="pt-30">hhhhhhhhh</h1>
      <Slider />
      <div className="container d-flex mt-4 gap-3">
        <BsFillArrowRightCircleFill size={30} className="mt-1" />
        <h3>Latest Magazine</h3>
      </div>
      <Card />
      <div className="container d-flex mt-4 gap-3">
        <BsFillArrowRightCircleFill size={30} className="mt-1" />
        <h3>Latest Videos</h3>
      </div>
      <div className="video_wrapper">
        <iframe
          width="350"
          height="371"
          src="https://www.youtube.com/embed/ROTmI0KsKQc"
          title="Marketing Rwanda as A High-end Ecotourism Destination | HOTEL STAR GRADING  [RDB DOCUMENTARY]"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe width="350" height="371" src="https://www.youtube.com/embed/GQywDPPbZzo" title="President Kagame displays football skills as his team defeats FIFA in Football Delegation Tournament" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="350" height="371" src="https://www.youtube.com/embed/e7LRcXFXPYY" 
        title="The world of football meets in Kigali! FIFA Congress Opening Ceremony | Kagame 
        and Infantino remarks" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
         encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="image-wraper">
        <img src={IMAG} alt="" />
        <img src={IMAG1} alt="" />
        <img src={IMAG2} alt="" />
      </div>
      <div className="center">
        <img src={IMAG4} alt="" />
        <img src={IMAG5} alt="" />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
