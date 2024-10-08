import React from "react";
import NavBar from "../components/navBar/Index";
import Slider from "../components/ImageSlider/Link";
import Footer from "../components/footer/Index";
import IMAG from "../assets/carLental.jpg";
import IMAG1 from "../assets/ss2.jpg";
import IMAG2 from "../assets/artwork.jpg";
import IMAG4 from "../assets/axar.jpg";
import IMAG5 from "../assets/Maga-A4.jpg";
import Card from "../components/cards/Index";
import kglCarRental from "../assets/kglCarRental.jpeg";
import "./Home.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const HomePage = () => {
  return (
    <div>
      <NavBar />
      <h1 className="pt-30">Live-Environment</h1>
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
          width="410"
          height="371"
          src="https://www.youtube.com/embed/ROTmI0KsKQc"
          title="Marketing Rwanda as A High-end Ecotourism Destination | HOTEL STAR GRADING  [RDB DOCUMENTARY]"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="410"
          height="371"
          src="https://www.youtube.com/embed/tQY4TWRHPZA"
          title="The best view you will see today of Bk Arena"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="410"
          height="371"
          src="https://www.youtube.com/embed/e7LRcXFXPYY"
          title="The world of football meets in Kigali! FIFA Congress Opening Ceremony | Kagame 
        and Infantino remarks"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write;
         encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
          <iframe
          width="410"
          height="371"
          src="https://www.youtube.com/embed/yzHIoN2VZ8U?si=xRpOeY08U5jwf7ib"
          title="We are HIFI TRADING SERVICES LTD. is a shop located in Kigali under Gloria Hotel, it sells Technology equipment such as: Computer and accessories, Smart TV, Digital TV, etc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write"
          // encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
         ></iframe>

      </div>
      <div className="image-wraper">
        <img src={IMAG} alt="" className="image-with-shadow" />
        <img src={IMAG1} alt="" className="image-with-shadow" />
        <img src={IMAG2} alt="" className="image-with-shadow" />
      </div>
      <div className="image-wraper ">
        <img src={IMAG4} alt="" className="image-with-shadow" />
        <img src={IMAG5} alt="" className="image-with-shadow" />
        <img src={kglCarRental} alt="" className="image-with-shadow" />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
