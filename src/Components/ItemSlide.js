import React, { useState,useEffect } from "react";
import {CATEGORYLIST_API } from "./apiUrls";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/itemSlide.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ItemSlide = () => {
  const [data, setData] = useState([]);


  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay:false,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    
  };

 

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(CATEGORYLIST_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "view" }),
      });
      const responseData = await response.json();
      console.log(responseData);

      if (
        responseData &&
        responseData.data &&
        Array.isArray(responseData.data) &&
        responseData.data.length > 0
      ) {
        for (let i = 0; i < responseData.data.length; i++) {
          setData(responseData.data);
          console.log(data);
        }
      } else {
        console.error("Error: Invalid data structure");
      }
    }
    fetchData();
  }, []);



  return (
    <div className="container-fluid" style={{background:"#fff"}}>
      <div className="container-fluid">
      <Slider {...settings}>
      {Array.isArray(data) &&
            data.map((item) => (
          <div className="category-item text-center mb-4" key={item.id}>
            <img src={item.image}alt="Category" className="img-fluid" />
            <h6>{item.name}</h6>
          </div>
        ))}
      </Slider>
      </div>
    
    </div>
  );
};

const PrevArrow = (props) => (
  <div
    className="slick-prev"
    onClick={props.onClick}
    role="button"
  >
     <span class='prev-icon'></span>
        
  </div>
);

const NextArrow = (props) => (
  <div
    className="slick-next"
    onClick={props.onClick}
    role="button"
  >
     <span class='next-icon'></span>
  </div>
);

export default ItemSlide;
