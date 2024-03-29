import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import { ABOUT_CONTACT_API, QUERY_API } from "./apiUrls";
import { FaFacebookF,FaTwitter,FaInstagram,FaWhatsapp,FaFacebookMessenger,FaGoogle } from "react-icons/fa";
import { useSelector } from "react-redux";

const ContactUs = () => {
  const [data, setData] = useState([]);
  const [customer_name, setCustomerName] = useState([]);
  const [customer_mail, setCustomerMail] = useState([]);
  const [customer_mobile, setCustomerMobile] = useState([]);
  const [description, setDescription] = useState([]);

  const auth = useSelector((state) => state.login.auth);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(ABOUT_CONTACT_API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ "type": "contact" }),
        });
        const responseData = await response.json();
        // console.log(responseData);
  
        const dataArray = Array.isArray(responseData.data) ? responseData : [responseData.data];
  
        setData(dataArray);
        // console.log('for checking data',dataArray); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    fetchData();
  }, []);
  
  const handleQuerySubmit = (e) => {
    e.preventDefault();
    if(customer_name && customer_mobile && customer_mail && description){
      const payload = {
        "name"        : customer_name,
        "mobile"      : customer_mobile,
        "mail"        : customer_mail,
        "description" : description,

      };

      fetch(QUERY_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
         
          alert(data.message);
          setCustomerName("");
          setCustomerMobile("");
          setCustomerMail("");
          setDescription("");
        })
        .catch((error) => {
          // Handle error
          console.error("Error:", error);
        });
      }else{
        alert("Please fill in all the required fields.");
      }

  };



  return (
    <div>
      <Header />
      <section className="section-padding bg-dark inner-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="mt-0 mb-3 text-white">Contact Us</h1>
              <div className="breadcrumbs">
                <p className="mb-0 text-white">
                  <Link to="/" className="text-white">
                    Home
                  </Link>{" "}
                  / <span className="text-success">Contact Us</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid">
        <section className="section-padding container">
          <div className="container">
            <div className="row">
              {data && data.length > 0 ? (
                data.map((item) => (
                  <div className="col-lg-4 col-md-4">
                    <h3 className="mt-1 mb-5">Get In Touch</h3>
                    <h6 className="text-dark">
                      <i className="mdi mdi-home-map-marker"></i> Address:
                    </h6>
                    <p>{item.address}</p>
                    <h6 className="text-dark">
                      <i className="mdi mdi-deskphone"></i> Mobile:
                    </h6>
                    <p>+91 {item.telephone}</p>
                    <h6 className="text-dark">
                      <i className="mdi mdi-email"></i> Email:
                    </h6>
                    <p>{item.mail}</p>
                    <h6 className="text-dark">
                      <i className="mdi mdi-link"></i> Website:
                    </h6>
                    <p>{item.website}</p>

                    <div className="footer-social">
                     <a className="btn-facebook" href={item.facebook}><FaFacebookF className='mdi'/></a>
                     <a className="btn-twitter" href={item.twitter}><FaTwitter className='mdi'/></a>
                     <a className="btn-instagram" href={item.instagram}><FaInstagram className='mdi'/></a>
         
                  </div>
                  </div>
                  
                ))
              ) : (
                <div className="container text-center">Please wait...</div>
              )}

              <div className="col-lg-8 col-md-8">
                <div className="card">
                  <div className="card-body">
                    <iframe
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=gurugram+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      width="100%"
                      height="450"
                      frameborder="0"
                      style={{ border: "0px" }}
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="section-padding  bg-white mb-4">
        <div className="container p-4">
          <div className="container" style={{width:"80%"}}> 
          <div className="row">
            <div className="col-lg-12 col-md-12 mt-1 section-title text-left mb-4">
            
              <h2>Contact Us</h2>
            
          
            <form
              className="col-lg-12 col-md-12 mt-5"
              name="sentMessage"
              id="contactForm"
            >
              <div className="control-group form-group">
                <div className="controls">
                  <label>
                    Full Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control"
                    value={customer_name}
                    id="name"
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                  />
                  <p className="help-block"></p>
                </div>
              </div>
              <div className="row mt-2">
                <div className="control-group form-group col-md-6 mt-2">
                  <label>
                    Phone Number <span className="text-danger">*</span>
                  </label>
                  <div className="controls">
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="form-control"
                      id="phone"
                      value={customer_mobile}
                      onChange={(e) => setCustomerMobile(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="control-group form-group col-md-6 mt-2">
                  <div className="controls">
                    <label>
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-control"
                      value={customer_mail}
                      id="email"
                      onChange={(e) => setCustomerMail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="control-group form-group mt-3">
                <div className="controls">
                  <label>
                    Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    rows="4"
                    cols="100"
                    placeholder="Message"
                    className="form-control"
                    maxlength="1000"
                    value={description}
                    id="message"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>
              </div>
              <div id="success"></div>

              <button
                type="submit"
                className="btn btn-success mt-2"
                style={{ background: "#3bb77e" }}
                onClick={handleQuerySubmit}
              >
                Send Message
              </button>
            </form>
            </div>
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
