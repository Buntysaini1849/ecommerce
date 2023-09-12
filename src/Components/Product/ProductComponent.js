import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbTag, TbTags } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { WISHLIST_API } from "../apiUrls";
import { setSelectedProduct } from "../../State/Actions/ProductViewAction";
import nopro from "../../Images/noproduct.jpg";

const Product = (proditem) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const [selectedItem, setselectedItem] = useState(null);
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const auth = useSelector((state) => state.login.auth);

  const selectedProduct = useSelector(
    (state) => state.proditem.selectedProduct
  );

  const handleAddToWishlist = (productId) => {
    if (auth) {
      const payloads = {
        type: "update",
        product_id: productId,
      };

      fetch(WISHLIST_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
        body: JSON.stringify(payloads),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(productId);
        })
        .catch((error) => {
          // Handle error
          console.error("Error:", error);
        });
    } else {
      // Handle unauthorized access
      console.log("User is not authenticated.");
    }
  };



  const toggleLike = () => {
    if (isAuthenticated) {
      
      setIsLiked(!isLiked);

      handleAddToWishlist(proditem.id);
    }
  };


  const handleProductView = (proditem) => {
    dispatch(setSelectedProduct(proditem));
    // console.log("checking proditems",proditem.items);
  };

  useEffect(() => {
    if (proditem.items.length > 0) {
      setselectedItem(proditem.items[0]);
    }
  }, [proditem]);


  const handleSelectChange = (event) => {

    const selectedOptionString = event.target.value;
    const selectedOptionData = JSON.parse(selectedOptionString);
    setselectedItem(selectedOptionData);

    console.log("this is selected item",selectedOptionString);
  };

  return (
    <div>
      <div className="items">
        <div className="product p-0 shadow-sm" style={{ width: "250px" }}>
          {isAuthenticated ? (
            <>
              <div className="product-header">
                {/* <span className="badge badge-success">50% OFF</span> */}
                {selectedItem === null ? (
                  proditem.image === null ? (
                    <img src={nopro} className="img-fluid" alt="No Product" />
                  ) : (
                    <img src={proditem.image} className="img-fluid" />
                  )
                ) : (
                  <img src={selectedItem.image} className="img-fluid" />
                )}

                {isAuthenticated ? (
                  <span
                    className="veg text-success mdi mdi-circle"
                    key={proditem.id}
                  >
                    {isLiked ? (
                      <AiFillHeart
                        style={{ fontSize: "26px", cursor: "pointer" }}
                        onClick={toggleLike}
                      />
                    ) : (
                      <AiOutlineHeart
                        style={{ fontSize: "26px", cursor: "pointer" }}
                        onClick={toggleLike}
                        className="heart-icon"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Add to wishlist"
                      />
                    )}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="product-body">
                <h5>{proditem.name}</h5>
            
                <h6 className="d-flex">
                  <strong>
                    <FcApproval /> Available in
                  </strong>{" "}
                  -{" "}
                  <span>
                    {proditem && proditem.items && proditem.items.length > 1 ? (
                      <div className="dropdown">
                        <select
                          style={{ border: "0px" }}
                          onChange={handleSelectChange}
                        >
                          {Array.isArray(proditem.items) &&
                            proditem.items.map((item) => (
                              <option
                                key={item.id}
                                value={JSON.stringify(item)}
                              >
                                {item.unit}
                              </option>
                            ))}
                        </select>
                      </div>
                    ) : (
                      <p>{proditem.unit}</p>
                    )}
                  </span>
                </h6>
              </div>

              <div className="product-footer d-flex">
                {selectedItem !== null && (
                  <p className="offer-price mb-0">
                    ₹ {selectedItem.sale_price}{" "}
                    <TbTags style={{ fontSize: "16px" }} />
                    <br />
                    <span className="regular-price">
                      ₹ {selectedItem.mrp_price}
                    </span>
                  </p>
                )}

                <Link to="/productview">
                  <button
                    className="btn  btn-sm float-right addtocart-btn"
                    onClick={() => handleProductView(proditem)}
                  >
                    <MdOutlineShoppingCart /> Add To Cart
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="product-header">
                {selectedItem === null ? (
                  proditem.image === null ? (
                    <img src={nopro} className="img-fluid" alt="No Product" />
                  ) : (
                    <img src={proditem.image} className="img-fluid" />
                  )
                ) : (
                  <img src={selectedItem.image} className="img-fluid" />
                )}

                {isAuthenticated ? (
                  <span className="veg text-success mdi mdi-circle">
                    <AiOutlineHeart style={{ fontSize: "20px" }} />
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="product-body">
                <h5>{proditem.name}</h5>

                <h6 className="d-flex">
                  <strong>
                    <FcApproval /> Available in
                  </strong>{" "}
                  -{" "}
                  <span>
                    {proditem && proditem.items && proditem.items.length > 1 ? (
                      <div className="dropdown">
                        <select
                          style={{ border: "0px" }}
                          onChange={handleSelectChange}
                        >
                          {Array.isArray(proditem.items) &&
                            proditem.items.map((item) => (
                              <option
                                key={item.id}
                                value={JSON.stringify(item)}
                              >
                                {item.unit}
                              </option>
                            ))}
                        </select>
                      </div>
                    ) : (
                      <p>{proditem.unit}</p>
                    )}
                  </span>
                </h6>
              </div>

              <div className="product-footer d-flex">
                {selectedItem !== null && (
                  <p className="offer-price mb-0">
                    ₹ {selectedItem.sale_price}{" "}
                    <TbTags style={{ fontSize: "16px" }} />
                    <br />
                    <span className="regular-price">
                      ₹ {selectedItem.mrp_price}
                    </span>
                  </p>
                )}

                <button
                  className="btn  btn-sm float-right addtocart-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <MdOutlineShoppingCart /> Add To Cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
