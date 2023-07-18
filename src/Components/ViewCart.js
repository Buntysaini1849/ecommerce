import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, fetchCartData, fetchCartSuccess } from "../State/Actions/CartActions";
import Header from "./Header";
import Footer from "./Footer";
import { SlClose } from "react-icons/sl";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { CART_API } from "./apiUrls";

const CartProducts = () => {
  // const [cartItem, setCartItem] = useState([]);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.login.auth);
   const cartItem = useSelector((state) => state.cart.product);
 


  // useEffect(() => {
  //   dispatch(fetchCartData(auth));
  // }, [dispatch,auth]);


  // useEffect(() => {
  //   const fetchCartData = async () => {
  //     try {
      
  //       const response = await fetch(CART_API, {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': `Bearer ${auth}`,
  //         },
  //       });
  //       const data = await response.json();
  
  //       dispatch(fetchCartSuccess(data.data));
  //       // setCartItem(data.data);
      
  //       console.log("This is cart data",data.data);
  //     } catch (error) {
  //       console.error('Error fetching cart:', error);
  //     }
  //   };
  
  //   if (auth) {
  //     fetchCartData();
  //   }
  // }, [auth, dispatch]);
  
  

  return (
    <div>
      {/* <div className="cart-items p-1">
       
         <div className="container">
         
          <div className="row">
            <div className="col-12 col-md-12 col-sm-12 col-lg-12">
            {Array.isArray(cartItems) &&
                cartItems.map((item) => (
               <div className="row p-1" key={item.id}>
                 
                  <>
                  <div className="col-sm-4 col-md-4 col-lg-4 mt-3">
                     <img src={item.image} className="img-fluid cart-img p-2">
                     </img> 
                      <h4>{item.name}</h4>
                  </div>
                
                  <div className="col-sm-6 col-md-6 col-lg-6 mt-3 text-center" >
                        <h2>{item.id}</h2><br/>
                        <h2>{item.hsn}</h2><br/>
                        <h2>{item.gst}</h2><br/>

                  </div>

                  <div className="col-sm-2 col-md-2 col-lg-2 ">

                  </div>
                  </>
                   
                   
               </div>
            ))}
           
               
            </div>
          </div>
          
         </div>  
        
       </div> */}

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
      {cartItem.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
      <div className="container-fluid">
        <div className="container" style={{ width: "75%" }}>
          <section className="cart-page section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="card card-body cart-table p-2">
                    <div className="table-responsive">
                      <table className="table cart-table">
                        <thead>
                          <tr style={{ borderColor: "#e6dddd" }}>
                            <th className="cart_product">Product</th>
                            <th>Description</th>
                            <th>Avail.</th>
                            <th>Unit price</th>
                            <th>Qty</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                        {Array.isArray(cartItem) &&
                          cartItem.map((cartData) => (
                              <tr style={{ borderColor: "#e6dddd" }} key={cartData.id}>
                                <td className="cart_product">
                                  <a href="#">
                                    
                                    <img src={cartData.image} className="img-fluid"/>
                                  </a>
                                </td>
                                <td className="cart_description">
                                  <h5 className="product-name">
                                    <p>{cartData.name}</p>
                                  </h5>
                                  <h6>
                                    <strong>
                                      <span className="mdi mdi-approval"></span>{" "}
                                      Available in
                                    </strong>{" "}
                                    - {cartData.unit}
                                  </h6>
                                </td>
                                <td className="availability in-stock">
                                  <span className="badge bg-success">
                                    In stock
                                  </span>
                                </td>
                                <td className="price">
                                  <span>₹49.88</span>
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
                                  <span>₹49.88</span>
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
                        <tfoot style={{ borderColor: "#e6dddd" }}>
                          <tr>
                            <td colspan="1"></td>
                            <td colspan="4">
                              <form
                                className="d-flex"
                                style={{ float: "right" }}
                              >
                                <div className="form-group">
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
                            </td>
                            <td colspan="2">Discount : ₹2.88 </td>
                          </tr>
                          <tr>
                            <td colspan="2"></td>
                            <td style={{ textAlign: "right" }} colspan="3">
                              Total products (tax incl.)
                            </td>
                            <td colspan="2">₹10.88 </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "right" }} colspan="5">
                              <strong>Total</strong>
                            </td>
                            <td className="text-danger" colspan="2">
                              <strong>₹57.88 </strong>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <Link to="/checkout">
                      <button
                        className="btn btn-secondary btn-lg btn-block text-left w-100"
                        type="button"
                      >
                        <span style={{ float: "left" }}>
                          <MdOutlineShoppingCart className="mdi mdi-cart-outline mb-1" />{" "}
                          Proceed to Checkout{" "}
                        </span>
                        <span style={{ float: "right" }}>
                          <strong>₹57.88</strong>{" "}
                          <span className="mdi mdi-chevron-right"></span>
                        </span>
                      </button>
                    </Link>
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
