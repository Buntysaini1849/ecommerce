import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import {
   MdOutlineShareLocation,
 } from "react-icons/md";

 import {FiUser} from "react-icons/fi";
 import {AiOutlineHeart,AiOutlineUnorderedList} from "react-icons/ai";
 import {IoMdLock} from "react-icons/io";

const Address = () => {
  return (
    <div>
      <Header />
      <section className="account-page section-padding mb-3">
        <div className="container">
          <div className="row mt-2">
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
                        <FiUser className="mdi mdi-account-outline" style={{marginRight:"3px"}}/>{" "}
                        My Profile
                      </Link>
                      <Link
                        to="/address"
                        className="list-group-item list-group-item-action active"
                      >
                         <MdOutlineShareLocation className="mdi mdi-map-marker-circle" style={{marginRight:"3px"}}/>{" "}
                        My Address
                      </Link>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                       <AiOutlineHeart className="mdi mdi-heart-outline" style={{marginRight:"3px"}}/>{" "}
                        Wish List{" "}
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        <AiOutlineUnorderedList  className="mdi mdi-format-list-bulleted" style={{marginRight:"3px"}}/>{" "}
                        Order List
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                       <IoMdLock className="mdi mdi-lock" style={{marginRight:"2px"}}/>{" "}
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card card-body account-right">
                    <div className="widget">
                      <div className="section-header mt-3">
                        <h5 className="heading-design-h5">Contact Address</h5>
                      </div>
                      <form>
                 
                        <div className="row mt-4">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label className="control-label">
                                Country <span className="required">*</span>
                              </label>
                              <select className="select2 form-control border-form-control">
                                <option value="">Select Country</option>

                                <option value="IN">India</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label className="control-label">
                                City <span className="required">*</span>
                              </label>
                              <select className="select2 form-control border-form-control">
                                <option value="">Select City</option>
                                <option value="AF">Alaska</option>
                                <option value="AX">New Hampshire</option>
                                <option value="AL">Oregon</option>
                                <option value="DZ">Toronto</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label className="control-label">
                                Zip Code <span className="required">*</span>
                              </label>
                              <input
                                className="form-control border-form-control"
                                value=""
                                placeholder="123456"
                                type="number"
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label className="control-label">
                                State <span className="required">*</span>
                              </label>
                              <select className="select2 form-control border-form-control">
                                <option value="">Select State</option>
                                <option value="AF">California</option>
                                <option value="AX">Florida</option>
                                <option value="AL">Georgia</option>
                                <option value="DZ">Idaho</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label className="control-label">
                                Address 1 <span className="required">*</span>
                              </label>
                              <textarea className="form-control border-form-control"></textarea>
                            </div>
                          </div>
                        </div> 
                        <div className="row mt-2">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label className="control-label">
                                Address 2 <span className="required">*</span>
                              </label>
                              <textarea className="form-control border-form-control"></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="custom-control custom-checkbox mb-3">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                for="customCheck1"
                              >
                                Same as Contact Address
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-3" style={{ textAlign: "end" }}>
                          <div className="col-sm-12 text-right">
                            <button
                              type="button"
                              className="btn btn-danger btn-lg"
                              style={{marginRight:"5px"}}
                            >
                              {" "}
                              Cencel{" "}
                            </button>
                            <button
                              type="button"
                              className="btn btn-success btn-lg"
                            >
                              {" "}
                              Update Address{" "}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Address;
