import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import { MdOutlineShareLocation } from "react-icons/md";


import { FiUser } from "react-icons/fi";
import {
  AiOutlineHeart,
  AiOutlineUnorderedList,
  AiOutlinePlus,
} from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import Login from "./Login";
import { useSelector } from "react-redux";
import { CUSTOMER_ADDRESS_API, PROFILE_API } from "./apiUrls";

import "../Css/AllProfiles.css";

const Address = () => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const auth = useSelector((state) => state.login.auth);

  const [data, setData] = useState([]);
  const [profileData,setProfileData] = useState([]);
  // const [newAddress, setNewAddress] = useState({
  //   type: "add",
  //   address_one: "",
  //   address_two: "",
  //   country: "",
  //   city: "",
  //   state: "",
  //   pincode: "",
  //   add_type: "Delivery",
  // });
  const [editingAddress, setEditingAddress] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDropdowns, setShowDropdowns] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [formData, setFormData] = useState({
    type: "update",
    address_one: "",
    address_two: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    add_type: "Delivery",
  });

  const [addformData, setAddFormData] = useState({
    type: "add",
    address_one: "",
    address_two: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    add_type: "Delivery",
  });

  async function fetchData() {
    try {
      const response = await fetch(CUSTOMER_ADDRESS_API, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: auth },
      });
      const responseData = await response.json();
      setData(responseData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // const handleaddClick = () => {
  //   setData("");
  // };


  useEffect(() => {
    async function fetchProfle() {
      try {
        const response = await fetch(PROFILE_API, {
          method: "GET",
          headers: { "Content-Type": "application/json", Authorization: auth },
        });
        const responseData = await response.json();
        console.log(responseData.data);
        const dataArray = Array.isArray(responseData)
          ? responseData
          : [responseData.data];
        console.log(auth);

        setProfileData(dataArray);
        console.log(dataArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchProfle();
  }, []);

  const handleEditClick = (data) => {
    setShowEditForm(true);
    setShowAddForm(false);
    setEditingAddress(data);
    setFormData(data);
  };

  const handleAddClick = () => {
    setShowEditForm(true);
    setEditingAddress(null);
    setShowAddForm(true);
  };

  const handleCancelAdd = () => {
    setShowEditForm(false);
    setShowAddForm(false);
    setAddFormData({
      address_one: "",
      address_two: "",
      country: "",
      city: "",
      state: "",
      pincode: "",
    });
  };

  const handleDotClick = (id) => {
    setSelectedCardId(id);
    setShowDropdowns(true);
  };

  // const handleSubmit = async (data) => {
  //   // Replace 'YOUR_API_ENDPOINT' with the actual endpoint URL
  //   const apiUrl = CUSTOMER_ADDRESS_API;

  //   // Replace 'YOUR_BEARER_TOKEN' with the actual authorization token

  //   try {
  //     const response = await fetch(`${apiUrl}/${data.id}`, {
  //       method: "POST",
  //       headers: {
  //         Authorization: auth,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     fetchData();
  //     console.log("Address updated successfully:", data);
  //   } catch (error) {
  //     // Handle any errors that occurred during the fetch request
  //     console.error("Error updating profile:", error);
  //   }
  // };

  // const handleChange = (e, id) => {
  //   const { name, value } = e.target;
  //   const updatedAddresses = [...data];
  //   updatedAddresses[id][name] = value;
  //   console.log(value);
  //   setData(updatedAddresses);
  //   setNewAddress(updatedAddresses);
  // };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddInputChange = (e) => {
    setAddFormData({ ...addformData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(CUSTOMER_ADDRESS_API + editingAddress.id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        fetchData();
        setEditingAddress(null);
        console.log("edit data", response.message);
      }
    } catch (error) {
      console.error("Error updating address:", error);
    }
  };

  const handleAdd = async () => {
    try {
      const response = await fetch(CUSTOMER_ADDRESS_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        fetchData();
        setAddFormData({
          type: "add",
          address_one: "",
          address_two: "",
          country: "",
          city: "",
          state: "",
          pincode: "",
          add_type: "delivery",
        });
        console.log("add form data", response.message);
      }
    } catch (error) {
      console.error("Error adding address:", error);
    }
  };

  const handleCancelEdit = () => {
    setShowEditForm(false);
    setEditingAddress(null);
    setFormData({
      address_one: "",
      address_two: "",
      country: "",
      city: "",
      state: "",
      pincode: "",
    });
  };

  return (
    <div>
      <Header />
      {isAuthenticated ? (
        <section className="account-page section-padding mb-2">
          <div className="container">
            <div className="row mt-2">
              <div className="col-lg-9 mx-auto">
                <div className="row no-gutters">
                  
                  <div className="col-md-4">
                    <div className="card account-left">
                    {profileData && profileData.length > 0 ? (
                            profileData.map((customer) => (
                      <div className="user-profile-header">
                        <img alt="logo" src="img/user.jpg" />
                        <h5 className="mb-1 text-secondary">
                          <strong>Hi </strong> {customer.first_name} <span>{customer.last_name}</span>
                        </h5>
                        <p>{customer.mobile}</p>
                      </div>
                       ))
                       ) : (
                         <div>No data available</div>
                       )}
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
                          className="list-group-item list-group-item-action active"
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

                  <div className="col-md-8">
                    <div className="card card-body account-right">
                      <h5 className="heading-design-h5 mt-2">
                        Manage Addresses
                      </h5>
                      <div className="widget">
                        <div
                          class="card mt-1 mb-4"
                          style={{
                            border: "1px solid lightgrey",
                            cursor: "pointer",
                          }}
                        >
                          <div
                            class="card-body d-flex p-1 mt-1"
                            onClick={handleAddClick}
                          >
                            <AiOutlinePlus
                              style={{
                                fontSize: "17px",
                                margin: "12px 12px 0px 12px",
                                fontWeight: "500",
                                color: "#3dbe83",
                              }}
                            />
                            <p
                              style={{
                                fontSize: "15px",
                                marginTop: "10px",
                                color: "#3dbe83",
                                fontWeight: "500",
                                
                              }}
                          
                            >
                              ADD NEW ADDRESS
                            </p>
                          </div>
                        </div>

                        <div>
                          {data && data.length > 0 ? (
                            data.map((user) => (
                              <div>
                                {!showEditForm && (
                                  <div
                                    class="card p-2"
                                    style={{
                                      border: "1px solid lightgrey",
                                      color: "black",
                                      marginTop:"-1px",
                                    }}
                                    onMouseLeave={() => setShowDropdowns(false)}
                                    key={user.id}
                                  >
                                    <div class="card-body p-0">
                                      <div className="container">
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
                                                {user.first_name}{" "}
                                                <span>{user.last_name}</span>
                                              </p>
                                            </div>
                                            <div
                                              className="dot-icon-container"
                                              key={user.id}
                                              
                                            >
                                              <BsThreeDotsVertical
                                                style={{ fontSize: "18px" }}
                                                className="dot-icon"
                                                key={user.id}
                                                id={user.id}
                                                onClick={() => handleDotClick(user.id)}
                                                
                                              />
                                              {showDropdowns && user.id === selectedCardId &&  (
                                                <div className="dropdowns" onMouseLeave={() => setShowDropdowns(false)}>
                                                  <div
                                                    className="edit-option"
                                                    onClick={() =>
                                                      handleEditClick(user)
                                                    }
                                                  >
                                                    Edit
                                                  </div>
                                                  <div className="delete-option">
                                                    Delete
                                                  </div>
                                                </div>
                                              )}
                                            </div>
                                          </div>

                                          <div className="mt-1">
                                            <p>
                                              {user.address_one}
                                              <span
                                                style={{ marginLeft: "5px" }}
                                              >
                                                {user.address_two},
                                              </span>
                                              <span
                                                style={{ marginLeft: "5px" }}
                                              >
                                                {user.city},
                                              </span>
                                              <span
                                                style={{ marginLeft: "5px" }}
                                              >
                                                {user.state}-
                                              </span>
                                              <span style={{fontWeight:"500",color:"#000"}}>{user.pincode}</span>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                {editingAddress &&
                                  editingAddress.id === user.id && (
                                    <div className="card-footer mt-4" style={{border:"1px solid lightgrey"}}>
                                      <h5 className="section-header mt-2 pl-2 pb-2">
                                        Edit Address
                                      </h5>
                                      <form>
                                        <div className="row mt-2">
                                          <div className="col-sm-6">
                                            <div className="form-group">
                                              <label className="control-label">
                                                Country{" "}
                                                <span className="required">
                                                  *
                                                </span>
                                              </label>
                                              <select
                                                className="select2 form-control border-form-control"
                                                name="country"
                                                onChange={handleInputChange}
                                              >
                                                <option
                                                  value={formData.country}
                                                >
                                                  {formData.country}
                                                </option>

                                                <option value="India">
                                                  India
                                                </option>
                                              </select>
                                            </div>
                                          </div>
                                          <div className="col-sm-6">
                                            <div className="form-group">
                                              <label className="control-label">
                                                City{" "}
                                                <span className="required">
                                                  *
                                                </span>
                                              </label>
                                              <select
                                                className="select2 form-control border-form-control"
                                                name="city"
                                                onChange={handleInputChange}
                                              >
                                                <option value={formData.city}>
                                                  {formData.city}
                                                </option>
                                                <option value="Gurugram">
                                                  Gurugram
                                                </option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row mt-2">
                                          <div className="col-sm-6">
                                            <div className="form-group">
                                              <label className="control-label">
                                                Pin Code{" "}
                                                <span className="required">
                                                  *
                                                </span>
                                              </label>
                                              <input
                                                className="form-control border-form-control"
                                                value=""
                                                placeholder="123456"
                                                type="number"
                                                name="pincode"
                                                onChange={handleInputChange}
                                              />
                                            </div>
                                          </div>
                                          <div className="col-sm-6">
                                            <div className="form-group">
                                              <label className="control-label">
                                                State{" "}
                                                <span className="required">
                                                  *
                                                </span>
                                              </label>
                                              <select
                                                className="select2 form-control border-form-control"
                                                name="state"
                                                onChange={handleInputChange}
                                              >
                                                <option value={formData.state}>
                                                  {formData.state}
                                                </option>
                                                <option value="UP">UP</option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row mt-2">
                                          <div className="col-sm-12">
                                            <div className="form-group">
                                              <label className="control-label">
                                                Address 1{" "}
                                                <span className="required">
                                                  *
                                                </span>
                                              </label>
                                              <textarea
                                                className="form-control border-form-control"
                                                name="address_one"
                                                onChange={handleInputChange}
                                                value={formData.address_one}
                                              ></textarea>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row mt-2">
                                          <div className="col-sm-12">
                                            <div className="form-group">
                                              <label className="control-label">
                                                Address 2{" "}
                                                <span className="required">
                                                  *
                                                </span>
                                              </label>
                                              <textarea
                                                className="form-control border-form-control"
                                                name="address_two"
                                                onChange={handleInputChange}
                                                value={formData.address_two}
                                              ></textarea>
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
                                        <div
                                          className="row mt-3"
                                          style={{ textAlign: "end" }}
                                        >
                                          <div className="col-sm-12 text-right">
                                            <button
                                              type="button"
                                              className="btn btn-danger btn-lg"
                                              style={{ marginRight: "5px" }}
                                              onClick={handleCancelEdit}
                                            >
                                              {" "}
                                              Close{" "}
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-success btn-lg"
                                              onClick={handleUpdate}
                                            >
                                              {" "}
                                              Update Address{" "}
                                            </button>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  )}
                              </div>
                            ))
                          ) : (
                            <div>No data available</div>
                          )}
                        </div>

                        {showAddForm && (
                          <div className="container-fluid bg-light mt-4" style={{border:"1px solid lightgrey"}}>
                            <h5 className="section-header mt-2 p-3">
                              Add Address
                            </h5>
                            <form>
                              <div className="row mt-1">
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label className="control-label">
                                      Country{" "}
                                      <span className="required">*</span>
                                    </label>
                                    <select
                                      className="select2 form-control border-form-control"
                                      name="country"
                                      onChange={handleAddInputChange}
                                    >
                                      <option value={addformData.country}>
                                        {addformData.country}
                                      </option>

                                      <option value="India">India</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label className="control-label">
                                      City <span className="required">*</span>
                                    </label>
                                    <select
                                      className="select2 form-control border-form-control"
                                      name="city"
                                      onChange={handleAddInputChange}
                                    >
                                      <option value={addformData.city}>
                                        {addformData.city}
                                      </option>
                                      <option value="Gurugram">Gurugram</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="row mt-2">
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label className="control-label">
                                      Pin Code{" "}
                                      <span className="required">*</span>
                                    </label>
                                    <input
                                      className="form-control border-form-control"
                                      value={addformData.pincode}
                                      placeholder="123456"
                                      type="number"
                                      name="pincode"
                                      onChange={handleAddInputChange}
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label className="control-label">
                                      State <span className="required">*</span>
                                    </label>
                                    <select
                                      className="select2 form-control border-form-control"
                                      name="state"
                                      onChange={handleAddInputChange}
                                    >
                                      <option value={addformData.state}>
                                        {addformData.state}
                                      </option>
                                      <option value="Haryana">Haryana</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="row mt-2">
                                <div className="col-sm-12">
                                  <div className="form-group">
                                    <label className="control-label">
                                      Address 1{" "}
                                      <span className="required">*</span>
                                    </label>
                                    <textarea
                                      className="form-control border-form-control"
                                      name="address_one"
                                      onChange={handleAddInputChange}
                                      value={addformData.address_one}
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                              <div className="row mt-2">
                                <div className="col-sm-12">
                                  <div className="form-group">
                                    <label className="control-label">
                                      Address 2{" "}
                                      <span className="required">*</span>
                                    </label>
                                    <textarea
                                      className="form-control border-form-control"
                                      name="address_two"
                                      onChange={handleAddInputChange}
                                      value={addformData.address_two}
                                    ></textarea>
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
                              <div
                                className="row mt-3"
                                style={{ textAlign: "end" }}
                              >
                                <div className="col-sm-12 text-right mb-2">
                                  <button
                                    type="button"
                                    className="btn btn-danger btn-lg"
                                    style={{ marginRight: "5px" }}
                                    onClick={handleCancelAdd}
                                  >
                                    {" "}
                                    Close{" "}
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-success btn-lg"
                                    onClick={handleAdd}
                                  >
                                    {" "}
                                    Add Address{" "}
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        )}
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
          <p
            className="text-center pt-5 pb-5"
            style={{ fontSize: "16px", color: "#000" }}
          >
            You are not logged in , please{" "}
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{ cursor: "pointer", color: "#3bb77e", fontWeight: "600" }}
            >
              login
            </a>{" "}
            to continue.
          </p>
          <Login />
        </>
      )}

      <Footer />
    </div>
  );
};

export default Address;
