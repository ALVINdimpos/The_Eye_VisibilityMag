/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Style.css'

const Index = () => {
  return (
<div className='Card_container'>
 <div className="container">
  <div className="row">
    <div className="col-sm-4 py-3 py-sm-0">
      <div className="card box-shadow">
        <img src="images/1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Read more...</a>
        </div>
      </div>
    </div>
    <div className="col-sm-4 py-3 py-sm-0">
      <div className="card box-shadow">
        <img src="images/2.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Read more...</a>
        </div>
      </div>
    </div>
    <div className="col-sm-4 py-3 py-sm-0">
      <div className="card box-shadow">
        <img src="images/3.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Read more...</a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Index