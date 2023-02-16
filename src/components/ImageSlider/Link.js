import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Slider1 from '../../assets/lelo.jpg';
import Slider2 from '../../assets/Capture2.PNG';
import Slider3 from '../../assets/Capture1.PNG';
import './Slide.css'
const divStyle = {
  display: 'flex',
  marginTop:'2rem',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px',
  textDecoration:'none'
}


const slideImages = [
  {
    url: Slider1,
    caption: 'Lelo resto bar',
    link:''
  },
  {
    url:Slider2 ,
    caption: 'Akagera bussiness group',
    link:'http://abgafrica.com/'
  },
  {
    url:Slider3 ,
    caption: 'Park inn',
    link:'https://www.radissonhotels.com/en-us/hotels/park-inn-kigali'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`} } className="slider">
                <a href={slideImage.link} style={{textDecoration:'none'}}>
                <span className="spanStyle">{slideImage.caption}</span>
                </a>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;