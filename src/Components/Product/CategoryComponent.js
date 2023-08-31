import React from 'react';
import { useDispatch } from "react-redux";
import { setSelectedCategories } from '../../State/Actions/SelectCatAction';
import { setCollapseOpen } from '../../State/Actions/CollapseAction';
import { Link } from 'react-router-dom';

const Category = (item) => {
const dispatch = useDispatch();
const handleCategoryClick = (categoryId) => {
    dispatch(setSelectedCategories(categoryId));
    dispatch(setCollapseOpen(false));
  };
    return (
        <Link to="/shoplist">
        <div className="category-item text-center mb-4" key={item.id}>
        <img
          src={item.image}
          alt="Category"
          className="img-fluid"
          key={item.id}
          onClick={() => handleCategoryClick(item.id)}
        />
        <h6>{item.name}</h6>
      </div>
      </Link>
    )
  }
  
  

  export default Category