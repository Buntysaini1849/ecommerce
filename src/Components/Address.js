import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import { MdOutlineShareLocation } from "react-icons/md";

import { FiUser } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineUnorderedList } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
import Login from "./Login";
import { useSelector } from "react-redux";
import { CUSTOMER_ADDRESS_API } from "./apiUrls";

const Address = () => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const auth = useSelector((state) => state.login.auth);

  const [data, setData] = useState([]);
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

  const handleEditClick = (data) => {
    setShowAddForm(false);
    setEditingAddress(data);
    setFormData(data);
    
  };

  const handleAddClick = () => {
    setEditingAddress(null);
    setShowAddForm(true);
  };

  const handleCancelAdd = () => {
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
                      <div className="user-profile-header">
                        <img alt="logo" src="img/user.jpg" />
                        <h5 className="mb-1 text-secondary">
                          <strong>Hi </strong> Bunty <span>Saini</span>
                        </h5>
                        <p>00000000</p>
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
                      <div className="widget">
                        <div
                          className="container-fluid d-flex"
                          style={{ justifyContent: "space-between" }}
                        >
                          <h5 className="heading-design-h5">Contact Address</h5>
                          <button
                            type="button"
                            className="btn btn-sm btn-warning text-white"
                            onClick={handleAddClick}
                          >
                            Add Address
                          </button>
                        </div>

                        <div className="container-fluid  mt-3">
                          {data && data.length > 0 ? (
                            data.map((address) => (
                              <div
                                className="card mb-3"
                                key={address.id}
                                style={{ overflowX: "auto" }}
                              >
                                <div
                                  className="card-body p-0 table-container"
                                  style={{ overflowX: "auto" }}
                                >
                                  <table className="table table-striped">
                                    <thead>
                                      <tr>
                                        <th>Id</th>
                                        <th>Address One</th>
                                        <th>Address Two</th>
                                        <th>Country</th>
                                        <th>City</th>
                                        <th>State</th>
                                        <th>Pincode</th>
                                        <th>Edit</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>{address.id}</td>
                                        <td>{address.address_one}</td>
                                        <td>{address.address_two}</td>
                                        <td>{address.country}</td>
                                        <td>{address.city}</td>
                                        <td>{address.state}</td>
                                        <td>{address.pincode}</td>
                                        <td>
                                          <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() =>
                                              handleEditClick(address)
                                            }
                                          >
                                            Edit
                                          </button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                {editingAddress &&
                                  editingAddress.id === address.id && (
                                    <div className="card-footer">
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
                        {/* <div className="section-header mt-3">
                                <h5 className="heading-design-h5">
                                  Contact Address
                                </h5>
                              </div>
                              <div className="section-header mt-3">
                                <input
                                  type="button"
                                  className="btn btn-md btn-success"
                                  value="Add Address"
                                />
                              </div>
                            </div>

                            <form>
                              <div className="row mt-4">
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label className="control-label">
                                      Country{" "}
                                      <span className="required">*</span>
                                    </label>
                                    <select
                                      className="select2 form-control border-form-control"
                                      name="country"
                                      onChange={handleInputChange}
                                    >
                                      <option value={user.country}>
                                        {user.country}
                                      </option>

                                      <option value="USA">USA</option>
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
                                      onChange={(e) => handleChange(e, id)}
                                    >
                                      <option value={user.city}>
                                        {user.city}
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
                                      value={user.pincode}
                                      placeholder="123456"
                                      type="number"
                                      name="pincode"
                                      onChange={(e) => handleChange(e, id)}
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
                                      onChange={(e) => handleChange(e, id)}
                                    >
                                      <option value={user.state}>
                                        {user.state}
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
                                      <span className="required">*</span>
                                    </label>
                                    <textarea
                                      className="form-control border-form-control"
                                      name="address_one"
                                      onChange={(e) => handleChange(e, id)}
                                      value={user.address_one}
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
                                      onChange={(e) => handleChange(e, id)}
                                      value={user.address_two}
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
                                  >
                                    {" "}
                                    Cencel{" "}
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-success btn-lg"
                                    onClick={handleSubmit}
                                  >
                                    {" "}
                                    Update Address{" "}
                                  </button>
                                </div>
                              </div>
                            </form> */}

                        {/* This is add form        */}
                        {showAddForm && (
                          <div className="container-fluid bg-light">
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
                                <div className="col-sm-12 text-right">
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
