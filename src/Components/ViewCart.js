import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { SlClose } from "react-icons/sl";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { CART_API } from "./apiUrls";
import { FaCartArrowDown } from "react-icons/fa";
import {RiDeleteBin5Line} from "react-icons/ri";
import "../Css/CartView.css";
import { SET_CART_COUNT } from "../State/Actions/CartActions";




const CartProducts = () => {
  const [cartItem, setCartItem] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const auth = useSelector((state) => state.login.auth);
  const cartItemsCount = useSelector((state) => state.cartCount.cartItemsCount);

  const dispatch = useDispatch();


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
      dispatch({ type: SET_CART_COUNT, payload: responseData.data.length });
      console.log("this is cart view data", responseData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchCartData();
  }, []);




  return (
    <div>

      <Header />

      <section className="pt-3 pb-3 page-info section-padding border-bottom bg-white">
        <div className="container">
          <div className="row">

            <div className="col-md-12">
              <a href="#">
                <strong>
                  <span className="mdi mdi-home"></span> Home
                </strong>
              </a>{" "}
              / <span className="mdi mdi-chevron-right"></span>{" "}
              <a href="#">Cart</a>
            </div>
          </div>
        </div>
      </section>
      {cartItemCount === 0 ? (
        <div className="text-center p-5 mt-5 mb-5">
          <FaCartArrowDown style={{ fontSize: "40px", color: "#3bb77e" }} />
          <p className="mt-2" style={{ fontSize: "20px", color: "#000", fontWeight: "500" }}>Your cart is empty.</p>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="container-fluid">
            <section className="cart-page section-padding">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-8" style={{ border: "1px solid #eeeeee", borderRadius: "12px" }}>
                    <div className="card card-body cart-table p-2">
                      <div className="table-responsive">
                        <table className="table cart-table">
                          <thead>
                            <tr style={{ borderColor: "#e6dddd" }}>
                              <th className="cart_product">Product</th>
                              <th style={{width:"280px"}}></th>
                              {/* <th>Unit price</th> */}
                              <th>Qty</th>
                              <th>Total</th>
                              <th>Remove</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Array.isArray(cartItem) &&
                              cartItem.map((cartData) => (
                                <tr style={{ borderColor: "#e6dddd" }} key={cartData.id}>
                                  <td className="cart_product">
                                    <a href="#">

                                      <img src={cartData.image} className="img-fluid" />
                                    </a>
                                  </td>
                                  <td className="cart_description">
                                    <h5 className="product-name">
                                      <p style={{color:"#000",fontSize:"16px"}}>{cartData.name} ( {cartData.unit} )</p>
                                    </h5>
                                    <span className="price-icon">₹{cartData.sale_price}</span>
                                  </td>

                                  <td className="price-icon">
                                    <span>₹{cartData.sale_price}</span>
                                  </td>
                                  <td className="qty">
                                    <div className="input-group" style={{width:"60%"}}>
                                      <span className="input-group-btn">
                                        <button
                                          disabled="disabled"
                                          className="btn btn-theme-round btn-number"
                                          type="button"
                                        >
                                          -
                                        </button>
                                      </span>
                                      <input
                                        type="text"
                                        max="10"
                                        min="1"
                                        value="1"
                                        className="form-control border-form-control form-control-sm input-number"
                                        name="quant[1]"
                                      />
                                      <span className="input-group-btn">
                                        <button
                                          className="btn btn-theme-round btn-number"
                                          type="button"
                                        >
                                          +
                                        </button>
                                      </span>
                                    </div>
                                  </td>
                                  {/* <td className="price-icon">
                                    <span>₹{cartData.sale_price}</span>
                                  </td> */}
                                  <td className="action">
                                    <a
                                      className="btn btn-sm "
                                      data-bs-original-title="Remove"
                                      href="#"
                                      title=""
                                      data-bs-placement="top"
                                      data-bs-toggle="tooltip"

                                    >
                                      <RiDeleteBin5Line  style={{fontSize:"18px",color:"red"}}/>
                                     
                                    </a>
                                  </td>
                                </tr>
                              ))}
                            {/* <tr style={{ borderColor: "#e6dddd" }}>
                            <td className="cart_product">
                              <a href="#">
                                <img
                                  alt="Product"
                                  src="img/item/10.jpg"
                                  className="img-fluid"
                                />
                                 
                              </a>
                            </td>
                            <td className="cart_description">
                              <h5 className="product-name">
                                <a href="#">Ipsums Dolors Untra </a>
                              </h5>
                              <h6>
                                <strong>
                                  <span className="mdi mdi-approval"></span>{" "}
                                  Available in
                                </strong>{" "}
                                - 500 gm
                              </h6>
                            </td>
                            <td className="availability out-of-stock">
                              <span className="badge bg-primary">No stock</span>
                            </td>
                            <td className="price">
                              <span>₹00.00</span>
                            </td>
                            <td className="qty">
                              <div className="input-group">
                                <span className="input-group-btn">
                                  <button
                                    disabled="disabled"
                                    className="btn btn-theme-round btn-number"
                                    type="button"
                                  >
                                    -
                                  </button>
                                </span>
                                <input
                                  type="text"
                                  max="10"
                                  min="1"
                                  value="1"
                                  className="form-control border-form-control form-control-sm input-number"
                                  name="quant[1]"
                                />
                                <span className="input-group-btn">
                                  <button
                                    className="btn btn-theme-round btn-number"
                                    type="button"
                                  >
                                    +
                                  </button>
                                </span>
                              </div>
                            </td>
                            <td className="price">
                              <span>00.00</span>
                            </td>
                            <td className="action">
                              <a
                                className="btn btn-sm btn-danger"
                                data-bs-original-title="Remove"
                                href="#"
                                title=""
                                data-bs-placement="top"
                                data-bs-toggle="tooltip"
                              >
                                <SlClose className="mdi mdi-close-circle-outline" />
                              </a>
                            </td>
                          </tr> */}
                          </tbody>

                        </table>
                      </div>

                    </div>
                    {/* <div className="card mt-2">
                     <h5 className="card-header">My Cart (Design Two)<span className="text-secondary float-right">(5 item)</span></h5>
                     <div className="card-body pt-0 pr-0 pl-0 pb-0">
                        <div className="cart-list-product">
                           <a className="float-right remove-cart" href="#"><i className="mdi mdi-close"></i></a>
                           <img className="img-fluid" src="img/item/11.jpg" alt="">
                           <span className="badge badge-success">50% OFF</span>
                           <h5><a href="#">Product Title Here</a></h5>
                           <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                           <p className="offer-price mb-0">₹450.99 <i className="mdi mdi-tag-outline"></i> <span className="regular-price">₹800.99</span></p>
                        </div>
                        <div className="cart-list-product">
                           <a className="float-right remove-cart" href="#"><i className="mdi mdi-close"></i></a>
                           <img className="img-fluid" src="img/item/1.jpg" alt="" />
                           <span className="badge badge-success">50% OFF</span>
                           <h5><a href="#">Product Title Here</a></h5>
                           <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                           <p className="offer-price mb-0">₹450.99 <i className="mdi mdi-tag-outline"></i> <span className="regular-price">₹800.99</span></p>
                        </div>
                        <div className="cart-list-product">
                           <a className="float-right remove-cart" href="#"><i className="mdi mdi-close"></i></a>
                           <img className="img-fluid" src="img/item/2.jpg" alt="" />
                           <span className="badge badge-success">50% OFF</span>
                           <h5><a href="#">Product Title Here</a></h5>
                           <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                           <p className="offer-price mb-0">₹450.99 <i className="mdi mdi-tag-outline"></i> <span className="regular-price">₹800.99</span></p>
                        </div>
                     </div>
                     <div className="card-footer cart-sidebar-footer">
                        <div className="cart-store-details">
                           <p>Sub Total <strong className="float-right">₹900.69</strong></p>
                           <p>Delivery Charges <strong className="float-right text-danger">+ ₹29.69</strong></p>
                           <h6>Your total savings <strong className="float-right text-danger">₹55 (42.31%)</strong></h6>
                        </div>
                        <a href="checkout.html"><button className="btn btn-secondary btn-lg btn-block text-left" type="button"><span className="float-left"><i className="mdi mdi-cart-outline"></i> Proceed to Checkout </span><span className="float-right"><strong>₹1200.69</strong> <span className="mdi mdi-chevron-right"></span></span></button></a>
                     </div>
                  </div> */}
                  </div>
                  <div className="col-md-4 mt-5" >
                    <div className="container-fluid p-4" style={{ border: "1px solid #eeeeee", borderRadius: "12px" }}>
                      <div style={{ borderColor: "#e6dddd" }}>

                        <form
                          className="d-flex"
                         
                        >
                          <div className="form-group w-100">
                            <input
                              type="text"
                              placeholder="Enter discount code"
                              className="form-control border-form-control form-control-sm"
                            />
                          </div>
                          &nbsp;
                          <button
                            className="btn btn-success float-left btn-sm"
                            type="submit"
                          >
                            Apply
                          </button>
                        </form>
                         
                        <p className="mt-3" style={{textAlign:"right",fontWeight:"500",color:"#111",fontSize:"19px"}}>Total: ₹0.00 </p>
                      
                        <p className="mt-3" style={{textAlign:"right",fontWeight:"500",color:"#111",fontSize:"16px"}}>You Saved : ₹0.00 </p>
                      
                     
                      </div>
                      <Link to="/checkout">
                        <button
                          className="btn btn-secondary btn-lg btn-block text-left w-100 p-3"
                          type="button"
                        >
                          <span style={{ float: "left",fontSize:"13px"}}>
                            <MdOutlineShoppingCart className="mdi mdi-cart-outline mb-1" />
                            Proceed to Checkout{" "}
                          </span>
                          <span style={{ float: "right" }}>
                            <strong>₹57.88</strong>{" "}
                            <span className="mdi mdi-chevron-right"></span>
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CartProducts;
