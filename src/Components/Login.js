import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import {
  LOGIN_SUCCESS,
  SET_AUTH,
  loginSuccess,
  setAuth,
  setUser,
} from "../State/Actions/LoginAction";
import { FaUserAlt } from "react-icons/fa";
import { BiKey } from "react-icons/bi";
import axios from "axios";
import { Login_API, VERIFYOTP_API } from "./apiUrls";
import logo from "../Images/logo.jpg";

export default function Login() {
  const inputRef = useRef();

  const [username, setUsername] = useState("");
  const [otp, setOTP] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [showinput, SetShowinput] = useState(false);
  const [buttonText, SetButtonText] = useState("Send Otp");
  const [disabled, setDisabled] = useState(false);
  const [shownewinput, SetShownewinput] = useState(false);
  const [disabledotp, setDisabledotp] = useState(true);
  const [error, setError] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timer, setTimer] = useState(30);
  const [disableSendOTP, setDisableSendOTP] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [otpButtonDisabled, setOtpButtonDisabled] = useState(true);

  const dispatch = useDispatch();

  const startTimer = () => {
    setDisableSendOTP(true);
    let timeLeft = 30;
    setTimer(timeLeft);

    const interval = setInterval(() => {
      timeLeft--;
      setTimer(timeLeft);

      if (timeLeft === 0) {
        clearInterval(interval);
        setDisableSendOTP(false);
      }
    }, 1000);
  };

  const showhidediv = () => {
    // e.preventDefault();
    SetShowinput(true);
    SetButtonText("Resend OTP");
    setDisabled(true);

    setTimeout(() => {
      setDisabled(false);
      console.log("This will run after 1 second!");
    }, 10000);
  };

  const handleNumberChange = (e) => {
    setUsername(e.target.value);
  };

  const checkMobileNumberValidity = () => {
    if (/^\d{10}$/.test(username)) {
      setOtpButtonDisabled(false);
    } else {
      setOtpButtonDisabled(true);
    }
  };

  useEffect(() => {
    checkMobileNumberValidity();
  }, [username]);

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  const showhidenewdiv = (e) => {
    e.preventDefault();
    SetShownewinput(true);
  };

  const setdefaultbox = (event) => {
    event.preventDefault();
    window.location.reload(false);
  };

  const navigate = useNavigate();

  const handleGenerateOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(Login_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      const data = await response.json();
      console.log("login auth data", data);
      setOTP(data.otp);
      setShowOtpField(true);
      startTimer();
      // Assuming the API returns the verificationId
      setVerificationId(data.verificationId);
      
    } catch (error) {
      console.error("Error generating OTP:", error);
    }
  };

  useEffect(() => {
    // Clear the OTP field when the timer completes
    if (timer === 0) {
      setOTP("");
    }
  }, [timer]);

  const loginData = {
    username: username,
    otp: otp,
  };

  const handleLogin = async () => {
    try {
      // Make API call to get the authToken
      const response = await fetch(VERIFYOTP_API, {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log("this is data", data);
      const user = data.user;
      console.log("this is user", user);
      const auth = data.auth;
      Cookies.set("auth", auth, { expires: 7 });
      setIsLoggedin(true);
      dispatch(loginSuccess(user, auth));
      dispatch(setUser(user, auth));
      dispatch({ type: SET_AUTH, payload: auth });
      sessionStorage.setItem('authToken', auth);

      navigate("/");
      setUsername("");
      setOTP("");
      setShowModal(false);
      const modalBackdrop = document.querySelector(".modal-backdrop");
      modalBackdrop.parentNode.removeChild(modalBackdrop);
      setShowToast(true);

      let progress = 0;
      const intervalId = setInterval(() => {
        progress += 20;
        setProgress(progress);
      }, 1000);

   
      setTimeout(() => {
        clearInterval(intervalId);
        setProgress(100);
      }, 5000);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  useEffect(() => {
    // Auto-close the toast after 3000 milliseconds (3 seconds)
    if (showToast) {
      const timeoutId = setTimeout(() => {
        setShowToast(false);
      }, 3000);

      // Clean up the timeout on component unmount or when the toast is closed manually
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showToast]);

  return (
    <div className="loginheader">
      {showModal && (
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
            style={{ width: "100%" }}
          >
            <div className="modal-content" style={{borderRadius:"15px"}}>
              <div className="modal-body container-fluid">
                <div className="row d-flex">
                  <div
                    className="col-md-5 col-sm-5"
                    style={{
                      padding: "40px",
                      display: "grid",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={logo}
                      className="img-fluid"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="col-md-7 col-sm-7 pt-4">
                    <h5 className="modal-title">Login to my account</h5>
                    <form className="mt-4">
                      <div className="row d-flex">
                        <div className="col-md-8 col-sm-8">
                          <div className="form-group">
                            <label
                              className="label"
                              style={{ fontWeight: "600" }}
                            >
                              Mobile No.
                            </label>
                            <input
                              type="mobile"
                              className="form-control"
                              value={username}
                              onChange={handleNumberChange}
                              disabled={showOtpField}
                              id="mobile"
                              name="mobile"
                              placeholder="Enter mobile number..."
                              required={true}
                            />
                          </div>
                          <div>
                          {showOtpField && timer > 0 && (
                            <p
                              className="mt-2 text-danger"
                              style={{ fontSize: "12px", fontWeight: "500" }}
                            >
                              Resend OTP in {timer} seconds
                            </p>
                          )}
                          </div>
                          <div>
                          {showOtpField && timer === 0 && (
                            <p
                              className="mt-2 text-danger"
                              style={{ fontSize: "12px", fontWeight: "500" }}
                            >
                            Resend
                            </p>
                          )}
                          </div>
                        </div>

                        <div className="col-md-4 col-sm-4">
                          <div className="otp-div mt-2">
                            {!showOtpField && (
                              <button
                                className="btn btn-sm btn-success mt-4 sendotp-btn"
                                onClick={handleGenerateOTP}
                                disabled={otpButtonDisabled}
                              >
                                Request OTP
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                      {otp ? (
                        <div>
                          <div className="box">
                      
                            <div className="form-group">
                              <label
                                className="label"
                                style={{ fontWeight: "600" }}
                              >
                                {" "}
                                Enter OTP
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="otp"
                                value={otp}
                                maxLength="4"
                                name="number"
                                onChange={(e) => setOTP(e.target.value)}
                                style={{ width: "65%" }}
                              />
                            </div>
                        
                          </div>
                        </div>
                      ) : (
                        <div>
                        <div className="box">
                        {showOtpField && timer === 0 && (
                          <div className="form-group">
                            <label
                              className="label"
                              style={{ fontWeight: "600" }}
                            >
                              {" "}
                              Enter OTP
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="otp"
                              value={otp}
                              maxLength="4"
                              name="number"
                              onChange={(e) => setOTP(e.target.value)}
                              style={{ width: "65%" }}
                            />
                          </div>
                        )}
                        </div>
                      </div>
                      )}

                      <div className="container d-flex p-0">
                        <div className="col-md-5 col-sm-5">
                          
                          <div className="mt-2">
                          {showOtpField && timer === 0 && (
                            <a
                              className="text-danger"
                              style={{fontWeight:"500",cursor:"pointer"}}
                              onClick={handleGenerateOTP}
                            >
                              Resend OTP
                            </a>
                          )}
                        </div>
                         
                        </div>
                       
                      </div>
                    </form>
                    <div>
                    {showOtpField && (
                    <button
                    type="submit"
                    className="btn btn-sm text-white mt-3"
                    onClick={handleLogin}
                    style={{ fontSize: "15px", fontWeight: "500",width:"65%" ,backgroundColor:"#3bb77e",boxShadow: "0 1px 5px 0 rgba(0,0,0,.11)",
                    transition:"opacity .1s ease-in"}}
                  >
                    Login
                    
                  </button>
                    )}
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      )}
      {showToast && (
        <div
          className="position-fixed top-0 end-0 p-3"
          style={{ zIndex: "9999" }}
        >
          <div
            className="toast show"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <strong className="me-auto">Success</strong>
              <small className="text-muted">just now</small>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
                onClick={handleToastClose}
              ></button>
            </div>
            <div className="toast-body">
              Login successful! Welcome to the MoonHerbal.
            </div>
            <div className="progress mt-2">
              <div
                className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                role="progressbar"
                style={{ width: `${progress}%`, height: "20px" }}
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
