import React from 'react'
import NavBar from '../components/navBar/Index'
import Slider from '../components/banner/Slider'
import Footer from '../components/footer/Index'
import Card from '../components/cards/Index'
const HomePage = () => {
  return (
    <div>
        <NavBar />
        <Slider />
        <Card />
        <Footer />

    </div>
  )
}

export default HomePage