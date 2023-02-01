/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import NavBar from "../components/navBar/Index"
import PageIndicator from '../components/pageIndicator/Index'
import Footer from "../components/footer/Index"
import Image from '../assets/gollira.PNG'
import Image1 from '../assets/mag3.jpg'
import Christams from "../assets/Christams.PNG"
import Vector from "../assets/Vector.png";

import "./Blog.css"
function Blogs() {
  return (
    <div>
      <NavBar/>
      <PageIndicator name="Blogs" src={Vector}/>
 <section id="blog" className="section-100">
  <div className="container">
    <h1 className="text-center"><b>Our Blog</b></h1>
    <br />
    <br />
    <div className="row">
      <div className="col-md-4">
        <div className="blog-card">
          <img src={Image} alt className="blog-thumbnail" />
          <div className="blog-container">
            <span className="badge badge-info">Technology</span>
            <h4><b>Blog title</b></h4>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ullam, reprehenderit? Praesentium doloribus soluta, quia.</p>
            <hr />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog-card">
          <img src={Image1} alt className="blog-thumbnail" />
          <div className="blog-container">
            <span className="badge badge-warning">Science</span>
            <h4><b>Blog title</b></h4>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ullam, reprehenderit? Praesentium doloribus soluta, quia.</p>
            <hr />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="blog-card">
          <img src={Christams} alt className="blog-thumbnail" />
          <div className="blog-container">
            <span className="badge badge-success">Agriculture</span>
            <h4><b>Blog title</b></h4>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ullam, reprehenderit? Praesentium doloribus soluta, quia.</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
  </div>
</section>

      <Footer/>
    </div>
  )
}

export default Blogs
