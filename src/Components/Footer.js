import React from 'react'
import { FaFacebookF,FaTwitter,FaInstagram,FaWhatsapp,FaFacebookMessenger,FaGoogle } from "react-icons/fa";
import "../Css/Footer.css";
import logo from "../Images/logo.jpg";

const Footer = () => {
  return (
    <div className='container-fluid'>
     {/* Footer start */}
     <div className="container-fluid p-0">
        <section className="section-padding bg-white border-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="feature-box">
                  <i className="fas fa-truck-fast mdi"></i>
                  <h6>Free & Next Day Delivery</h6>
                  <p>Lorem ipsum dolor sit amet, cons...</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="feature-box">
                <i className="fas fa-shopping-basket mdi"></i>
                  <h6>100% Satisfaction Guarantee</h6>
                  <p>Rorem Ipsum Dolor sit amet, cons...</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="feature-box">
                  <i className="fas fa-tag mdi"></i>
                  <h6>Great Daily Deals Discount</h6>
                  <p>Sorem Ipsum Dolor sit amet, Cons...</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="section-padding footer bg-white border-top">
         <div className="container">
            <div className="row ml-3">
               <div className="col-lg-4 col-md-4">
                  <h4 className="mb-5 mt-0"><a className="logo" href="index.html"><img src={logo} alt="Techiecy" width={150} height={62} className='img-fluid' /></a></h4>
                  <p className="mb-0"><a className="text-dark" href="#"><i className="mdi mdi-phone"></i>Mobile</a></p>
                  <p className="mb-0"><a className="text-dark" href="#"><i className="mdi mdi-cellphone-iphone"></i>cellphone</a></p>
                  <p className="mb-0"><a className="text-success" href="#"><i className="mdi mdi-email"></i>gmail</a></p>
                  <p className="mb-0"><a className="text-primary" href="#"><i className="mdi mdi-web"></i> Website</a></p>
               </div>
               {/* <div className="col-lg-2 col-md-2">
                  <h6 className="mb-4">TOP CITIES </h6>
                  <ul>
                  <li><a href="#">New Delhi</a></li>
                  <li><a href="#">Bengaluru</a></li>
                  <li><a href="#">Hyderabad</a></li>
                  <li><a href="#">Kolkata</a></li>
                  <li><a href="#">Gurugram</a></li>
                  </ul>
               </div>
               <div className="col-lg-2 col-md-2">
                  <h6 className="mb-4">CATEGORIES</h6>
                  <ul>
                  <li><a href="#">Vegetables</a></li>
                  <li><a href="#">Grocery & Staples</a></li>
                  <li><a href="#">Breakfast & Dairy</a></li>
                  <li><a href="#">Soft Drinks</a></li>
                  <li><a href="#">Biscuits & Cookies</a></li>
                  </ul>
               </div> */}
               <div className="col-lg-4 col-md-4">
                  <h6 className="mb-4">ABOUT US</h6>
                  <ul>
                  <li><a href="#">Company Information</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Store Location</a></li>
                  <li><a href="#">Affillate Program</a></li>
                  <li><a href="#">Copyright</a></li>
                  </ul>
               </div>
               <div className="col-lg-4 col-md-4">
                  <h6 className="mb-4">Download App</h6>
                  <div className="app">
                     <a href="#"><img src="img/google.png" alt="" /></a>
                     <a href="#"><img src="img/apple.png" alt="" /></a>
                  </div>
                  <h6 className="mb-3 mt-4">GET IN TOUCH</h6>
                  <div className="footer-social">
                     <a className="btn-facebook" href="#"><FaFacebookF className='mdi'/></a>
                     <a className="btn-twitter" href="#"><FaTwitter className='mdi'/></a>
                     <a className="btn-instagram" href="#"><FaInstagram className='mdi'/></a>
                     <a className="btn-whatsapp" href="#"><FaWhatsapp className='mdi'/></a>
                     <a className="btn-messenger" href="#"><FaFacebookMessenger className='mdi'/></a>
                     <a className="btn-google" href="#"><FaGoogle className='mdi'/></a>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer end */}

      {/* Copyright section start */}
      <section className="pt-4 pb-4 footer-bottom">
         <div className="container">
            <div className="row no-gutters">
               <div className="col-lg-6 col-sm-6">
                  <p className="mt-1 mb-0">&copy; Copyright 2020 <strong className="text-dark">Techiecy</strong>. All Rights Reserved<br />
				  <small className="mt-0 mb-0">Made with <i className="mdi mdi-heart text-danger"></i> by <a href="#" target="_blank" className="text-primary">Techiecy technology pvt. ltd.</a>
                  </small>
				  </p>
               </div>
               <div className="col-lg-6 col-sm-6 text-right">
                  <img alt="cards logo" src="#" />
               </div>
            </div>
         </div>
      </section>

      {/* Copyright section end */}
   
      
    </div>
  )
}

export default Footer
