import React, { useState, useEffect,useRef } from "react";
import { DASHBOARD, WISHLIST_API } from "../apiUrls";
import "../../Css/topSavers.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Css/Slide.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { TbTags } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Login from "../Login";
import { setSelectedProduct } from "../../State/Actions/ProductViewAction";
import { setWishlistItems } from "../../State/Actions/WishlistAction";
import Product from "./ProductComponent";

const HomeProducts = () => {
  const [bestCategory, setBestCategory] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const auth = useSelector((state) => state.login.auth);



  const selectedProduct = useSelector(
    (state) => state.proditem.selectedProduct
  );

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
          setBestCategory(data);
          console.log("this is product data", data);
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
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <p></p>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <p></p>
      </div>
    );
  };

  const Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    margin: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1920, // Full-screen
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1366, // Desktop
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 600, // Tablet
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 200, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const handleAddToWishlist = (productId) => {
  //   if (auth) {
  //     const payloads = {
  //       "type": "update",
  //       "product_id":productId,
  //     };

  //     fetch(WISHLIST_API, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //          Authorization: auth,
  //       },
  //       body: JSON.stringify(payloads),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // Handle response from the API
  //         // console.log('addtocart data = ',auth);

  //         setIsLiked(!isLiked);

  //       })
  //       .catch((error) => {
  //         // Handle error
  //         console.error("Error:", error);
  //       });
  //   } else {
  //     // Handle unauthorized access
  //     console.log("User is not authenticated.");
  //   }
  // };



  return (
    <div className="box">
      <div className="container-fluid p-0">
        <section className="product-items-slider section-padding">
          <div className="box">
         
            <div className="box">
              {Array.isArray(bestCategory) &&
                bestCategory.map((products) => (
                  <div className="container-fluid mt-5 p-0" key={products.id}>
                    <div className="section-header">
                      <h5 className="heading-design-h5">
                        {products.name}
                        {/* <span className="badge badge-primary">20% OFF</span> */}
                        <Link
                          to="/shoplist"
                          className="float-right text-secondary"
                        >
                          View All
                        </Link>
                      </h5>
                    </div>
                    
                    <div className="box slide-container">
                      {/* <Slider {...Settings}>
                      {Array.isArray(products.product) &&
                       products.product.map((proditem) => (
                         <Product  { ...proditem } />
                        ))
                       }
                      </Slider> */}

                      {Array.isArray(products.product) &&
                        products.product.slice(0,5).map((proditem) => (
                          <Product {...proditem} />
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
      <Login />
      {/* {!selectedProduct ? null : <ProductView proditem={selectedProduct} />} */}
    </div>
  );
};

export default HomeProducts;
