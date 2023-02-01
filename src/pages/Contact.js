import React from 'react'
import NavBar from "../components/navBar/Index"
import ContactForm  from "../components/ContactForm/index"
import PageIndicator from '../components/pageIndicator/Index'
import Footer from "../components/footer/Index"
import Vector from "../assets/Vector.png";
const Contactus = () => {
  return (
    <div>
      <NavBar />
      <PageIndicator name="Contact us " src={Vector}/>
      <ContactForm/>

    <Footer />
  </div>
  )
}

export default Contactus