import React, { useState, useEffect } from "react";
import { BANNER_API, PRODUCTLIST_API } from "./apiUrls";
import {
  MdOutlineShareLocation,
  MdFindInPage,
  MdShoppingCart,
  MdStoreMallDirectory,
} from "react-icons/md";
import { FaTag, FaUserCircle } from "react-icons/fa";
import logo from "../Images/logo.jpg";
import CartProducts from "./CartProducts";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../State/Actions/CartShowAction";
import { Link } from "react-router-dom";
import Login from "./Login";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const User = useSelector((state) => state.user.users);
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

  const [data, setData] = useState([]);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  // const handleCartClick = () => {
  //    dispatch(showCart());
  //  };

  //  const handleCartClick = () => {
  //    dispatch(clearCart());
  //  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(PRODUCTLIST_API, {
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
    <div>
      <div className="navbar-top bg-success pt-2 pb-2 d-none">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 text-center">
              <a href="shop.html" className="mb-0 text-white">
                20% cashback for new users | Code:{" "}
                <strong>
                  <span className="text-light">
                    OGOFERS13 <FaTag />
                  </span>{" "}
                </strong>
              </a>
            </div>
          </div>
        </div>
      </div>

  <div>
      <nav
        className="navbar navbar-light navbar-expand-lg  bg-faded osahan-menu"
        style={{ position: "relative", height: "95px", background: "#fff" }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            {" "}
            <img src={logo} alt="logo" className="img-fluid" width={90} />{" "}
          </Link>
          {/* <a className="location-top" href="#">
            <MdOutlineShareLocation className="location-icon mb-1" />
            New Delhi
          </a> */}
          <button
            className="navbar-toggler navbar-toggler-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse" id="navbarNavDropdown">
            <div className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto top-categories-search-main">
              <div className="top-categories-search">
                <div
                  className="input-group">
                  {/* <span className="input-group-btn categories-dropdown">
                    <select
                      className="form-control-select select-inputgrp"
                      style={{ display: "none" }}
                    >
                      <option selected="selected">Your City</option>
                      <option value="0">New Delhi</option>
                      <option value="2">Bengaluru</option>
                      <option value="3">Hyderabad</option>
                      <option value="4">Kolkata</option>
                    </select>
                  </span> */}
                  <input
                    className="form-control search-bar"
                    placeholder="Search products in Your City"
                    aria-label="Search products in Your City"
                    type="text"
                  />
                  <span className="input-group-btn"  style={{ position:"absolute",right:"5px", top:"4px" }}>
                    <button className="btn btn-secondary" type="button">
                      <MdFindInPage className="mb-1" /> Search
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className="my-2 my-lg-0">
              <ul className="list-inline main-nav-right mt-3">
                {/* <li className="list-inline-item">
                  <a
                    href="#"
                    data-bs-target="#bd-example-modal"
                    data-bs-toggle="modal"
                    className="btn btn-link"
                  >
                    <FaUserCircle className="user-icon mb-1" /> 
                  </a>
                  
                </li> */}

                <li className="list-inline-item nav-item dropdown">
                {isAuthenticated ? (
                  <a
                  className="nav-link dropdown-toggle account-dropdown"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{fontSize:"15px",fontWeight:"500",padding:"10px"}}

                >
                   <FaUserCircle className="user-icon mb-1 mx-2" /> 
                   Welcome,User
                </a> 
                
                      ) : (
                  <a
                    className="nav-link dropdown-toggle account-dropdown"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{fontSize:"15px",fontWeight:"500",padding:"10px"}}

                  >
                     <FaUserCircle className="user-icon mb-1 mx-2" /> 
                    My Account
                  </a>
                      )}
                  <div className="dropdown-menu">
                  
                      <Link to="/profile" className="dropdown-item">
                      <i
                        className="mdi mdi-chevron-right"
                        aria-hidden="true"
                      ></i>{" "}
                      My Profile
                      </Link>
                  
                      <Link to="/address" className="dropdown-item">
                      <i
                        className="mdi mdi-chevron-right"
                        aria-hidden="true"
                      ></i>{" "}
                      My Address
                    </Link>
                    <a className="dropdown-item" href="#">
                      <i
                        className="mdi mdi-chevron-right"
                        aria-hidden="true"
                      ></i>{" "}
                      Wish List{" "}
                    </a>
                    <a className="dropdown-item" href="#">
                      <i
                        className="mdi mdi-chevron-right"
                        aria-hidden="true"
                      ></i>{" "}
                      Order List
                    </a>
                    {isAuthenticated ? (
                      <a className="dropdown-item"  style={{cursor:"pointer"}}>
                      <i
                        className="mdi mdi-chevron-right"
                        aria-hidden="true"
                      ></i>{" "}
                      Logout
                    </a>
                      ) : (
                    <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{cursor:"pointer"}}>
                      <i
                        className="mdi mdi-chevron-right"
                        aria-hidden="true"
                      ></i>{" "}
                      Login
                    </a>
                      )}
                  </div>
                </li>
                <li className="list-inline-item nav-item">
                  <div className="cart-btn" onClick={handleCartClick}>

                    <a
                      className="btn btn-link border-none"
                    >
                      <MdShoppingCart className="shopping-cart" /> My Cart{" "}
                      <small className="cart-value" style={{color:"#fff"}}>{cartItems.length}</small>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light osahan-menu-2 pad-none-mobile">
        <div className="container-fluid p-0">
          <div className="collapse navbar-collapse" id="navbarText" style={{borderTop:"1px solid #ededed"}}>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto">
              {/* <li className="nav-item">
                <Link to="/" className="nav-link shop">
                  <MdStoreMallDirectory className="mb-1" /> Super Store
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a href="about.html" className="nav-link">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="shop.html">
                  Fruits & Vegetables
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="shop.html">
                  Grocery & Staples
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="shop.html">
                    <i className="mdi mdi-chevron-right" aria-hidden="true"></i>{" "}
                    Shop Grid
                  </a>
                  <a className="dropdown-item" href="single.html">
                    <i className="mdi mdi-chevron-right" aria-hidden="true"></i>{" "}
                    Single Product
                  </a>
                  <a className="dropdown-item" href="cart.html">
                    <i className="mdi mdi-chevron-right" aria-hidden="true"></i>{" "}
                    Shopping Cart
                  </a>
                  <a className="dropdown-item" href="checkout.html">
                    <i className="mdi mdi-chevron-right" aria-hidden="true"></i>{" "}
                    Checkout
                  </a>
                </div>
              </li> */}
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  My Account
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="my-profile.html">
                    <i className="mdi mdi-chevron-right" aria-hidden="true"></i>{" "}
                    My Profile
                  </a>
                  <a className="dropdown-item" href="my-address.html">
                    <i className="mdi mdi-chevron-right" aria-hidden="true"></i>{" "}
                    My Address
                  </a>
                  <a className="dropdown-item" href="wishlist.html">
                    <i className="mdi mdi-chevron-right" aria-hidden="true"></i>{" "}
                    Wish List{" "}
                  </a>
                  <a className="dropdown-item" href="orderlist.html">
                    <i className="mdi mdi-chevron-right" aria-hidden="true"></i>{" "}
                    Order List
                  </a>
                </div>
              </li> */}
              {/* <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Blog Page
                     </a>
                     <div className="dropdown-menu">
                        <a className="dropdown-item" href="blog.html"><i className="mdi mdi-chevron-right" aria-hidden="true"></i> Blog</a>
                        <a className="dropdown-item" href="blog-detail.html"><i className="mdi mdi-chevron-right" aria-hidden="true"></i> Blog Detail</a>
                     </div>
                  </li> */}
              {/* <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     More Pages
                     </a>
                     <div className="dropdown-menu">
                        <a className="dropdown-item" href="about.html"><i className="mdi mdi-chevron-right" aria-hidden="true"></i>  About Us</a>
                        <a className="dropdown-item" href="contact.html"><i className="mdi mdi-chevron-right" aria-hidden="true"></i>  Contact Us</a>
                        <a className="dropdown-item" href="faq.html"><i className="mdi mdi-chevron-right" aria-hidden="true"></i>  FAQ </a>
                        <a className="dropdown-item" href="not-found.html"><i className="mdi mdi-chevron-right" aria-hidden="true"></i>  404 Error</a> 
                     </div>
                  </li> */}
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      </div>

      <Login />
      {isCartOpen && <CartProducts />}
    </div>
  );
};

export default Header;
