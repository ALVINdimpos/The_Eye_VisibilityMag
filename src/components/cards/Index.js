import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';
import blogs from "../../data/blogs.data.js";

const Index = () => {
  return (
    <div className='Card_container'>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className="col">
                <div className="card h-100 box-shadow">
                  <img src={blog.image} className="card-img-top" style={{ height: 200 }} alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.description.slice(0,200)}</p>
                    <div className='d-flex gap-2'>
                      <p style={{ fontSize: 15, marginTop: 4, display: 'none' }}>{}</p>
                      <Link to={`/ReadMore/${blog.id}`} className="btn btn-primary">Read more...</Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
