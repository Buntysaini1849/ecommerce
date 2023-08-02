import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";

import Footer from "./Footer";
import {
  CATEGORYLIST_API,
  INGREDIENT_API,
  PRODUCTCATWISE_API,
  REMEDIES_API,
} from "./apiUrls";

import "../Css/ShopList.css";

const ShopList = () => {
  const [category, setCategory] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [products, setProducts] = useState([]);
  const [autoClicked, setAutoClicked] = useState(false);
  const [IngredData, setIngredData] = useState([]);
  const [RemediesData, setRemediesData] = useState([]);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.login.auth);
  const selectedCategoryByID = useSelector((state) => state.catId.selectedCategoryId);
  
  const collapseOpen = useSelector((state) => state.collapse.collapseOpen);

  const fetchCategory = async () => {
    try {
      const response = await fetch(CATEGORYLIST_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
        body: JSON.stringify({
          type: "view",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setCategory(data.data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  useEffect(() => {
    // Fetch products based on the selected category
    const fetchProducts = async () => {
      if (selectedCategoryId && selectedCategoryByID) {
    
        try {
          const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': auth
            },
            body: JSON.stringify({ type: 'view', cat_id: [selectedCategoryId || selectedCategoryByID] })
          };

          const response = await fetch(PRODUCTCATWISE_API, requestOptions);
          const data = await response.json();
          setProducts(data.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }
    };

    fetchProducts();
  }, [selectedCategoryId,selectedCategoryByID]);
  

  useEffect(() => {
    async function fetchIngredData() {
      const response = await fetch(INGREDIENT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "view" }),
      });
      const responseData = await response.json();

      if (
        responseData &&
        responseData.data &&
        Array.isArray(responseData.data) &&
        responseData.data.length > 0
      ) {
        for (let i = 0; i < responseData.data.length; i++) {
          setIngredData(responseData.data);
          // console.log(data);
        }
      } else {
        console.error("Error: Invalid data structure");
      }
    }
    fetchIngredData();
  }, []);

  useEffect(() => {
    async function fetchRemediesData() {
      const response = await fetch(REMEDIES_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "view" }),
      });
      const responseData = await response.json();

      if (
        responseData &&
        responseData.data &&
        Array.isArray(responseData.data) &&
        responseData.data.length > 0
      ) {
        for (let i = 0; i < responseData.data.length; i++) {
          setRemediesData(responseData.data);
          // console.log(data);
        }
      } else {
        console.error("Error: Invalid data structure");
      }
    }
    fetchRemediesData();
  }, []);

  
  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  useEffect(() => {
    if (selectedCategoryByID && !autoClicked) {
      // Automatically click the checkbox once if it's selected and not already auto-clicked
      setAutoClicked(true);
    }
    else{
      setAutoClicked(true);
      setSelectedCategoryId(selectedCategoryByID);
    }
  }, [selectedCategoryByID, autoClicked]);

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
                        <button
                          className="btn btn-link"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Category{" "}
                          <span className="mdi mdi-chevron-down float-right"></span>
                        </button>
                      </h5>
                    </div>
                    <div id="collapseOne" className={`collapse ${collapseOpen ? 'show' : 'collapse'}`}>
                      <div className="card-body card-shop-filters">
                        {/* <form className="form-inline mb-3">
                          <div className="form-group d-flex">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search By Category"
                            />
                            <button
                              type="submit"
                              className="btn btn-secondary btn-lg"
                            >
                              search
                            </button>
                          </div>
                        </form> */}
                        {Array.isArray(category) &&
                          category.map((cat) => (
                            <div
                              className="custom-control custom-checkbox d-flex"
                              key={cat.id}

                            >
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                checked={selectedCategoryId === cat.id || selectedCategoryByID === cat.id}
                                onChange={() => handleCategoryChange(cat.id)}
                                
                                id={cat.id}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor={cat.id}
                              >
                                {cat.name}
                              </label>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Price{" "}
                          <span className="mdi mdi-chevron-down float-right"></span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className={`collapse ${collapseOpen ? 'show' : 'collapse'}`}
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body card-shop-filters">
                        <div className="custom-control custom-checkbox d-flex">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="1"
                          />
                          <label className="custom-control-label" for="1">
                            ₹68 to ₹659{" "}
                            <span className="badge badge-warning">50% OFF</span>
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="2"
                          />
                          <label className="custom-control-label" for="2">
                            ₹660 to ₹1014
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="3"
                          />
                          <label className="custom-control-label" for="3">
                            ₹1015 to ₹1679
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="4"
                          />
                          <label className="custom-control-label" for="4">
                            ₹1680 to ₹1856
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Ingredients{" "}
                          <span className="mdi mdi-chevron-down float-right"></span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className={`collapse ${collapseOpen ? 'collapse' : 'show'}`}
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body card-shop-filters">
                       
                        {Array.isArray(IngredData) &&
                          IngredData.map((ingred) => (
                        <div className="custom-control custom-checkbox d-flex" key={ingred.id}>
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id={ingred.id}
                          />
                          <label className="custom-control-label" for="b1">
                            {ingred.name}
                           
                          </label>
                        </div>
                          ))}
                        
                        
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Remedies{" "}
                          <span className="mdi mdi-chevron-down float-right"></span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseFour"
                      className={`collapse ${collapseOpen ? 'collapse' : 'show'}`}
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body card-shop-filters">
                       
                        {Array.isArray(RemediesData) &&
                          RemediesData.map((remeData) => (
                        <div className="custom-control custom-checkbox d-flex" key={remeData.id}>
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id={remeData.id}
                          />
                          <label className="custom-control-label" for="b1">
                            {remeData.name}
                           
                          </label>
                        </div>
                          ))}
                        
                        
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
              <div className="left-ad mt-4">
                <img
                  className="img-fluid"
                  src="http://via.placeholder.com/254x557"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-9">
              <a href="#">
                <img className="img-fluid mb-3" src="#" alt="" />
              </a>
              <div className="shop-head">
                <a href="#">
                  <span className="mdi mdi-home"></span> Home
                </a>{" "}
                <span className="mdi mdi-chevron-right"></span>{" "}
                {/* <a href="#">Fruits & Vegetables</a>{" "} */}
                <span className="mdi mdi-chevron-right"></span>{" "}
                {/* <a href="#">Fruits</a> */}
                <div className="btn-group mt-2" style={{ float: "right" }}>
                  <button
                    type="button"
                    className="btn btn-dark dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sort by Products &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">
                      Relevance
                    </a>
                    <a className="dropdown-item" href="#">
                      Price (Low to High)
                    </a>
                    <a className="dropdown-item" href="#">
                      Price (High to Low)
                    </a>
                    <a className="dropdown-item" href="#">
                      Discount (High to Low)
                    </a>
                    <a className="dropdown-item" href="#">
                      Name (A to Z)
                    </a>
                  </div>
                </div>
                {/* <h5 className="mb-3">Fruits</h5> */}
              </div>
              {products.length === 0 ? (
                <p>No products to display for the selected category.</p>
              ) : (
                <div className="row no-gutters mt-5">
                  {Array.isArray(products) &&
                    products.map((product) => (
                      <div className="col-md-4" key={product.id}>
                        <div className="product">
                          <a href="single.html">
                            <div className="product-header">
                              <span className="badge badge-success">
                                50% OFF
                              </span>
                              <img
                                className="img-fluid"
                                src={product.img}
                                alt=""
                              />
                              <span className="veg text-success mdi mdi-circle"></span>
                            </div>
                            <div className="product-body">
                              <h5>{product.name}</h5>
                              <h6>
                                <strong>
                                  <span className="mdi mdi-approval"></span>{" "}
                                  Available in
                                </strong>{" "}
                                - 500 gm
                              </h6>
                            </div>
                            <div className="product-footer d-flex">
                              <p className="offer-price mb-0">
                                ₹450.99 <i className="mdi mdi-tag-outline"></i>
                                <br />
                                <span className="regular-price">₹800.99</span>
                              </p>
                              <button
                                type="button"
                                className="btn btn-secondary btn-sm float-right"
                              >
                                <i className="mdi mdi-cart-outline"></i> Add To
                                Cart
                              </button>
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                </div>
              )}

              <nav>
                <ul className="pagination justify-content-center mt-4">
                  <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <span className="page-link">
                      2<span className="sr-only">(current)</span>
                    </span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ShopList;
