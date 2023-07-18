import React, { useState,useEffect } from "react";
import {CATEGORYLIST_API } from "./apiUrls";
import { useSelector, useDispatch } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/itemSlide.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { fetchCategories, setSelectedCategory } from "../State/Actions/CategoryActions";
import ShopList from "./ShopList";

const ItemSlide = () => {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const categories = useSelector(state => state.catpro.categories);
  const selectedCategory = useSelector(state => state.catpro.selectedCategory);


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


 

  const handleCategoryClick = categoryId => {
    dispatch(setSelectedCategory(categoryId));
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
 

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(CATEGORYLIST_API, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ type: "view" }),
  //     });
  //     const responseData = await response.json();
  //     console.log(responseData);

  //     if (
  //       responseData &&
  //       responseData.data &&
  //       Array.isArray(responseData.data) &&
  //       responseData.data.length > 0
  //     ) {
  //       for (let i = 0; i < responseData.data.length; i++) {
  //         setData(responseData.data);
  //         console.log(data);
  //       }
  //     } else {
  //       console.error("Error: Invalid data structure");
  //     }
  //   }
  //   fetchData();
  // }, []);



  return (
    <div className="container-fluid" style={{background:"#fff"}}>
      <div className="container-fluid">
      <Slider {...settings}>
      {Array.isArray(categories) &&
            categories.map((item) => (
          <div className="category-item text-center mb-4" key={item.id}>
            <img src={item.image}alt="Category" className="img-fluid" onClick={() => handleCategoryClick(item.id)}/>
            <h6>{item.name}</h6>
          </div>
        ))}
      </Slider>
      </div>
      {selectedCategory && <ShopList categoryId={selectedCategory} />}
      
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
