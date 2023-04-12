/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import NavBar from "../components/navBar/Index"
import PageIndicator from '../components/pageIndicator/Index'
import Footer from "../components/footer/Index"
import Vector from "../assets/Vector.png"
import Card from "../components/cards/Index";

import "./Blog.css"
function Blogs() {
  return (
    <div>
      <NavBar/>
      <PageIndicator name="Blogs" src={Vector}/>
      <section className="blog">
      <Card/>
      </section>

      <Footer/>
    </div>
  )
}

export default Blogs
