import React, { useState, useEffect, useRef } from "react";
import { BANNER_API } from "./apiUrls";
import "../Css/topSavers.css";
import OwlCarousel from "react-owl-carousel3";
import "../Css/Slide.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TbTags } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FcApproval } from "react-icons/fc";

const TopSavers = () => {
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
    <div className="container">
      <section className="product-items-slider section-padding">
        <div className="container">
          <div className="section-header">
            <h5 className="heading-design-h5">
              Top Savers Today{" "}
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
                "<span class='prev-icon'></span>",
                "<span class='next-icon'></span>",
              ]}
            >
              {Array.isArray(data) &&
                data.map((item) => (
                  <div class="item">
                    <div class="product p-0">
                      <a href="#">
                        <div class="product-header">
                          <span class="badge badge-success">50% OFF</span>
                          <img src={item.img} className="img-fluid" />
                          <span class="veg text-success mdi mdi-circle"></span>
                        </div>
                        <div class="product-body">
                          <h5>Product Title Here</h5>
                          <h6>
                            <strong>
                              <FcApproval /> Available in
                            </strong>{" "}
                            - 500 gm
                          </h6>
                        </div>
                        <div class="product-footer d-flex">
                          <p class="offer-price mb-0">
                            ₹450.99 <TbTags style={{ fontSize: "16px" }} />
                            <br />
                            <span class="regular-price">₹599</span>
                          </p>
                          <button
                            type="button"
                            class="btn btn-secondary btn-sm float-right"
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
  );
};

export default TopSavers;
