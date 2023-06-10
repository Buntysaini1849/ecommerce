import React, { useState, useRef } from "react";
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../Css/itemSlide.css";
import smallslide from "../Images/smallslide.jpg";

const ItemSlide = () => {
  return (
    <div className="container-fluid mt-2 itemslide-cont p-0">
      <div className=" container item-carousel p-0">
        <OwlCarousel
          className="owl-theme p-0"
          items={8}
          loop
          smartSpeed={1000}
          margin={-25}
          dots={false}
          nav={true}
          rewind={true}
          autoplay={true}
          autoplaySpeed={1000}
          navText={[
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>",
          ]}
        >
          <div className="owl-prev"></div>

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
  );
};

export default ItemSlide;
