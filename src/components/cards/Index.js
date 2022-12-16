/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Style.css'
import Photo2 from "../../assets/mag2.jpg"
import Photo3 from "../../assets/mag3.jpg"

const Index = () => {
  return (
<div className='Card_container'>
 <div className="container">
  <div className="row">
    <div className="col-sm-4 py-3 py-sm-0">
      <div className="card box-shadow">
        <img src={Photo3} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Lorem ipsum dolor</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac sem nisi.</p>
          <div className='d-flex gap-2'>
            <p style={{fontSize:15,marginTop:4}}>Thursday, 8 December 2022</p>
          <a href="#" className="btn btn-primary ">Read more...</a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-4 py-3 py-sm-0">
      <div className="card box-shadow">
        <img src={Photo2} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Lorem ipsum dolor</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac sem nisi..</p>
          <div className='d-flex gap-2'>
            <p style={{fontSize:15,marginTop:4}}>Thursday, 8 December 2022</p>
          <a href="#" className="btn btn-primary ">Read more...</a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-4 py-3 py-sm-0">
      <div className="card box-shadow">
        <img src={Photo3} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Lorem ipsum dolor</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac sem nisi.</p>
          <div className='d-flex gap-2'>
            <p style={{fontSize:15,marginTop:4}}>Thursday, 8 December 2022</p>
          <a href="#" className="btn btn-primary ">Read more...</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Index