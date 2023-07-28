import React, { useState, useEffect } from "react";
import { CATEGORYLIST_API } from "./apiUrls";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/itemSlide.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  fetchCategories,
  setSelectedCategory,
} from "../State/Actions/CategoryActions";
import ShopList from "./ShopList";
import { setSelectedCategories } from "../State/Actions/SelectCatAction";
import { Link } from "react-router-dom";

const ItemSlide = () => {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.catpro.categories);
  const selectedCategory = useSelector(
    (state) => state.catpro.selectedCategory
  );

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: false,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleCategoryClick = (categoryId) => {
    dispatch(setSelectedCategories(categoryId));
  };

  return (
    <div className="container-fluid" style={{ background: "#fff" }}>
      <div className="container-fluid">
        <Slider {...settings}>
          {Array.isArray(categories) &&
            categories.map((item) => (
              <Link to="/shoplist">
                <div className="category-item text-center mb-4" key={item.id}>
                  <img
                    src={item.image}
                    alt="Category"
                    className="img-fluid"
                    key={item.id}
                    onClick={() => handleCategoryClick(item.id)}
                  />
                  <h6>{item.name}</h6>
                </div>
              </Link>
            ))}
        </Slider>
      </div>
      {selectedCategory && <ShopList categoryId={selectedCategory} />}
    </div>
  );
};

const PrevArrow = (props) => (
  <div className="slick-prev" onClick={props.onClick} role="button">
    <span class="prev-icon"></span>
  </div>
);

const NextArrow = (props) => (
  <div className="slick-next" onClick={props.onClick} role="button">
    <span class="next-icon"></span>
  </div>
);

export default ItemSlide;
