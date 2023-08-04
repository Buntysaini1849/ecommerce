import React, { useState,useLayoutEffect } from "react";
import { BANNER_API } from "./apiUrls";
import OwlCarousel from "react-owl-carousel3";
import "../Css/Slide.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import img from "../Images/bannerimg.jpg";



const Banner = () => {
  const [data, setData] = useState([]);



  useLayoutEffect(() => {
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
          // console.log(data);
        }
      } else {
        console.error("Error: Invalid data structure");
      }
    }
    fetchData();
  }, []);
  return (
    <div className="p-0" >
      <div className="carousel-banner p-0 " style={{ position: "relative" }}>
      
        <OwlCarousel
          className="owl-theme p-0"
          items={1}
          loop
          margin={10}
          dots={true}
          nav={true}
          mouseDrag={false}
          touchDrag={false}
          autoplay={true}
          autoplaySpeed={1000}
          navText={[
            "<span class='prev-icon'></span>",
            "<span class='next-icon'></span>",
          ]}
        >
          {Array.isArray(data) &&
            data.map((item) => ( 
          <div className="item p-0" key={item.id}>
            <img src={item.img} className="img-fluid banner-img"/>
          </div>
           ))}
          
        </OwlCarousel>
      
      </div>
     
    </div>
  );
};

export default Banner;
