import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";
import Footer from "./Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { CART_API } from "./apiUrls";
import { FaTag } from "react-icons/fa";
import "../Css/ProductView.css";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "../Css/QuantityInput.css";

const ProductView = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [showAddToCart, setShowAddToCart] = useState(true);
  const [activeThumbnail, setActiveThumbnail] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const mainSliderRef = useRef(null);
  const thumbnailSliderRef = useRef(null);
  const auth = useSelector((state) => state.login.auth);
  const proditem = useSelector((state) => state.proditem.selectedProduct);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(`${DASHBOARD}/${id}`, {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json",
  //         'Authorization': auth,
  //       },

  //         body: JSON.stringify({ type: "view" }),
  //       });
  //       const responseData = await response.json();

  //       if (
  //         responseData &&
  //         responseData.data &&
  //         Array.isArray(responseData.data) &&
  //         responseData.data.length > 0
  //       ) {
  //         setData(responseData.data);
  //         // dispatch(setProducts(responseData.data));
  //         console.log("productview data", responseData.data);
  //       } else {
  //         console.error("Error: Invalid data structure");
  //       }
  //     } catch (error) {
  //       console.error(error.message);
  //       // Display an error message to the user or render a fallback
  //     }
  //   }

  //   fetchData();
  // }, [id]);

  useEffect(() => {
    // Scroll to the top of the page only once
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleAddToCart = (productId) => {
      const payload = {
        type: "update",
        quantity: quantity,
        product_id: productId,
      };

      fetch(CART_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle response from the API
          // console.log('addtocart data = ',auth);

          setShowAddToCart(false);
          console.log(payload);
        })
        .catch((error) => {
          // Handle error
          console.error("Error:", error);
        });
    
  };

  const CustomPrevArrow = (props) => (
    <div className="slick-arrow slick-prev" onClick={props.onClick}></div>
  );

  const CustomNextArrow = (props) => (
    <div className="slick-arrow slick-next" onClick={props.onClick}></div>
  );

  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => {
      setActiveThumbnail(current);
    },
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    beforeChange: (current, next) => {
      thumbnailSliderRef.current.slickGoTo(next);
    },
  };

  const thumbnailSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // centerMode: true,
    centerPadding: "0px",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    beforeChange: (current, next) => {
      mainSliderRef.current.slickGoTo(next);
    },
  };

  const handleThumbnailClick = (index) => {
    setActiveThumbnail(index);
    mainSliderRef.current.slickGoTo(index);
  };

  const getThumbnailItemClassName = (index) => {
    return index === activeThumbnail
      ? "thumbnail-item active"
      : "thumbnail-item";
  };

  return (
    <div>
      <Header />
      <section className="pt-3 pb-0 page-info section-padding border-bottom bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">
                      <i
                        className="fas fa-home mx-2"
                        style={{ fontSize: "9px" }}
                      ></i>
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Shop</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Product
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-single section-padding pt-3">
        {proditem ? (
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="shop-detail-left">
                  <div className="shop-detail-slider">
                    <div className="favourite-icon">
                      <a
                        className="fav-btn"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="59% OFF"
                        href="#"
                      >
                        <FaTag className="mdi fa-tag" />
                      </a>
                    </div>

                    <div
                      className="container-fluid main-slider-top"
                      key={proditem.id}
                      style={{ background: "#fff" }}
                    >
                      <Slider ref={mainSliderRef} {...mainSliderSettings}>
                        <div className="image-container p-5">
                          <img
                            src={proditem.image}
                            key={proditem.id}
                            alt="Product 1"
                            className="img-fluid main-slider-img"
                          />
                        </div>
                      </Slider>
                    </div>

                    <div className="container" style={{ width: "80%" }}>
                      <Slider
                        ref={thumbnailSliderRef}
                        {...thumbnailSliderSettings}
                        className="thumbslider"
                      >
                        <div
                          className={getThumbnailItemClassName(proditem.id)}
                          onClick={() => handleThumbnailClick(proditem.id)}
                        >
                          <img
                            src={proditem.image}
                            alt="Product 1 Thumbnail"
                            className="img-fluid"
                            style={{ padding: "16px", background: "#fff" }}
                          />
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="shop-detail-right">
                  <span className="badge badge-success">50% OFF</span>
                  <h2>{proditem.name}</h2>
                  <h6>
                    <strong>
                      <span className="mdi mdi-approval"></span> Available in
                    </strong>{" "}
                    - {proditem.unit}
                  </h6>
                  <p className="regular-price">
                    <i className="mdi mdi-tag-outline"></i> MRP : ₹
                    {proditem.mrp_price}
                  </p>
                  <p className="offer-price mb-0">
                    Discounted price :{" "}
                    <span className="text-success">₹{proditem.sale_price}</span>
                  </p>
                 

                  <div className="mt-4">
                    <div className="quantity-input p-0">
                      <button
                        onClick={handleDecrease}
                        className="decin-btn dec-btn"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="form-control inputqty"
                        value={quantity}
                        readOnly
                        style={{ background: "#f5eeee" }}
                      />
                      <button
                        onClick={handleIncrease}
                        className="decin-btn dec-plus"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* <Link to="/viewcart"> */}
                  <div className="card border-1 mt-4 p-1">
                    <h5 className="pt-2 selectUnit-Tag">Select Unit Size</h5>
                    <div className="row d-flex p-0">
                      <div className="col">
                        <button
                          className="btn btn-sm selectUnit-btn"
                          key={proditem.id}
                        >
                          {proditem.unit}
                        </button>
                      </div>
                    </div>
                  </div>
                  <>
                    {showAddToCart ? (
                      <button
                        type="submit"
                        className="btn btn-secondary btn-lg"
                        onClick={() => handleAddToCart(proditem.id)}
                      >
                        <i className="mdi mdi-cart-outline"></i> Add To Cart
                       
                      </button>
                    ) : (
                      <Link to="/viewcart">
                        <button
                          type="button"
                          className="btn btn-secondary btn-lg"
                        >
                          <i className="mdi mdi-cart-outline"></i> Go To Cart
                        </button>
                      </Link>
                    )}
                  </>
                  {/* </Link> */}
                  <div className="short-description">
                    <h5>
                      Quick Overview
                      <p className="float-right">
                        Availability:{" "}
                        <span className="badge badge-success">In Stock</span>
                      </p>
                    </h5>
                    <p>
                      <b>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </b>{" "}
                      Nam fringilla augue nec est tristique auctor. Donec non
                      est at libero vulputate rutrum.
                    </p>
                    <p className="mb-0">
                      {" "}
                      Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
                      luctus malesuada tincidunt. className aptent taciti
                      sociosqu ad litora torquent per conubia nostra, per
                      inceptos hiMenaeos. Integer enim purus, posuere at
                      ultricies eu, placerat a felis. Suspendisse aliquet urna
                      pretium eros convallis interdum.
                    </p>
                  </div>
                  <h6 className="mb-3 mt-4">Why shop from Ecom?</h6>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="feature-box">
                        <i className="fas fa-truck-fast mdi"></i>
                        <h6 className="text-info">Free Delivery</h6>
                        <p>Lorem ipsum dolor...</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="feature-box">
                        <i className="fas fa-shopping-basket mdi"></i>
                        <h6 className="text-info">100% Guarantee</h6>
                        <p>Rorem Ipsum Dolor sit...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>No product selected.</p>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default ProductView;
