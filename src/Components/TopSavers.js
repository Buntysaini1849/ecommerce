import React, { useState, useEffect, useRef } from "react";
import { BANNER_API, PRODUCTLIST_API } from "./apiUrls";
import "../Css/topSavers.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/Slide.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TbTags } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FcApproval } from "react-icons/fc";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";

import { Link, Outlet } from "react-router-dom";




const TopSavers = () => {
  
  const [data, setData] = useState([]);
 



  // const handleAddToCart = (product) => {
  //   // Add the product to the cart
  //   const updatedCart = [...cartItems, product];
  //   // Dispatch an action to update the cart state
  //   dispatch(updateCart(updatedCart));
  // };



  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(BANNER_API, {
          method: 'POST',
          headers: { 'Content-Type':'application/json' },
          body: JSON.stringify({ type:'view' }),
        });
        const responseData = await response.json();
  
        if (
          responseData &&
          responseData.data &&
          Array.isArray(responseData.data) &&
          responseData.data.length > 0
        ) {
          setData(responseData.data);
          // dispatch(setProducts(responseData.data));
          console.log(responseData.data);
        } else {
          console.error('Error: Invalid data structure');
        }
      } catch (error) {
        console.error(error.message);
        // Display an error message to the user or render a fallback
      }
    }
  
    fetchData();
  }, [BANNER_API]);

  const CustomPrevArrow = (props) => (
    <div className="slick-arrow slick-prev" onClick={props.onClick}>
      Prev
    </div>
  );

  const CustomNextArrow = (props) => (
    <div className="slick-arrow slick-next" onClick={props.onClick}>
      Next
    </div>
  );

  const Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  

  // const handleAddClick = (product) => {
  //   dispatch(saveCartData(product));
  //   console.log(product);
  // };

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);


  return (
    <div className="container">
      <section className="product-items-slider section-padding">
        <div className="container">
          <div className="section-header">
            <h5 className="heading-design-h5">
              Top Savers Today{" "}
              <span className="badge badge-primary">20% OFF</span>
                <Link to='/shoplist' className="float-right text-secondary">
                View All
                </Link>
            </h5>
          </div>
          <div className="container" style={{width:"90%"}}>
            <Slider
              {...Settings}
            >
              {Array.isArray(data) &&
                data.map((product) => (
                  <div className="item" key={product.id}>
                    <Link to='/productview'>
                    <div className="product p-0">
                      <a href="#">
                        <div className="product-header">
                          <span className="badge badge-success">50% OFF</span>
                          <img src={product.img} className="img-fluid" />
                          <span className="veg text-success mdi mdi-circle"></span>
                        </div>
                        <div className="product-body">
                          <h5>{product.name}</h5>
                          <h6>
                            <strong>
                              <FcApproval /> Available in
                            </strong>{" "}
                            - {product.unit}
                          </h6>
                        </div>
                        <div className="product-footer d-flex">
                          <p className="offer-price mb-0">
                            ₹{product.sale_price} <TbTags style={{ fontSize: "16px" }} />
                            <br />
                            <span className="regular-price">₹{product.mrp_price}</span>
                          </p>
                          <button
                            className="btn btn-secondary btn-sm float-right"
                           
                          >
                            <MdOutlineShoppingCart /> Add To Cart
                          </button>
                        </div>
                      </a>
                    </div>
                    </Link>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopSavers;
