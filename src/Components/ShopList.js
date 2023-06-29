import React from 'react'
import Header from './Header' ;
import BestOffers from './BestOffers'
import Footer from './Footer'

const ShopList = () => {
  return (
   
    <div>
      <Header />
        <section className="shop-list section-padding">
         <div className="container">
            <div className="row">
               <div className="col-md-3">
				   <div className="shop-filters">
					  <div id="accordion">
						 <div className="card">
							<div className="card-header" id="headingOne">
							   <h5 className="mb-0">
								  <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
								  Category <span className="mdi mdi-chevron-down float-right"></span>
								  </button>
							   </h5>
							</div>
							<div id="collapseOne" className="collapse show">
							   <div className="card-body card-shop-filters">
								  <form className="form-inline mb-3">
									 <div className="form-group d-flex">
										<input type="text" className="form-control" placeholder="Search By Category" />
										<button type="submit" className="btn btn-secondary btn-lg">search</button>
									 </div>
								  </form>
								  <div className="custom-control custom-checkbox d-flex">
									 <input type="checkbox" className="custom-control-input" id="cb1" />
									 <label className="custom-control-label" for="cb1">All Fruits </label>
								  </div>
								  <div className="custom-control custom-checkbox d-flex">
									 <input type="checkbox" className="custom-control-input" id="cb8" />
									 <label className="custom-control-label" for="cb8">Fresh & Herbs <span className="badge badge-primary">5% OFF</span></label>
								  </div>
								  <div className="custom-control custom-checkbox d-flex">
									 <input type="checkbox" className="custom-control-input" id="cb2" />
									 <label className="custom-control-label" for="cb2">Seasonal Fruits <span className="badge badge-secondary">NEW</span></label>
								  </div>
								  <div className="custom-control custom-checkbox d-flex">
									 <input type="checkbox" className="custom-control-input" id="cb3" />
									 <label className="custom-control-label" for="cb3">Imported Fruits <span className="badge badge-danger">10% OFF</span></label>
								  </div>
								  <div className="custom-control custom-checkbox d-flex">
									 <input type="checkbox" className="custom-control-input" id="cb4" />
									 <label className="custom-control-label" for="cb4">Citrus <span className="badge badge-info">50% OFF</span></label>
								  </div>
								  <div className="custom-control custom-checkbox d-flex">
									 <input type="checkbox" className="custom-control-input" id="cb5" />
									 <label className="custom-control-label" for="cb5">Cut Fresh & Herbs</label>
								  </div>
								  <div className="custom-control custom-checkbox d-flex">
									 <input type="checkbox" className="custom-control-input" id="cb6" />
									 <label className="custom-control-label" for="cb6">Seasonal Fruits <span className="badge badge-success">25% OFF</span></label>
								  </div>
								  <div className="custom-control custom-checkbox d-flex">
									 <input type="checkbox" className="custom-control-input" id="cb7" />
									 <label className="custom-control-label" for="cb7">Fresh & Herbs <span className="badge badge-primary">5% OFF</span></label>
								  </div>
							   </div>
							</div>
						 </div>
						 <div className="card">
							<div className="card-header" id="headingTwo">
							   <h5 className="mb-0">
								  <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
								  Price <span className="mdi mdi-chevron-down float-right"></span>
								  </button>
							   </h5>
							</div>
							<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
							   <div className="card-body card-shop-filters">
								  <div className="custom-control custom-checkbox d-flex">
									 <input type="checkbox" className="custom-control-input" id="1" />
									 <label className="custom-control-label" for="1">₹68 to ₹659 <span className="badge badge-warning">50% OFF</span></label>
								  </div>
								  <div className="custom-control custom-checkbox d-flex">
									 <input type="checkbox" className="custom-control-input" id="2" />
									 <label className="custom-control-label" for="2">₹660 to ₹1014</label>
								  </div>
								  <div className="custom-control custom-checkbox d-flex">
									 <input type="checkbox" className="custom-control-input" id="3" />
									 <label className="custom-control-label" for="3">₹1015 to ₹1679</label>
								  </div>
								  <div className="custom-control custom-checkbox d-flex">
									 <input type="checkbox" className="custom-control-input" id="4" />
									 <label className="custom-control-label" for="4">₹1680 to ₹1856</label>
								  </div>
							   </div>
							</div>
						 </div>
						 <div className="card">
							<div className="card-header" id="headingThree">
							   <h5 className="mb-0">
								  <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
								  Brand <span className="mdi mdi-chevron-down float-right"></span>
								  </button>
							   </h5>
							</div>
							<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
							   <div className="card-body card-shop-filters">
								  <form className="form-inline mb-3 d-flex">
									 <div className="form-group">
										<input type="text" className="form-control" placeholder="Search By Brand" />
									 </div>
									 <button type="submit" className="btn btn-secondary ml-2">GO</button>
								  </form>
								  <div className="custom-control custom-checkbox d-flex">
									 <input type="checkbox" className="custom-control-input" id="b1" />
									 <label className="custom-control-label" for="b1">Imported Fruits <span className="badge badge-warning">50% OFF</span></label>
								  </div>
								  <div className="custom-control custom-checkbox d-flex">
									 <input type="checkbox" className="custom-control-input" id="b2" />
									 <label className="custom-control-label" for="b2">Seasonal Fruits <span className="badge badge-secondary">NEW</span></label>
								  </div>
								  <div className="custom-control custom-checkbox d-flex">
									 <input type="checkbox" className="custom-control-input" id="b3" />
									 <label className="custom-control-label" for="b3">Imported Fruits <span className="badge badge-danger">10% OFF</span></label>
								  </div>
								  <div className="custom-control custom-checkbox d-flex">
									 <input type="checkbox" className="custom-control-input" id="b4" />
									 <label className="custom-control-label" for="b4">Citrus</label>
								  </div>
							   </div>
							</div>
						 </div>
						 <div className="card">
							<div className="card-header" id="headingThree">
							   <h5 className="mb-0">
								  <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
								  Imported Fruits <span className="mdi mdi-chevron-down float-right"></span>
								  </button>
							   </h5>
							</div>
							<div id="collapsefour" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
							   <div className="card-body">
								  <div className="list-group">
									 <a href="#" className="list-group-item list-group-item-action">All Fruits</a>
									 <a href="#" className="list-group-item list-group-item-action">Imported Fruits</a>
									 <a href="#" className="list-group-item list-group-item-action">Seasonal Fruits</a>
									 <a href="#" className="list-group-item list-group-item-action">Citrus</a>
									 <a href="#" className="list-group-item list-group-item-action disabled">Cut Fresh & Herbs</a>
								  </div>
							   </div>
							</div>
						 </div>
					  </div>
				   </div>
				   <div className="left-ad mt-4">
					  <img className="img-fluid" src="http://via.placeholder.com/254x557" alt="" />
				   </div>
				</div>
               <div className="col-md-9">
                  <a href="#"><img className="img-fluid mb-3" src="#" alt="" /></a>
                  <div className="shop-head">
                     <a href="#"><span className="mdi mdi-home"></span> Home</a> <span className="mdi mdi-chevron-right"></span> <a href="#">Fruits & Vegetables</a> <span className="mdi mdi-chevron-right"></span> <a href="#">Fruits</a>
                     <div className="btn-group mt-2" style={{float:"right"}}>
                        <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort by Products &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                           <a className="dropdown-item" href="#">Relevance</a>
                           <a className="dropdown-item" href="#">Price (Low to High)</a>
                           <a className="dropdown-item" href="#">Price (High to Low)</a>
                           <a className="dropdown-item" href="#">Discount (High to Low)</a>
                           <a className="dropdown-item" href="#">Name (A to Z)</a>
                        </div>
                     </div>
                     <h5 className="mb-3">Fruits</h5>
                  </div>
                  <div className="row no-gutters">
                     <div className="col-md-4">
                        <div className="product">
                           <a href="single.html">
                              <div className="product-header">
                                 <span className="badge badge-success">50% OFF</span>
                                 <img className="img-fluid" src="img/item/1.jpg" alt="" />
                                 <span className="veg text-success mdi mdi-circle"></span>
                              </div>
                              <div className="product-body">
                                 <h5>Product Title Here</h5>
                                 <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                              </div>
                              <div className="product-footer d-flex">
                                 <p className="offer-price mb-0">₹450.99 <i className="mdi mdi-tag-outline"></i><br /><span className="regular-price">₹800.99</span></p>
                                 <button type="button" className="btn btn-secondary btn-sm float-right"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
                              </div>
                           </a>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="product">
                           <a href="single.html">
                              <div className="product-header">
                                 <span className="badge badge-success">50% OFF</span>
                                 <img className="img-fluid" src="img/item/2.jpg" alt="" />
                                 <span className="veg text-success mdi mdi-circle"></span>
                              </div>
                              <div className="product-body">
                                 <h5>Product Title Here</h5>
                                 <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                              </div>
                              <div className="product-footer d-flex">
                                 <p className="offer-price mb-0">₹450.99 <i className="mdi mdi-tag-outline"></i><br /><span className="regular-price">₹800.99</span></p>
                                 <button type="button" className="btn btn-secondary btn-sm float-right"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
                              </div>
                           </a>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="product">
                           <a href="single.html">
                              <div className="product-header">
                                 <span className="badge badge-success">50% OFF</span>
                                 <img className="img-fluid" src="img/item/3.jpg" alt="" />
                                 <span className="veg text-success mdi mdi-circle"></span>
                              </div>
                              <div className="product-body">
                                 <h5>Product Title Here</h5>
                                 <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                              </div>
                              <div className="product-footer d-flex">
                                 <p className="offer-price mb-0">₹450.99 <i className="mdi mdi-tag-outline"></i><br /><span className="regular-price">₹800.99</span></p>
                                 <button type="button" className="btn btn-secondary btn-sm float-right"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="row no-gutters">
                     <div className="col-md-4">
                        <div className="product">
                           <a href="single.html">
                              <div className="product-header">
                                 <span className="badge badge-success">50% OFF</span>
                                 <img className="img-fluid" src="img/item/4.jpg" alt="" />
                                 <span className="veg text-success mdi mdi-circle"></span>
                              </div>
                              <div className="product-body">
                                 <h5>Product Title Here</h5>
                                 <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                              </div>
                              <div className="product-footer d-flex">
                                 <p className="offer-price mb-0">₹450.99 <i className="mdi mdi-tag-outline"></i><br /><span className="regular-price">₹800.99</span></p>
                                 <button type="button" className="btn btn-secondary btn-sm float-right"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
                                 
                              </div>
                           </a>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="product">
                           <a href="single.html">
                              <div className="product-header">
                                 <span className="badge badge-success">50% OFF</span>
                                 <img className="img-fluid" src="img/item/5.jpg" alt="" />
                                 <span className="veg text-success mdi mdi-circle"></span>
                              </div>
                              <div className="product-body">
                                 <h5>Product Title Here</h5>
                                 <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                              </div>
                              <div className="product-footer d-flex">
                                 <p className="offer-price mb-0">₹450.99 <i className="mdi mdi-tag-outline"></i><br /><span className="regular-price">₹800.99</span></p>
                                 <button type="button" className="btn btn-secondary btn-sm float-right"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
                              </div>
                           </a>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="product">
                           <a href="single.html">
                              <div className="product-header">
                                 <span className="badge badge-success">50% OFF</span>
                                 <img className="img-fluid" src="img/item/6.jpg" alt="" />
                                 <span className="veg text-success mdi mdi-circle"></span>
                              </div>
                              <div className="product-body">
                                 <h5>Product Title Here</h5>
                                 <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                              </div>
                              <div className="product-footer d-flex">
                                 <p className="offer-price mb-0">₹450.99 <i className="mdi mdi-tag-outline"></i><br /><span className="regular-price">₹800.99</span></p>
                                 <button type="button" className="btn btn-secondary btn-sm float-right"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="row no-gutters">
                     <div className="col-md-4">
                        <div className="product">
                           <a href="single.html">
                              <div className="product-header">
                                 <span className="badge badge-success">50% OFF</span>
                                 <img className="img-fluid" src="img/item/7.jpg" alt="" />
                                 <span className="veg text-success mdi mdi-circle"></span>
                              </div>
                              <div className="product-body">
                                 <h5>Product Title Here</h5>
                                 <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                              </div>
                              <div className="product-footer d-flex">
                                 <p className="offer-price mb-0">₹450.99 <i className="mdi mdi-tag-outline"></i><br /><span className="regular-price">₹800.99</span></p>
                                 <button type="button" className="btn btn-secondary btn-sm float-right"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
                              </div>
                           </a>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="product">
                           <a href="single.html">
                              <div className="product-header">
                                 <span className="badge badge-success">50% OFF</span>
                                 <img className="img-fluid" src="img/item/8.jpg" alt="" />
                                 <span className="veg text-success mdi mdi-circle"></span>
                              </div>
                              <div className="product-body">
                                 <h5>Product Title Here</h5>
                                 <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                              </div>
                              <div className="product-footer d-flex">
                                 <p className="offer-price mb-0">₹450.99 <i className="mdi mdi-tag-outline"></i><br /><span className="regular-price">₹800.99</span></p>
                                 <button type="button" className="btn btn-secondary btn-sm float-right"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
                              </div>
                           </a>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="product">
                           <a href="single.html">
                              <div className="product-header">
                                 <span className="badge badge-success">50% OFF</span>
                                 <img className="img-fluid" src="img/item/9.jpg" alt="" />
                                 <span className="veg text-success mdi mdi-circle"></span>
                              </div>
                              <div className="product-body">
                                 <h5>Product Title Here</h5>
                                 <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                              </div>
                              <div className="product-footer d-flex">
                                 <p className="offer-price mb-0">₹450.99 <i className="mdi mdi-tag-outline"></i><br /><span className="regular-price">₹800.99</span></p>
                                 <button type="button" className="btn btn-secondary btn-sm float-right"><i className="mdi mdi-cart-outline"></i> Add To Cart</button>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
                  <nav>
                     <ul className="pagination justify-content-center mt-4">
                        <li className="page-item disabled">
                           <span className="page-link">Previous</span>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active">
                           <span className="page-link">
                           2
                           <span className="sr-only">(current)</span>
                           </span>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                           <a className="page-link" href="#">Next</a>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
         </div>
      </section>
      <BestOffers />
      <Footer />
    </div>
  )
}

export default ShopList
