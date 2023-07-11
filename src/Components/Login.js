import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  LOGIN_SUCCESS,
  loginSuccess,
  setUser,
} from "../State/Actions/LoginAction";
import { FaUserAlt } from "react-icons/fa";
import { BiKey } from "react-icons/bi";
import axios from "axios";
import { Login_API, VERIFYOTP_API } from "./apiUrls";

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

  const dispatch = useDispatch();
  

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
      console.log(data);

      // Assuming the API returns the verificationId
      setVerificationId(data.verificationId);
    } catch (error) {
      console.error("Error generating OTP:", error);
    }
  };

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
      console.log(data);
      const user = data.user;
      console.log(user);
      const authToken = data.auth;
      dispatch(loginSuccess(user,authToken));
      dispatch(setUser(user, authToken));
          
    
      navigate("/");
      setUsername("");
      setOTP("");
      setIsLoggedin(true);
      
      setShowModal(false);
      const modalBackdrop = document.querySelector('.modal-backdrop');
      modalBackdrop.parentNode.removeChild(modalBackdrop);
      setShowToast(true);

      let progress = 0;
    const intervalId = setInterval(() => {
      progress += 20;
      setProgress(progress);
    }, 1000);

    // Stop the progress after 5 seconds
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
        
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login to MoonHerbal</h5>
            </div>
            <div className="modal-body">
              
              <form>
                <div className="row d-flex">
                  <div className="col-md-9 col-sm-9">
                    <div className="form-group mt-2">
                      <label className="label" style={{ fontWeight: "600" }}>
                        Mobile No.
                      </label>
                      <input
                        type="mobile"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        id="mobile"
                        name="mobile"
                        placeholder="Enter mobile number..."
                      />
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-3">
                    <div className="otp-div mt-3">
                      <button
                        className="btn btn-sm btn-success mt-4 sendotp-btn"
                        onClick={handleGenerateOTP}
                      >
                        Send OTP
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row d-flex">
                  <div className="col-md-9 col-sm-9">
                    <div className="form-group mt-2">
                      <label className="label" style={{ fontWeight: "600" }}>
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
                      />
                    </div>
                  </div>

                  {/* <div className="col-md-6 col-sm-6">
                      <div className="otp-div mt-3">
                        <button
                          className="btn btn-sm btn-success mt-4"
                          onClick={showhidenewdiv}
                          disabled={disabledotp}
                        >
                          Verify OTP
                        </button>
                      </div>
                    </div> */}
                </div>
              </form>
            </div>
            <div
              className="modal-footer d-flex"
              style={{ justifyContent: "center" }}
            >
              <button
                type="submit"
                className="btn btn-md btn-primary w-100"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
       )}
        {showToast && (
        <div
          className="position-fixed top-0 end-0 p-3"
          style={{ zIndex: '9999' }}
        >
          <div
            className="toast show"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <strong className="me-auto">Success</strong>
              <small class="text-muted">just now</small>
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
                  style={{ width: `${progress}%`,height:"20px" }}
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
