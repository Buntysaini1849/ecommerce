import React,{useEffect, useState} from "react";
import Header from "./Header";
import { MdPhoneIphone } from "react-icons/md";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CUSTOMER_ADDRESS_API } from "./apiUrls";

const Checkout = () => {
  const [data, setData] = useState([]);
  const [lastAddedAddress, setLastAddedAddress] = useState(null);
  const cartItem = useSelector((state) => state.cart.product);
  const auth = useSelector((state) => state.login.auth);

  async function fetchData() {
    try {
      const response = await fetch(CUSTOMER_ADDRESS_API, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: auth },
      });
      const responseData = await response.json();
      setData(responseData);
     if (responseData.length > 0) {
        setLastAddedAddress(responseData[responseData.length - 1]);
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div>
        <div>
        <Header />
        </div>
      <div>
        <section className="checkout-page section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="checkout-step">
                  <div className="accordion" id="accordionExample">
                    <div className="card checkout-step-one">
                      <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <span className="number">1</span> Phone Number
                            Verification
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <p>
                            We need your phone number so that we can update you
                            about your order.
                          </p>
                          <form>
                            <div className="row align-items-center">
                              <div className="col-auto">
                                <label className="sr-only">phone number</label>
                                <div className="input-group mb-2">
                                  <div className="input-group-prepend">
                                    <div className="input-group-text" style={{height:"35px"}}>
                                      <MdPhoneIphone className="mdi"/>
                                    </div>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter phone number"
                                  />
                                </div>
                              </div>
                              <div className="col-auto">
                                <button
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                  className="btn btn-secondary mb-2 btn-lg"
                                >
                                  NEXT
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="card checkout-step-two">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <span className="number">2</span> Delivery Address
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        {lastAddedAddress ? (
                        <div className="card-body">
                          <div
                                          className="container p-0 mt-2"
                                          style={{ fontWeight: "500" }}
                                        >
                                          <div
                                            className="container-fluid d-flex"
                                            style={{
                                              justifyContent: "space-between",
                                            }}
                                          >
                                            <div>
                                              <p
                                                style={{
                                                  color: "#000",
                                                  fontWeight: "600",
                                                  marginLeft: "-12px",
                                                }}
                                              >
                                                {lastAddedAddress.first_name}
                                                <span>{lastAddedAddress.last_name}</span>
                                              </p>
                                            </div>
                                           
                                          </div>

                                          <div className="mt-1">
                                            <p>
                                              {lastAddedAddress.address_one}
                                              <span
                                                style={{ marginLeft: "5px" }}
                                              >
                                                {lastAddedAddress.address_two},
                                              </span>
                                              <span
                                                style={{ marginLeft: "5px" }}
                                              >
                                                {lastAddedAddress.city},
                                              </span>
                                              <span
                                                style={{ marginLeft: "5px" }}
                                              >
                                                {lastAddedAddress.state}-
                                              </span>
                                              <span
                                                style={{
                                                  fontWeight: "500",
                                                  color: "#000",
                                                }}
                                              >
                                                {lastAddedAddress.pincode}
                                              </span>
                                            </p>
                                          </div>
                                        </div>
                        </div>
                          ) : (
                            <p>No addresses available.</p>
                          )}
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <span className="number">3</span> Payment
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <form className="col-lg-8 col-md-8 mx-auto">
                            <div className="form-group">
                              <label className="control-label">
                                Card Number
                              </label>
                              <input
                                className="form-control border-form-control"
                                value=""
                                placeholder="0000 0000 0000 0000"
                                type="text"
                              />
                            </div>
                            <div className="row">
                              <div className="col-sm-3">
                                <div className="form-group">
                                  <label className="control-label">Month</label>
                                  <input
                                    className="form-control border-form-control"
                                    value=""
                                    placeholder="01"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-3">
                                <div className="form-group">
                                  <label className="control-label">Year</label>
                                  <input
                                    className="form-control border-form-control"
                                    value=""
                                    placeholder="15"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-3"></div>
                              <div className="col-sm-3">
                                <div className="form-group">
                                  <label className="control-label">CVV</label>
                                  <input
                                    className="form-control border-form-control"
                                    value=""
                                    placeholder="135"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>
                            <hr />
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="customRadio1"
                                name="customRadio"
                                className="custom-control-input"
                              />
                              <label
                                className="custom-control-label"
                                for="customRadio1"
                              >
                                Would you like to pay by Cash on Delivery?
                              </label>
                            </div>
                            <p>
                              Vestibulum semper accumsan nisi, at blandit tortor
                              maxi'mus in phasellus malesuada sodales odio, at
                              dapibus libero malesuada quis.
                            </p>
                            <button
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsefour"
                              aria-expanded="false"
                              aria-controls="collapsefour"
                              className="btn btn-secondary mb-2 btn-lg"
                            >
                              NEXT
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsefour"
                            aria-expanded="false"
                            aria-controls="collapsefour"
                          >
                            <span className="number">4</span> Order Complete
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapsefour"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div className="text-center">
                            <div className="col-lg-10 col-md-10 mx-auto order-done">
                              <i className="mdi mdi-check-circle-outline text-secondary"></i>
                              <h4 className="text-success">
                                Congrats! Your Order has been Accepted..
                              </h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque lobortis tincidunt est,
                                et euismod purus suscipit quis. Etiam euismod
                                ornare elementum. Sed ex est, Sed ex est,
                                consectetur eget consectetur, Lorem ipsum dolor
                                sit amet...
                              </p>
                            </div>
                            <div className="text-center">
                              <Link to="/">
                                <button
                                  type="submit"
                                  className="btn btn-secondary mb-2 btn-lg"
                                >
                                  Return to store
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              
                <div className="card">
                  <h5 className="card-header">
                    My Cart{" "}
                    <span className="text-secondary float-right">({cartItem.length})</span>
                  </h5>
                  {Array.isArray(cartItem) &&
                          cartItem.map((cartData) => (
                  <div className="card-body pt-0 pr-0 pl-0 pb-0">
                    <div className="cart-list-product">
                      <a className="float-right remove-cart" href="#">
                        <i className="mdi mdi-close"></i>
                      </a>
                      <img className="img-fluid" src={cartData.image} alt="" />
                      {/* <span className="badge badge-success">50% OFF</span> */}
                      <h5>
                        <a href="#">{cartData.name}</a>
                      </h5>
                      <h6>
                        <strong>
                          <span className="mdi mdi-approval"></span> Available
                          in
                        </strong>{" "}
                        - {cartData.unit}
                      </h6>
                      <p className="offer-price mb-0">
                      ₹{cartData.sale_price} <i className="mdi mdi-tag-outline"></i>{" "}
                        <span className="regular-price">₹{cartData.mrp_price}</span>
                      </p>
                    </div>
                  
                  </div>
                    ))}
                </div>
              
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Footer />
        </div>
    </div>
  );
};

export default Checkout;
