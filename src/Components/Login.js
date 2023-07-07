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
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="loginheader">
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
    </div>
  );
}
