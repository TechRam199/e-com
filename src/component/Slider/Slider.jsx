import React, { useState } from "react";
import "./slider.css";
import { sliderItems } from "../../data";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 

  const prevSlide = () => {
    setCurrentIndex(currentIndex===0 ?sliderItems.length-1 :currentIndex-1)
    console.log("prev")
   
    // setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const nextSlide = () => {
  setCurrentIndex(currentIndex===sliderItems.length-1 ?0 :currentIndex+1)
    // setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };


  return (
    <div className="slider-containor">

<div className="slider" style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}>
      {sliderItems.map((item, index) => {
        return (
          <div className= "ArrowItem"  style={{backgroundColor:`#${item.bg}`}}>
            
            <div className="wrapper">
              <div className="imageContainor">
                <img src={item.img} />
              </div>
              
              <div className="infoContainor">
                <div className="infoItem">
                  <h1 className="sl-title">{item.title} </h1>
                  <span className="sl-desc">{item.desc}</span>
                  <div>
                    <button className="sl-btn">SHOW NOW</button>
                  </div>
                  
                </div>
              </div>
            </div>
          
          </div>
        );
      })}
      </div>

      <div className="navigation">
        <button className="arrow" onClick={prevSlide}>&lt;</button>
        <button className="arrow" onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default Slider;
