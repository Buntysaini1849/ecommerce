import React, { useEffect, useState } from "react";
import Header from "./Header";
import { MdPhoneIphone } from "react-icons/md";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CART_API, CUSTOMER_ADDRESS_API, ORDER_PLACE } from "./apiUrls";

const Checkout = () => {
  const [data, setData] = useState([]);
  const [lastAddedAddress, setLastAddedAddress] = useState(null);
  const [cartItem, setCartItem] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [paymentMode, setPaymentMode] = useState(1);
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [showTab, setShowTab] = useState(false);


  const auth = useSelector((state) => state.login.auth);
  const cartItemsCount = useSelector((state) => state.cartCount.cartItemsCount);

  async function fetchData() {
    try {
      const response = await fetch(CUSTOMER_ADDRESS_API, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: auth },
      });
      const responseData = await response.json();
      setData(responseData.data);
      console.log("this is address data", data);
      const lastAddress =
        responseData.data && responseData.data.length > 0
          ? responseData.data[responseData.data && responseData.data.length - 1]
          : null;
      setLastAddedAddress(lastAddress);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchCartData() {
    try {
      const response = await fetch(CART_API, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: auth },
        body: JSON.stringify({ type: "view" }),
      });
      const responseData = await response.json();
      setCartItem(responseData.data);
      setCartItemCount(responseData.data.length);
      console.log("this is cart view data", responseData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchCartData();
  }, []);

  const handlePaymentMode = () => {
    setPaymentMode(2);
    setShowForm(false);
    setShowButton(true);
    console.log("This is payment mode", paymentMode);
  };



  const handlePlaceOrder = (addressId, couponCode) => {
    const payloads = {
      type: "add",
      address_id: addressId,
      payment_mode: JSON.parse(paymentMode),
      coupon_code: 2,
    };

    fetch(ORDER_PLACE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth,
      },
      body: JSON.stringify(payloads),
    })
      .then((response) => response.json())
      .then((data) => {

        setOrderId(data.message);
        console.log("order id",data.message);
        setShowTab(!showTab);
        
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  };


  const handlePayOnline = () => {
    setShowForm((prevState) => !prevState);
    setShowButton(true);
  }

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
                    {/* <div className="card checkout-step-one">
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
                    </div> */}
                    <div className="card checkout-step-one">
                      <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <span className="number">1</span> Delivery Address
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        {lastAddedAddress ? (
                          <div className="card-body" key={lastAddedAddress.id}>
                            <div
                              className="container p-4 mt-2 shadow-sm"
                              style={{
                                fontWeight: "500",
                                border: "1px solid #3bb77e",
                              }}
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
                                  <span style={{ marginLeft: "5px" }}>
                                    {lastAddedAddress.address_two},
                                  </span>
                                  <span style={{ marginLeft: "5px" }}>
                                    {lastAddedAddress.city},
                                  </span>
                                  <span style={{ marginLeft: "5px" }}>
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
                            <button
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapsetwo"
                              className="btn btn-secondary mt-2 btn-lg mx-auto"
                            >
                              Next
                            </button>
                          </div>
                        ) : (
                          <p>No addresses available.</p>
                        )}
                      </div>
                    </div>
                    <div className="card">
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
                            <span className="number">2</span> Payment
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <form className="col-lg-8 col-md-8 mx-auto">
                            <div className="row d-flex">
                              <div className="col-md-6">
                              <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="customRadio1"
                                name="customRadio"
                                className="form-check-input"
                                checked={showForm}
                                onChange={handlePayOnline}
                                style={{border:"1px solid #c6b1b1",fontSize:"16px"}}
                              />
                              <label
                                className="form-check-label"
                                style={{marginLeft:"5px"}}
                                for="customRadio1"
                              >
                                Pay Online
                              </label>
                              
                            </div>
                              </div>
                              <div className="col-md-6">
                              <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="customRadio1"
                                name="customRadio"
                                value={JSON.stringify(2)}
                                className="form-check-input"
                                checked={paymentMode === 2}
                                onChange={handlePaymentMode}
                                style={{border:"1px solid #c6b1b1",fontSize:"16px"}}
                              />
                              <label
                                className="form-check-label"
                                style={{marginLeft:"5px"}}
                                for="customRadio1"
                              >
                                Cash on delivery
                              </label>
                              
                            </div>
                              </div>
                            </div>
                            {showForm && (
                              <>
                                <div className="form-group mt-3">
                                  <label className="control-label">
                                    Card Number
                                  </label>
                                  <input
                                    className="form-control border-form-control"
                                    value={cardNumber}
                                    placeholder="0000 0000 0000 0000"
                                    type="text"
                                    onChange={(e) =>
                                      setCardNumber(e.target.value)
                                    }
                                    required={paymentMode === 1}
                                    maxLength={16}
                                  />
                                </div>
                                <div className="row">
                                  <div className="col-sm-3">
                                    <div className="form-group">
                                      <label className="control-label">
                                        Month
                                      </label>
                                      <input
                                        className="form-control border-form-control"
                                        value={month}
                                        placeholder="01"
                                        type="text"
                                        onChange={(e) =>
                                          setMonth(e.target.value)
                                        }
                                        required={paymentMode !== 2}
                                        maxLength={4}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-3">
                                    <div className="form-group">
                                      <label className="control-label">
                                        Year
                                      </label>
                                      <input
                                        className="form-control border-form-control"
                                        value={year}
                                        placeholder="15"
                                        type="text"
                                        onChange={(e) =>
                                          setYear(e.target.value)
                                        }
                                        required={paymentMode !== 2}
                                        maxLength={4}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-3"></div>
                                  <div className="col-sm-3">
                                    <div className="form-group">
                                      <label className="control-label">
                                        CVV
                                      </label>
                                      <input
                                        className="form-control border-form-control"
                                        value={cvv}
                                        placeholder="135"
                                        type="text"
                                        onChange={(e) => setCvv(e.target.value)}
                                        maxLength={3}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                            <hr />

                            <button
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsefour"
                              aria-expanded="false"
                              aria-controls="collapsefour"
                              style={{ display: showButton ? 'block' : 'none' }}
                              className="btn btn-secondary mb-2 btn-lg"
                              onClick={() =>
                                handlePlaceOrder(lastAddedAddress.id)
                              }
                            >
                              Place Order
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="card" style={{ display: showTab ? 'block' : 'none' }}>
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
                            <span className="number">3</span> Order Complete
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
                                Thank you for your order, your order id is {orderId}. 
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
                    <span className="text-secondary float-right">
                      ({cartItemsCount})
                    </span>
                  </h5>
                  {Array.isArray(cartItem) &&
                    cartItem.map((cartData) => (
                      <div className="card-body pt-0 pr-0 pl-0 pb-0">
                        <div className="cart-list-product">
                          <a className="float-right remove-cart" href="#">
                            <i className="mdi mdi-close"></i>
                          </a>
                          <img
                            className="img-fluid"
                            src={cartData.image}
                            alt=""
                          />
                          {/* <span className="badge badge-success">50% OFF</span> */}
                          <h5>
                            <a href="#">{cartData.name}</a>
                          </h5>
                          <h6>
                            <strong>
                              <span className="mdi mdi-approval"></span>{" "}
                              Available in
                            </strong>{" "}
                            - {cartData.unit}
                          </h6>
                          <p className="offer-price mb-0">
                            ₹{cartData.sale_price}{" "}
                            <i className="mdi mdi-tag-outline"></i>{" "}
                            <span className="regular-price">
                              ₹{cartData.mrp_price}
                            </span>
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
