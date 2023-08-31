import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Link } from "react-router-dom";
import { MdOutlineShareLocation } from "react-icons/md";

import { FiUser } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineUnorderedList } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
import { useSelector } from "react-redux";
import Login from "../Login";
import { PROFILE_API } from "../apiUrls";
import avatar from "../../Images/avatar.svg";

const Profile = () => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const auth = useSelector((state) => state.login.auth);
  const [formData, setFormData] =useState([]);
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
    email: "",
    profile: "",
    gender: "",
    dob: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(PROFILE_API, {
          method: "GET",
          headers: { "Content-Type": "application/json", Authorization: auth },
        });
        const responseData = await response.json();
       
        const dataArray = Array.isArray(responseData)
          ? responseData
          : [responseData.data];
    

        setFormData(dataArray);
     
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
    
  };

  const handleCancel = () => {
    setIsEditing(false);
  }

  const handleUpdateProfile = async () => {
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint URL
    const apiUrl = PROFILE_API;

    // Replace 'YOUR_BEARER_TOKEN' with the actual authorization token

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: auth,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          type: "update",
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const resdata = await response.json();
     
      setIsEditing(false);
    } catch (error) {
      // Handle any errors that occurred during the fetch request
      console.error("Error updating profile:", error);
    }
  };
  return (
    <div>
      <Header />
      {isAuthenticated ? (
        <section className="account-page section-padding mb-3">
          {formData && formData.length > 0 ? (
            formData.map((user) => (
              <div className="container">
                <div className="row mt-2">
                  <div className="col-lg-9 mx-auto">
                    <div className="row no-gutters">
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
                              className="list-group-item list-group-item-action active"
                            >
                              <FiUser
                                className="mdi mdi-account-outline"
                                style={{ marginRight: "3px" }}
                              />
                              My Profile
                            </Link>

                            <Link
                              to="/address"
                              className="list-group-item list-group-item-action"
                            >
                              <MdOutlineShareLocation
                                className="mdi mdi-map-marker-circle"
                                style={{ marginRight: "3px" }}
                              />
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
                            <div className="section-header mt-2">
                              <h5 className="heading-design-h5">My Profile</h5>
                            </div>
                            <form>
                              <div className="row mt-4">
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label className="control-label">
                                      First Name{" "}
                                      <span className="required">*</span>
                                    </label>
                                    {!isEditing && (
                                    <input
                                      className="form-control"
                                      value={user.first_name}
                                      placeholder="Name..."
                                      name="first_name"
                                      type="text"
                                      disabled={!isEditing}
                                    />
                                    )}
                                    {isEditing && (
                                    <input
                                      className="form-control"
                                      value={data.first_name}
                                      placeholder="Name..."
                                      onChange={handleChange}
                                      name="first_name"
                                      type="text"
                                    />
                                    )}
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label className="control-label">
                                      Last Name{" "}
                                      <span className="required">*</span>
                                    </label>
                                    {!isEditing && (
                                    <input
                                      className="form-control border-form-control"
                                      value={user.last_name}
                                      placeholder="Surname..."
                                      name="last_name"
                                      type="text"
                                      disabled={!isEditing}
                                    />
                                    )}
                                    {isEditing && (
                                    <input
                                      className="form-control border-form-control"
                                      value={data.last_name}
                                      placeholder="Surname..."
                                      name="last_name"
                                      type="text"
                                      onChange={handleChange}
                                    />
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="row mt-2">
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label className="control-label">
                                      Phone <span className="required">*</span>
                                    </label>
                                    {!isEditing && (
                                    <input
                                      className="form-control border-form-control"
                                      value={user.mobile}
                                      placeholder="123 456 7890"
                                      type="text"
                                      name="mobile"
                                      disabled={!isEditing}
                                    />
                                    )}
                                     {isEditing && (
                                      <input
                                      className="form-control border-form-control"
                                      value={data.mobile}
                                      placeholder="123 456 7890"
                                      type="text"
                                      name="mobile"
                                      onChange={handleChange}
                                    />
                                     )}
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label className="control-label">
                                      Email Address{" "}
                                      <span className="required">*</span>
                                    </label>
                                    {!isEditing && (
                                    <input
                                      className="form-control border-form-control "
                                      value={user.email}
                                      placeholder="Email..."
                                      type="email"
                                      name="email"
                                      disabled={!isEditing}
                                    />
                                    )}
                                    {isEditing && (
                                    <input
                                      className="form-control border-form-control "
                                      value={data.email}
                                      placeholder="Email..."
                                      type="email"
                                      name="email"
                                      onChange={handleChange}
                                    />
                                    )}

                                  </div>
                                </div>
                              </div>

                              <div className="row mt-2">
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label className="control-label">
                                      Gender <span className="required">*</span>
                                    </label>
                                    {!isEditing && (
                                    <select
                                      className="select2 form-control border-form-control"
                                      name="gender"
                                      disabled={!isEditing}
                                    >
                                      <option value={user.gender}>
                                        {user.gender}
                                      </option>

                                      <option value="Male">Male</option>
                                      <option value="Female">Female</option>
                                    </select>
                                    )}
                                    {isEditing && (
                                    <select
                                      className="select2 form-control border-form-control"
                                      name="gender"
                                      onChange={handleChange}
                                    >
                                      <option value={data.gender}>
                                        {data.gender}
                                      </option>

                                      <option value="Male">Male</option>
                                      <option value="Female">Female</option>
                                    </select>
                                    )}
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label className="control-label">
                                      DOB <span className="required">*</span>
                                    </label>
                                    {!isEditing && (
                                    <input
                                      className="form-control border-form-control "
                                      value={user.dob}
                                      placeholder="dateofbirth..."
                                      type="text"
                                      name="dob"
                                      disabled={!isEditing}
                                    />
                                    )}
                                    {isEditing && (
                                    <input
                                      className="form-control border-form-control "
                                      value={data.dob}
                                      placeholder="dateofbirth..."
                                      type="text"
                                      name="dob"
                                      onChange={handleChange}
                                    />
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div
                                className="row mt-3"
                                style={{ textAlign: "end" }}
                              >
                                <div className="col-sm-12">
                                  <button
                                    type="button"
                                    className="btn btn-danger btn-lg"
                                    style={{ marginRight: "5px" }}
                                    onClick={handleCancel}
                                  >
                                    
                                    Cancel
                                  </button>
                                  {!isEditing && (
                                    <button
                                      type="button"
                                      className="btn btn-success btn-lg"
                                      onClick={handleEdit}
                                      style={{background:"#3bb77e"}}
                                    >
                                     Edit
                                    </button>
                                  )}
                                   {isEditing && (
                                  <button
                                    type="button"
                                    className="btn btn-success btn-lg"
                                    onClick={handleUpdateProfile}
                                    style={{background:"#3bb77e"}}
                                  >
                                   
                                    Save Changes
                                  </button>
                                   )}
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
            ))
          ) : (
            <div>No data available..</div>
          )}
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

export default Profile;
