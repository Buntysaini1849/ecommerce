import React, { useState, useEffect, useRef } from "react";
import { BANNER_API, DASHBOARD, PRODUCTLIST_API } from "./apiUrls";
import "../Css/topSavers.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/Slide.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TbTags } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FcApproval } from "react-icons/fc";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Link } from "react-router-dom";

const TopSavers = () => {
  const [prohead, setProHead] = useState([]);
  const [data, setData] = useState([]);

  // const handleAddToCart = (product) => {
  //   // Add the product to the cart
  //   const updatedCart = [...cartItems, product];
  //   // Dispatch an action to update the cart state
  //   dispatch(updateCart(updatedCart));
  // };

  useEffect(() => {
    const fetchHeadingData = async () => {
      try {
        const response = await fetch(DASHBOARD, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const { data } = await response.json();

        if (data.length > 0) {
          setProHead(data);
          // dispatch(setProducts(data));
          console.log(data);
        } else {
          console.error("Error: Invalid data structure");
        }
      } catch (error) {
        console.error(error.message);
        // Display an error message to the user or render a fallback
      }
    };

    fetchHeadingData();
  }, []);

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        Prev
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        Next
      </div>
    );
  };;

  const Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    margin:0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className="container-fluid">
      <div className="container">
        <section className="product-items-slider section-padding">
          <div className="container">
            <div className="container">
              {Array.isArray(prohead) &&
                prohead.map((product) => (
                  <div className="container mt-5">
                    <div className="section-header">
                      <h5 className="heading-design-h5">
                        {product.name}
                        {/* <span className="badge badge-primary">20% OFF</span> */}
                        <Link
                          to="/shoplist"
                          className="float-right text-secondary"
                        >
                          View All
                        </Link>
                      </h5>
                    </div>
                    <div className="container">
                      {/*                   
                      <div className="row p-0">
                      {Array.isArray(product.item) &&
                        product.item.map((proditem) => (
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                          <div className="item">
                            <div className="product">
                            <div className="product-header">
                              <span className="badge badge-success">50% OFF</span>
                              <img
                                src={proditem.image}
                                className="img-fluid"
                                width="150"
                                height="150"
                              />
                              <span className="veg text-success mdi mdi-circle"></span>
                            </div>
                            <div className="product-body">
                              <h5>{proditem.name}</h5>
                              <h6>
                                <strong>
                                  <FcApproval /> Available in
                                </strong>{" "}
                                - {proditem.unit}
                              </h6>
                            </div>
                            <div className="product-footer d-flex">
                              <p className="offer-price mb-0">
                                ₹{proditem.sale_price}{" "}
                                <TbTags style={{ fontSize: "16px" }} />
                                <br />
                                <span className="regular-price">
                                  ₹{proditem.mrp_price}
                                </span>
                              </p>
                              <Link to="/productview">
                              <button className="btn btn-secondary btn-sm float-right">
                                <MdOutlineShoppingCart /> Add To Cart
                              </button>
                              </Link>
                            </div>
                            </div>
                          </div>
                        </div>
                         ))}
                      </div>                */}

                      <Slider {...Settings}>
                      {Array.isArray(product.item) &&
                       product.item.map((proditem) => (
                        <div className="item" style={{width:"210px",marginRight:"63px !important"}}>
                   
                        <div className="product p-0" style={{width:"210px"}}>
                         
                          <Link to='/productview'>
                            <div className="product-header">
                              <span className="badge badge-success">50% OFF</span>
                              <img src={proditem.image} className="img-fluid"/>
                              <span className="veg text-success mdi mdi-circle"></span>
                            </div>
                            <div className="product-body">
                              <h5>{proditem.name}</h5>
                              <h6>
                                <strong>
                                  <FcApproval /> Available in
                                </strong>{" "}- {product.unit}
                              </h6>
                            </div>
                            </Link>
                            <div className="product-footer d-flex">
                              <p className="offer-price mb-0">
                                ₹{proditem.sale_price} <TbTags style={{ fontSize: "16px" }} />
                                <br />
                                <span className="regular-price">₹{proditem.mrp_price}</span>
                              </p>
                              <Link to='/productview'>
                              <button
                                className="btn btn-secondary btn-sm float-right"
                               
                              >
                                <MdOutlineShoppingCart /> Add To Cart
                              </button>
                              </Link>
                            </div>
                        
                        </div>
                       
                      </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* <div className="container" style={{width:"90%"}}>
            <Slider
              {...Settings}
            >
              {Array.isArray(data) &&
                data.map((product) => (
                  <div className="item" key={product.id}>
                   
                    <div className="product p-0">
                     
                      <Link to='/productview'>
                        <div className="product-header">
                          <span className="badge badge-success">50% OFF</span>
                          <img src={product.image} className="img-fluid" width="150" height="150" />
                          <span className="veg text-success mdi mdi-circle"></span>
                        </div>
                        <div className="product-body">
                          <h5>{product.name}</h5>
                          <h6>
                            <strong>
                              <FcApproval /> Available in
                            </strong>{" "}- {product.unit}
                          </h6>
                        </div>
                        </Link>
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
                    
                    </div>
                   
                  </div>
                ))}
            </Slider>
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default TopSavers;
