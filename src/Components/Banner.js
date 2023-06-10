import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../Css/Slide.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import sliders1 from "../Images/slider1.jpg";


const Banner = () => {
  return (
    <div className="p-0">
      <div className="carousel-banner p-0" style={{ position: "relative" }}>
        <OwlCarousel
          className="owl-theme p-0"
          items={1}
          loop
          margin={10}
          dots={false}
          nav={true}
          rewindNav={true}
          autoplay={true}
          autoplaySpeed={1000}
          navText={[
            "<span class='prev-icon'></span>",
            "<span class='next-icon'></span>",
          ]}
        >
          <div className="item p-0">
            <img src={sliders1} />
          </div>
          <div className="item p-0">
            <img src={sliders1} />
          </div>
          <div className="item p-0">
            <img src={sliders1} />
          </div>
        </OwlCarousel>
      </div>
     
    </div>
  );
};

export default Banner;
