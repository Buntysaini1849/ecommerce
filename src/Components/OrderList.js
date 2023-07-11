import React from 'react'
import { Link } from "react-router-dom";
import {
   MdOutlineShareLocation,
 } from "react-icons/md";

 import {FiUser} from "react-icons/fi";
 import {AiOutlineHeart,AiOutlineUnorderedList,AiFillEye} from "react-icons/ai";
 import {IoMdLock} from "react-icons/io";
import Header from './Header';
import Footer from './Footer';
import Login from "./Login";
import { useSelector } from "react-redux";

const CartList = () => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  return (
    <div>
        <Header />
        {isAuthenticated ? (
        <section className="account-page section-padding">
         <div className="container">
            <div className="row">
               <div className="col-lg-9 mx-auto">
                  <div className="row no-gutters">
                     <div className="col-md-4">
                        <div className="card account-left">
                        <div className="user-profile-header">
                      <img alt="logo" src="img/user.jpg" />
                      <h5 className="mb-1 text-secondary">
                        <strong>Hi </strong> USER
                      </h5>
                      <p> +91 1234-5678-90</p>
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
                        className="list-group-item list-group-item-action"
                      >
                        <AiOutlineHeart
                          className="mdi mdi-heart-outline"
                          style={{ marginRight: "3px" }}
                        />{" "}
                        Wish List{" "}
                      </Link>
                      <Link
                        to="/orderlist"
                        className="list-group-item list-group-item-action active"
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
                     <div className="col-md-8">
                        <div className="card card-body account-right">
                           <div className="widget">
                              <div className="section-header">
                                 <h5 className="heading-design-h5">
                                    Order List
                                 </h5>
                              </div>
                              <div className="order-list-tabel-main table-responsive">
                                 <table className="datatabel table table-striped table-bordered order-list-tabel" width="100%" cellspacing="0">
                                    <thead>
                                       <tr>
                                          <th>Order #</th>
                                          <th>Date Purchased</th>
                                          <th>Status</th>
                                          <th>Total</th>
                                          <th>Action</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <td>#243</td>
                                          <td>August 08, 2017</td>
                                          <td><span className="badge bg-danger">Canceled</span></td>
                                          <td>₹760.50</td>
                                          <td><a data-bs-toggle="tooltip" data-bs-placement="top" title="" href="#" data-bs-original-title="View Detail" className="btn btn-info btn-sm"><AiFillEye className="mdi-eyes"/></a></td>
                                       </tr>
                                       <tr>
                                          <td>#258</td>
                                          <td>July 21, 2017</td>
                                          <td><span className="badge bg-info">In Progress</span></td>
                                          <td>₹315.20</td>
                                          <td><a data-bs-toggle="tooltip" data-bs-placement="top" title="" href="#" data-bs-original-title="View Detail" className="btn btn-info btn-sm"><AiFillEye className="mdi-eyes"/></a></td>
                                       </tr>
                                       <tr>
                                          <td>#254</td>
                                          <td>June 15, 2017</td>
                                          <td><span className="badge bg-warning">Delayed</span></td>
                                          <td>₹1,264.00</td>
                                          <td><a data-bs-toggle="tooltip" data-bs-placement="top" title="" href="#" data-bs-original-title="View Detail" className="btn btn-info btn-sm"><AiFillEye className="mdi-eyes"/></a></td>
                                       </tr>
                                       <tr>
                                          <td>#293</td>
                                          <td>May 19, 2017</td>
                                          <td><span className="badge bg-success">Delivered</span></td>
                                          <td>₹198.35</td>
                                          <td><a data-bs-toggle="tooltip" data-bs-placement="top" title="" href="#" data-bs-original-title="View Detail" className="btn btn-info btn-sm"><AiFillEye className="mdi-eyes"/></a></td>
                                       </tr>
                                       
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      ):(
        <>
       <p className="text-center pt-5 pb-5" style={{fontSize:"16px", color:"#000"}}>You are not logged in , please <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{cursor:"pointer",color:"#3bb77e",fontWeight:"600"}}>login</a> to continue.</p>
      <Login />
      </>
     )}
      <Footer/>
      
    </div>
  )
}

export default CartList
