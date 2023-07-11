import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    return (
        <div>
            <Header />
            <section className="section-padding bg-dark inner-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="mt-0 mb-3 text-white">Contact Us</h1>
                            <div className="breadcrumbs">
                                <p className="mb-0 text-white"><Link to="/" className="text-white">Home</Link>  /  <span className="text-success">Contact Us</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <div className='container-fluid'>
            <section className="section-padding container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <h3 className="mt-1 mb-5">Get In Touch</h3>
                            <h6 className="text-dark"><i className="mdi mdi-home-map-marker"></i> Address :</h6>
                            <p>86 Petersham town, New South wales Waedll Steet, Australia PA 6550</p>
                            <h6 className="text-dark"><i className="mdi mdi-phone"></i> Phone :</h6>
                            <p>+91 12345-67890, (+91) 123 456 7890</p>
                            <h6 className="text-dark"><i className="mdi mdi-deskphone"></i> Mobile :</h6>
                            <p>(+20) 220 145 6589, +91 12345-67890</p>
                            <h6 className="text-dark"><i className="mdi mdi-email"></i> Email :</h6>
                            <p>iamosahan@gmail.com, info@gmail.com</p>
                            <h6 className="text-dark"><i className="mdi mdi-link"></i> Website :</h6>
                            <p>www.askbootstrap.com</p>
                            <div className="footer-social"><span>Follow : </span>
                                <a href="#"><i className="mdi mdi-facebook"></i></a>
                                <a href="#"><i className="mdi mdi-twitter"></i></a>
                                <a href="#"><i className="mdi mdi-instagram"></i></a>
                                <a href="#"><i className="mdi mdi-google"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    <iframe src="https://maps.google.com/maps?q=New Delhi&t=&z=10&ie=UTF8&iwloc=&output=embed" width="100%" height="450" frameborder="0" style={{ border: "0px" }} allowfullscreen></iframe>
                                         </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </div>
            <section className="section-padding  bg-white mb-4">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 mt-1 section-title text-left mb-4">
                            <h2>Contact Us</h2>
                        </div>
                        <form className="col-lg-12 col-md-12 mt-2" name="sentMessage" id="contactForm" >
                            <div className="control-group form-group">
                                <div className="controls">
                                    <label>Full Name <span className="text-danger">*</span></label>
                                    <input type="text" placeholder="Full Name" className="form-control" id="name" />
                                    <p className="help-block"></p>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="control-group form-group col-md-6 mt-2">
                                    <label>Phone Number <span className="text-danger">*</span></label>
                                    <div className="controls">
                                        <input type="tel" placeholder="Phone Number" className="form-control" id="phone" />
                                    </div>
                                </div>
                                <div className="control-group form-group col-md-6 mt-2">
                                    <div className="controls">
                                        <label>Email Address <span className="text-danger">*</span></label>
                                        <input type="email" placeholder="Email Address" className="form-control" id="email" />
                                    </div>
                                </div>
                            </div>
                            <div className="control-group form-group mt-2">
                                <div className="controls">
                                    <label>Message <span className="text-danger">*</span></label>
                                    <textarea rows="4" cols="100" placeholder="Message" className="form-control" id="message" ></textarea>
                                </div>
                            </div>
                            <div id="success"></div>

                            <button type="submit" className="btn btn-success mt-2" style={{background:"#3bb77e"}}>Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    )
}

export default ContactUs
