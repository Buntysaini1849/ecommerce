import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Css/itemSlide.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {fetchCategories,} from "../../State/Actions/CategoryActions";
import ShopList from "../ShopList";
import Category from "../Product/CategoryComponent";

const CategorySlide = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.catpro.categories);
  const selectedCategory = useSelector(
    (state) => state.catpro.selectedCategory
  );
  const collapseOpen = useSelector((state) => state.collapse.collapseOpen);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 4,
    autoplay: false,
    responsive: [
      
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
         
        },
      },
      {
        breakpoint: 900, // Tablet
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
         
        },
      },
     
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
         
        },
      },
    ],

    
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="container-fluid" style={{ background: "#fff" }}>
      <div className="container-fluid">
        <Slider {...settings}>
          {Array.isArray(categories) &&
            categories.map((item) => (
                <Category {...item}/>               
            ))}
        </Slider>
      </div>
      {selectedCategory && <ShopList categoryId={selectedCategory} />}
    </div>
  );
};

const PrevArrow = (props) => (
  <div className="slick-prev" onClick={props.onClick} role="button">
    <span className="prev-icon"></span>
  </div>
);

const NextArrow = (props) => (
  <div className="slick-next" onClick={props.onClick} role="button">
    <span className="next-icon"></span>
  </div>
);

export default CategorySlide;
