import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Slider1 from '../../assets/lelo.png';
import Slider2 from '../../assets/Artboard 1.png;
import Slider3 from '../../assets/park.png';
import './Slide.css'
const divStyle = {
  display: 'flex',
  marginTop:'1rem',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '90vh',
  width: '100%',
  textDecoration:'none',
}



const slideImages = [
  {
    url: Slider1,
    caption: 'Lelo resto bar',
    link:''
  },
  {
    url:Slider2 ,
    caption: 'KIGALI CAR RENTALS',
    link:'https://kigalicarrentals.com/'
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
        <Slide duration={2000}>
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
