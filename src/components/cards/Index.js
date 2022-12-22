/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Style.css'
import Photo2 from "../../assets/Christams.PNG"
import Photo3 from "../../assets/gollira.PNG"
import Photo4 from "../../assets/Akagera.PNG"

const Index = () => {
  return (
<div className='Card_container'>
 <div className="container">
  <div className="row">
    <div className="col-sm-4 py-3 py-sm-0">
      <div className="card box-shadow">
        <img src={Photo3} className="card-img-top " style={{height:200}} alt="..." />
        <div className="card-body">
          <h5 className="card-title">The Africa's Mountain Gorillas</h5>
          <p className="card-text">High up in the lush,mist shrouded mountain of East Africa,perched on the edge of the Great Rift Valley</p>
          <div className='d-flex gap-2'>
            <p style={{fontSize:15,marginTop:4,display:'none'}}>Thursday, 8 December 2022</p>
          <a href="#" className="btn btn-primary ">Read more...</a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-4 py-3 py-sm-0">
      <div className="card box-shadow">
        <img src={Photo2} className="card-img-top h-2" style={{height:200}} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Father Christmas</h5>
          <p className="card-text">From his earliest days until the 19th century, father christmas was a strictly allegorical
Figure. He was a symbol of the christmas  </p>
          <div className='d-flex gap-2'>
            <p style={{fontSize:15,marginTop:4,display:'none'}}>Thursday, 8 December 2022</p>
          <a href="#" className="btn btn-primary ">Read more...</a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-4 py-3 py-sm-0">
      <div className="card box-shadow">
        <img src={Photo4} className="card-img-top" style={{height:200}} alt="..." />
        <div className="card-body">
          <h5 className="card-title">AKAGERA BUSINESS GROUP
</h5>
          <p className="card-text">Established in 1997, Akagera Motors is the exclusive distributor for Mercedes-Benz, Nissan, 
Kia, Fuso, MCV, Foton & Mahindra. </p>
          <div className='d-flex gap-2'>
            <p style={{fontSize:15,marginTop:4,display:'none'}}>Thursday, 8 December 2022</p>
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