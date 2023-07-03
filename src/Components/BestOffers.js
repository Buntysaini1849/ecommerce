import React, { useState, useEffect, useRef } from "react";
import { BANNER_API, PRODUCTLIST_API } from "./apiUrls";
import "../Css/topSavers.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/Slide.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TbTags } from "react-icons/tb";
import { MdOutlineShoppingCart,MdShoppingBasket } from "react-icons/md";
import { FcApproval } from "react-icons/fc";
import { Link } from 'react-router-dom';


// import { addToCart,setProducts } from "./State/Actions/AddToCartActions";

const BestOffers = () => {

  const [data, setData] = useState([]);


  const carouselRef = useRef(null);

  useEffect(() => {
    const owlCarousel = carouselRef.current;
    if (owlCarousel) {
      setTimeout(function () {
        owlCarousel.next();
      }, 2000); 
    }
  }, []);

 
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(PRODUCTLIST_API, {
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
  }, []);


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
  };

  
  // const handleAddToCart = (item) => {
  //   // dispatch(addToCart(item));
  //   console.log(item);
  // };

  return (
    <div className="container-fluid p-0 m-0">
      {/* <div className="container">
        <section className="product-items-slider section-padding">
          <div className="container">
            <div className="section-header">
              <h5 className="heading-design-h5">
                Best Offers View Today{" "}
                <span className="badge badge-primary">20% OFF</span>
                <a className="float-right text-secondary" href="">
                  View All
                </a>
              </h5>
            </div>
            <div className="container" style={{width:"90%"}}>
              <Slider
                {...Settings}
              >
                {Array.isArray(data) &&
                  data.map((item) => (
                    <div className="item" key={item.id}>
                        <Link to='/productview'>
                      <div className="product p-0">
                        <a href="#">
                          <div className="product-header">
                            <span className="badge badge-success">50% OFF</span>
                            <img src={item.image} className="img-fluid" />
                          </div>
                          <div className="product-body">
                            <h5>{item.name}</h5>
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
      </div> */}

   
    </div>
  );
};

export default BestOffers;
