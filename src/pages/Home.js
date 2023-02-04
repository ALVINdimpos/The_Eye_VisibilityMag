import React from "react";
import NavBar from "../components/navBar/Index";
import Slider from "../components/banner/Slider";
import Footer from "../components/footer/Index";
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
          src="https://www.youtube.com/embed/LD6qMqvMpqE"
          title="Kigali-Gisenyi:Akarasisi kadasanzwe k'aba Rayon bajya guhura na Marine FC"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="350"
          height="371"
          src="https://www.youtube.com/embed/FSrTX5JkBW8"
          title="Uburakari mu baturage nyuma y'uko Nasho WFC itewe mpaga na Rayon Sports WFC kubera 'Ambulance'"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="350"
          height="371"
          src="https://www.youtube.com/embed/vyA6V0yL7Qo"
          title="Dore uko Perezida Kagame na Madame Jeannette Kagame bashyize Indabo ku Gicumbi Cy'Intwari."
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;
