import React from 'react'
import NavBar from "../components/navBar/Index"
import ContactForm  from "../components/ContactForm/index"
import PageIndicator from '../components/pageIndicator/Index'
import Footer from "../components/footer/Index"

const Contactus = () => {
  return (
    <div>
      <NavBar />
      <PageIndicator name="Contact us "/>
      <ContactForm/>

    <Footer />
  </div>
  )
}

export default Contactus