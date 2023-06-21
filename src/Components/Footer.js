import React from 'react'
import { FaFacebookF,FaTwitter,FaInstagram,FaWhatsapp,FaFacebookMessenger,FaGoogle } from "react-icons/fa";
import "../Css/Footer.css";
import logo from "../Images/logo.jpg";

const Footer = () => {
  return (
    <div className='container-fluid'>
     {/* Footer start */}
      <section class="section-padding footer bg-white border-top">
         <div class="container">
            <div class="row">
               <div class="col-lg-3 col-md-3">
                  <h4 class="mb-5 mt-0"><a class="logo" href="index.html"><img src={logo} alt="Techiecy" width={150} height={62} className='img-fluid' /></a></h4>
                  <p class="mb-0"><a class="text-dark" href="#"><i class="mdi mdi-phone"></i>Mobile</a></p>
                  <p class="mb-0"><a class="text-dark" href="#"><i class="mdi mdi-cellphone-iphone"></i>cellphone</a></p>
                  <p class="mb-0"><a class="text-success" href="#"><i class="mdi mdi-email"></i>gamil</a></p>
                  <p class="mb-0"><a class="text-primary" href="#"><i class="mdi mdi-web"></i> Website</a></p>
               </div>
               <div class="col-lg-2 col-md-2">
                  <h6 class="mb-4">TOP CITIES </h6>
                  <ul>
                  <li><a href="#">New Delhi</a></li>
                  <li><a href="#">Bengaluru</a></li>
                  <li><a href="#">Hyderabad</a></li>
                  <li><a href="#">Kolkata</a></li>
                  <li><a href="#">Gurugram</a></li>
                  </ul>
               </div>
               <div class="col-lg-2 col-md-2">
                  <h6 class="mb-4">CATEGORIES</h6>
                  <ul>
                  <li><a href="#">Vegetables</a></li>
                  <li><a href="#">Grocery & Staples</a></li>
                  <li><a href="#">Breakfast & Dairy</a></li>
                  <li><a href="#">Soft Drinks</a></li>
                  <li><a href="#">Biscuits & Cookies</a></li>
                  </ul>
               </div>
               <div class="col-lg-2 col-md-2">
                  <h6 class="mb-4">ABOUT US</h6>
                  <ul>
                  <li><a href="#">Company Information</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Store Location</a></li>
                  <li><a href="#">Affillate Program</a></li>
                  <li><a href="#">Copyright</a></li>
                  </ul>
               </div>
               <div class="col-lg-3 col-md-3">
                  <h6 class="mb-4">Download App</h6>
                  <div class="app">
                     <a href="#"><img src="img/google.png" alt="" /></a>
                     <a href="#"><img src="img/apple.png" alt="" /></a>
                  </div>
                  <h6 class="mb-3 mt-4">GET IN TOUCH</h6>
                  <div class="footer-social">
                     <a class="btn-facebook" href="#"><FaFacebookF className='mdi'/></a>
                     <a class="btn-twitter" href="#"><FaTwitter className='mdi'/></a>
                     <a class="btn-instagram" href="#"><FaInstagram className='mdi'/></a>
                     <a class="btn-whatsapp" href="#"><FaWhatsapp className='mdi'/></a>
                     <a class="btn-messenger" href="#"><FaFacebookMessenger className='mdi'/></a>
                     <a class="btn-google" href="#"><FaGoogle className='mdi'/></a>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer end */}

      {/* Copyright section start */}
      <section class="pt-4 pb-4 footer-bottom">
         <div class="container">
            <div class="row no-gutters">
               <div class="col-lg-6 col-sm-6">
                  <p class="mt-1 mb-0">&copy; Copyright 2020 <strong class="text-dark">Techiecy</strong>. All Rights Reserved<br />
				  <small class="mt-0 mb-0">Made with <i class="mdi mdi-heart text-danger"></i> by <a href="#" target="_blank" class="text-primary">Techiecy technology pvt. ltd.</a>
                  </small>
				  </p>
               </div>
               <div class="col-lg-6 col-sm-6 text-right">
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
