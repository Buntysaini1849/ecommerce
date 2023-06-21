import React, { useState, useEffect, useRef } from "react";
import { BANNER_API } from "./apiUrls";
import "../Css/topSavers.css";
import OwlCarousel from "react-owl-carousel3";
import "../Css/Slide.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TbTags } from "react-icons/tb";
import { MdOutlineShoppingCart,MdShoppingBasket } from "react-icons/md";
import { FcApproval } from "react-icons/fc";




const BestOffers = () => {
  const [data, setData] = useState([]);

  const carouselRef = useRef(null);

  useEffect(() => {
    const owlCarousel = carouselRef.current;
    if (owlCarousel) {
      setTimeout(function () {
        owlCarousel.next();
      }, 2000); // Adjust the duration between slide transitions (in milliseconds)
    }
  }, []);

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
    <div className="container-fluid p-0 m-0">
      <div className="container">
        <section className="product-items-slider section-padding">
          <div className="container">
            <div className="section-header">
              <h5 className="heading-design-h5">
                Best Offers View Today{" "}
                <span className="badge badge-primary">20% OFF</span>
                <a className="float-right text-secondary" href="shop.html">
                  View All
                </a>
              </h5>
            </div>
            <div className="container">
              <OwlCarousel
                className="owl-theme p-0"
                ref={carouselRef}
                items={5}
                loop
                margin={5}
                dots={false}
                nav={true}
                autoplaySpeed={1000}
                navText={[
                  "<span className='prev-icon'></span>",
                  "<span className='next-icon'></span>",
                ]}
              >
                {Array.isArray(data) &&
                  data.map((item) => (
                    <div className="item">
                      <div className="product p-0">
                        <a href="#">
                          <div className="product-header">
                            <span className="badge badge-success">50% OFF</span>
                            <img src={item.img} className="img-fluid" />
                            <span className="veg text-success mdi mdi-circle"></span>
                          </div>
                          <div className="product-body">
                            <h5>Product Title Here</h5>
                            <h6>
                              <strong>
                                <FcApproval /> Available in
                              </strong>{" "}
                              - 500 gm
                            </h6>
                          </div>
                          <div className="product-footer d-flex">
                            <p className="offer-price mb-0">
                              ₹450.99 <TbTags style={{ fontSize: "16px" }} />
                              <br />
                              <span className="regular-price">₹599</span>
                            </p>
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm float-right"
                            >
                              <MdOutlineShoppingCart /> Add To Cart
                            </button>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
              </OwlCarousel>
            </div>
          </div>
        </section>
      </div>

      <div className="container-fluid p-0">
        <section className="section-padding bg-white border-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="feature-box">
                  <i className="fas fa-truck-fast mdi"></i>
                  <h6>Free & Next Day Delivery</h6>
                  <p>Lorem ipsum dolor sit amet, cons...</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="feature-box">
                <i className="fas fa-shopping-basket mdi"></i>
                  <h6>100% Satisfaction Guarantee</h6>
                  <p>Rorem Ipsum Dolor sit amet, cons...</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="feature-box">
                  <i className="fas fa-tag mdi"></i>
                  <h6>Great Daily Deals Discount</h6>
                  <p>Sorem Ipsum Dolor sit amet, Cons...</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BestOffers;
