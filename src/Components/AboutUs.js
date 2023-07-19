import React, { useState, useEffect }  from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import {MdShoppingBag,MdRefresh,MdShoppingBasket} from "react-icons/md";
import {FaTruckMoving,FaTag} from "react-icons/fa";
import {GiEarthAsiaOceania} from "react-icons/gi";
import { ABOUT_CONTACT_API } from './apiUrls';


const AboutUs = () => {
   const [data, setData] = useState([]);



   useEffect(() => {
     async function fetchData() {
       try {
         const response = await fetch(ABOUT_CONTACT_API, {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({ "type": "about" }),
         });
         const responseData = await response.json();
         console.log(responseData);

         const dataArray = Array.isArray(responseData.data) ? responseData : [responseData.data];
   
         setData(dataArray);
         console.log('for checking data',dataArray); 
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     }
   
     fetchData();
   }, []);

  return (
    <div>
        <Header />
       <section className="section-padding bg-dark inner-header">
         <div className="container">
            <div className="row">
               <div className="col-md-12 text-center">
                  <h1 className="mt-0 mb-3 text-white">About Us</h1>
                  <div className="breadcrumbs">
                     <p className="mb-0 text-white"><Link to="/" className="text-white">Home</Link> /  <span className="text-success">About Us</span></p>
                  </div>
               </div>
            </div>
         </div>
      </section>
 
      <section className="section-padding bg-white">
         <div className="container">
            <div className="row">
               <div className="pl-4 col-lg-5 col-md-5 pr-4">
                  <img className="rounded img-fluid" src="img/about.jpg" alt="Card image cap" />
               </div>
               {data && data.length > 0 ? (
                data.map((item) => (
               <div className="col-lg-6 col-md-6 pl-5 pr-5">
                  {item.about}
               </div>
               ))
               ) : (
                 <div>No data available</div>
               )}
 
            </div>
         </div>
      </section>

      <section className="section-padding">
         <div className="section-title text-center mb-5">
            <h2>What We Provide?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-lg-4 col-md-4">
                  <div className="mt-4 mb-4"><MdShoppingBag className="text-success" style={{fontSize:"48px"}}/></div>
                  <h5 className="mt-3 mb-3 text-secondary">Best Prices & Offers</h5>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
               </div>
               <div className="col-lg-4 col-md-4">
                  <div className="mt-4 mb-4"><GiEarthAsiaOceania className="text-success" style={{fontSize:"48px"}}/></div>
                  <h5 className="mb-3 text-secondary">Wide Assortment</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve.</p>
               </div>
               <div className="col-lg-4 col-md-4">
                  <div className="mt-4 mb-4"><MdRefresh className="text-success" style={{fontSize:"48px"}}/></div>
                  <h5 className="mt-3 mb-3 text-secondary">Easy Returns</h5>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4 col-md-4">
                  <div className="mt-4 mb-4"><FaTruckMoving className="text-success" style={{fontSize:"48px"}}/></div>
                  <h5 className="mb-3 text-secondary">Free & Next Day Delivery</h5>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC.</p>
               </div>
               <div className="col-lg-4 col-md-4">
                  <div className="mt-4 mb-4"><MdShoppingBasket className="text-success"style={{fontSize:"48px"}} /></div>
                  <h5 className="mt-3 mb-3 text-secondary">100% Satisfaction Guarantee</h5>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
               </div>
               <div className="col-lg-4 col-md-4">
                  <div className="mt-4 mb-4"><FaTag className="text-success" style={{fontSize:"48px"}}/></div>
                  <h5 className="mt-3 mb-3 text-secondary">Great Daily Deals Discount</h5>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
               </div>
            </div>
         </div>
      </section>
 
      {/* <section className="section-padding bg-white">
         <div className="section-title text-center mb-5">
            <h2>Our Team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-lg-4 col-md-4">
                  <div className="team-card text-center">
                     <img className="img-fluid mb-4" src="img/user/1.jpg" alt="" />
                     <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                     <h6 className="mb-0 text-success">- Stave Martin</h6>
                     <small>Manager</small>
                  </div>
               </div>
               <div className="col-lg-4 col-md-4">
                  <div className="team-card text-center">
                     <img className="img-fluid mb-4" src="img/user/2.jpg" alt="" />
                     <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                     <h6 className="mb-0 text-success">- Mark Smith</h6>
                     <small>Designer</small>
                  </div>
               </div>
               <div className="col-lg-4 col-md-4">
                  <div className="team-card text-center">
                     <img className="img-fluid mb-4" src="img/user/3.jpg" alt="" />
                     <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                     <h6 className="mb-0 text-success">- Ryan Printz</h6>
                     <small>Marketing</small>
                  </div>
               </div>
            </div>
         </div>
      </section> */}
      <Footer />
    </div>
  )
}

export default AboutUs
