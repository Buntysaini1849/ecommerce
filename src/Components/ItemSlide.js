import React, { useState,useEffect } from "react";
import { BANNER_API } from "./apiUrls";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/itemSlide.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ItemSlide = () => {
  const [data, setData] = useState([]);


  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay:true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    
  };

 

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(BANNER_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "view" }),
      });
      const responseData = await response.json();

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
  }, [BANNER_API, setData]);



  return (
    <div className="container-fluid" style={{background:"#fff"}}>
      <div className="container">
      <Slider {...settings}>
      {Array.isArray(data) &&
            data.map((item) => (
          <div  className="category-item text-center">
            <img src={item.img} alt="Category" />
            <h6>Fruits & Vegetables</h6>
            <p>150 Items</p>
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
