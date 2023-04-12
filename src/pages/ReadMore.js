import React from 'react';
import NavBar from '../components/navBar/Index';
import Footer from '../components/footer/Index';
import { useParams } from 'react-router-dom';
import PageIndicator from '../components/pageIndicator/Index';
import Vector from '../assets/Vector.png';
import blogs from '../data/blogs.data.js';

const ReadMore = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  // Split description text by period "." character
  const sentences = blog.description.split('. ');

  return (
    <div>
      <NavBar />
      <PageIndicator name={blog.title} src={Vector} />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <img
              src={blog.image}
              className="card-img-top"
              style={{ height: 400 }}
              alt="..."
            />
            <h1 className="mt-3">{blog.title}</h1>
            {/* Map over the sentences array to create separate paragraph for each sentence */}
            {sentences.map((sentence, index) => {
              return (
                <p key={index} className="mt-3">
                  {sentence  + "."}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReadMore;
