import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../Css/itemSlide.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import smallslide from "../Images/smallslide.jpg";

const ItemSlide = () => {
  return (
    
  <div className="container-fluid mt-2 itemslide-cont p-0">
  <div className=" container item-carousel p-0">
        <OwlCarousel
        className="owl-theme p-0"
        items={8}
        loop
        margin={-25}
        dots={false}
        nav={true}
        rewindNav={true}
        autoplay={true}
        autoplaySpeed={200}
        navText={[
          "<span class='prev-icon-item'></span>",
          "<span class='next-icon-item'></span>",
        ]} 
    
        >
     
        <div className="p-0 category-item mt-3">
           <img src={smallslide} className="img-fluid itemslide-img" />
          </div>
          <div className="p-0 category-item mt-3">
           <img src={smallslide} className="img-fluid itemslide-img" />
          </div>
          <div className="p-0 category-item mt-3">
           <img src={smallslide} className="img-fluid itemslide-img" />
          </div>
          <div className="p-0 category-item mt-3">
           <img src={smallslide} className="img-fluid itemslide-img" />
          </div>
          <div className="p-0 category-item mt-3">
           <img src={smallslide} className="img-fluid itemslide-img" />
          </div>
          <div className="p-0 category-item mt-3">
           <img src={smallslide} className="img-fluid itemslide-img" />
          </div>
          <div className="p-0 category-item mt-3">
           <img src={smallslide} className="img-fluid itemslide-img" />
          </div>
          <div className="p-0 category-item mt-3">
           <img src={smallslide} className="img-fluid itemslide-img" />
          </div>
          <div className="p-0 category-item mt-3">
           <img src={smallslide} className="img-fluid itemslide-img" />
          </div>
          <div className="p-0 category-item mt-3">
           <img src={smallslide} className="img-fluid itemslide-img" />
          </div>
          <div className="p-0 category-item mt-3">
           <img src={smallslide} className="img-fluid itemslide-img" />
          </div>
          <div className="p-0 category-item mt-3">
           <img src={smallslide} className="img-fluid itemslide-img" />
          </div>
        
          


        </OwlCarousel>
      </div>
  </div>
  )
}

export default ItemSlide
