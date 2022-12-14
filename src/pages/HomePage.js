import React from 'react'
import NavBar from '../components/navBar/Index'
import Slider from '../components/banner/Slider'
import Footer from '../components/footer/Index'
import Card from '../components/cards/Index'
import PageIndicator from '../components/pageIndicator/Index'
const HomePage = () => {
  return (
    <div>
        <NavBar />
        <Slider />
        <PageIndicator />
        <Card />
        <Footer />

    </div>
  )
}

export default HomePage