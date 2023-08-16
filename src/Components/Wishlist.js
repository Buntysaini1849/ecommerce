import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import { MdOutlineShareLocation } from "react-icons/md";
import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineUnorderedList } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
import Login from "./Login";
import { useSelector } from "react-redux";
import { PROFILE_API, WISHLIST_API } from "./apiUrls";
import avatar from "../Images/avatar.svg";


const Wishlist = () => {
  const [profileData, setProfileData] = useState([]);
  const [wishlistData, setWishlistData] = useState([]);


  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const auth = useSelector((state) => state.login.auth);


  useEffect(() => {
    async function fetchProfle() {
      try {
        const response = await fetch(PROFILE_API, {
          method: "GET",
          headers: { "Content-Type": "application/json", Authorization: auth },
        });
        const responseData = await response.json();
        // console.log(responseData.data);
        const dataArray = Array.isArray(responseData)
          ? responseData
          : [responseData.data];
        // console.log(auth);

        setProfileData(dataArray);
        // console.log(dataArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchProfle();
  }, []);

  useEffect(() => {
    async function fetchWishlist() {
      try {
        const response = await fetch(WISHLIST_API, {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: auth },
          body: JSON.stringify({"type":"view"}),
        });
        const responseData = await response.json();
        // console.log(auth);

        setWishlistData(responseData.data);

        console.log(responseData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchWishlist();
  }, []);

  
  return (
    <div>
      <Header />
      {isAuthenticated ? (
        <section className="account-page section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 mx-auto">
                <div className="row no-gutters">
                  {profileData && profileData.length > 0 ? (
                    profileData.map((user) => (
                      <div className="col-md-4">
                        <div className="card account-left">
                          <div className="user-profile-header">
                            {user.profile ? (
                              <img alt="logo" src={user.profile} />
                            ) : (
                              <img alt="logo" src={avatar} />
                            )}
                            <h5 className="mb-1 text-secondary">
                              <strong>Hi </strong> {user.first_name}
                              <span>{user.last_name}</span>
                            </h5>
                            <p> +91 {user.mobile}</p>
                          </div>
                          <div className="list-group">
                            <Link
                              to="/profile"
                              className="list-group-item list-group-item-action"
                            >
                              <FiUser
                                className="mdi mdi-account-outline"
                                style={{ marginRight: "3px" }}
                              />{" "}
                              My Profile
                            </Link>
                            <Link
                              to="/address"
                              className="list-group-item list-group-item-action"
                            >
                              <MdOutlineShareLocation
                                className="mdi mdi-map-marker-circle"
                                style={{ marginRight: "3px" }}
                              />{" "}
                              My Address
                            </Link>
                            <Link
                              to="/wishlist"
                              className="list-group-item list-group-item-action active"
                            >
                              <AiOutlineHeart
                                className="mdi mdi-heart-outline"
                                style={{ marginRight: "3px" }}
                              />{" "}
                              Wish List{" "}
                            </Link>
                            <Link
                              to="/orderlist"
                              className="list-group-item list-group-item-action"
                            >
                              <AiOutlineUnorderedList
                                className="mdi mdi-format-list-bulleted"
                                style={{ marginRight: "3px" }}
                              />{" "}
                              Order List
                            </Link>
                            <a
                              href="#"
                              className="list-group-item list-group-item-action"
                            >
                              <IoMdLock
                                className="mdi mdi-lock"
                                style={{ marginRight: "2px" }}
                              />{" "}
                              Logout
                            </a>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>No data available..</div>
                  )}


                  <div className="col-md-8">
                    <div className="card card-body account-right">
                      <div className="widget">
                        <div className="section-header">
                          <h5 className="heading-design-h5">Wishlist</h5>
                        </div>
                        <div className="row no-gutters">
                        {wishlistData && wishlistData.length > 0 ? (
                            wishlistData.map((data) => (
                          <div className="col-md-6">
                            <div className="product mt-2">
                              <a href="#">
                                <div className="product-header">
                                  {/* <span className="badge badge-success">
                                  50% OFF
                                </span> */}
                                  <img
                                    alt="product image"
                                    src={data.image}
                                    className="img-fluid"
                                  />
                                  <span className="veg text-success mdi mdi-circle"></span>
                                </div>
                                <div className="product-body">
                                  <h5>{data.name}</h5>
                                  <h6>
                                    <strong>
                                      <span className="mdi mdi-approval"></span>
                                      Available in
                                    </strong>{" "}
                                    - {data.unit}
                                  </h6>
                                </div>
                                <div className="product-footer d-flex">
                                  <p className="offer-price mb-0">
                                    ₹{data.sale_price}
                                    <i className="mdi mdi-tag-outline"></i>
                                    <br />
                                    <span className="regular-price">₹{data.mrp_price}</span>
                                  </p>
                                  <button
                                    className="btn btn-secondary btn-sm float-right"
                                    type="button"
                                  >
                                    <i className="mdi mdi-cart-outline"></i> Add
                                    To Cart
                                  </button>
                                </div>
                              </a>
                            </div>
                          </div>
                         ))
                         ) : (
                           <div>No data available</div>
                         )}
                        </div>

                        <nav>
                          <ul className="pagination justify-content-center mt-4">
                            <li className="page-item disabled">
                              <span className="page-link">Previous</span>
                            </li>
                            <li className="page-item">
                              <a href="#" className="page-link">
                                1
                              </a>
                            </li>
                            <li className="page-item active">
                              <span className="page-link">
                                2<span className="sr-only">(current)</span>
                              </span>
                            </li>
                            <li className="page-item">
                              <a href="#" className="page-link">
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a href="#" className="page-link">
                                Next
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <p className="text-center pt-5 pb-5" style={{ fontSize: "16px", color: "#000" }}>You are not logged in , please <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ cursor: "pointer", color: "#3bb77e", fontWeight: "600" }}>login</a> to continue.</p>
          <Login />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Wishlist;
