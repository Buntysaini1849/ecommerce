import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { fetchCartData } from '../State/Actions/CartActions';


const CartProducts = () => {
   const dispatch = useDispatch();
   const cartItems = useSelector((state) => state.cart.cartItems);





   useEffect(() => {
      dispatch(fetchCartData());
    }, [dispatch]);
  
  return (
    <div>
       
        <div className="cart-items p-1">
       
         <div className="container">
         
          <div className="row">
            <div className="col-12 col-md-12 col-sm-12 col-lg-12">
            {Array.isArray(cartItems) &&
                cartItems.map((item) => (
               <div className="row p-1" key={item.id}>
                 
                  <>
                  <div className="col-sm-4 col-md-4 col-lg-4 mt-3">
                     <img src={item.image} className="img-fluid cart-img p-2">
                     </img> 
                      <h4>{item.name}</h4>
                  </div>
                
                  <div className="col-sm-6 col-md-6 col-lg-6 mt-3 text-center" >
                        <h2>{item.id}</h2><br/>
                        <h2>{item.hsn}</h2><br/>
                        <h2>{item.gst}</h2><br/>

                  </div>

                  <div className="col-sm-2 col-md-2 col-lg-2 ">

                  </div>
                  </>
                   
                   
               </div>
            ))}
           
               
            </div>
          </div>
          
         </div>  
        
       </div>
         
      
    </div>
  )
}

export default CartProducts
