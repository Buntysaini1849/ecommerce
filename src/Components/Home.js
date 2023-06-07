import React from 'react';
import { HashRouter , Routes, Route} from "react-router-dom";
import Login from './Login';
import Header from './Header';

export default function Home(){
  return (
    <div>
      <div className='right-section'>
      <HashRouter>
        <Routes>
            {/* <Route exact path='/' element={<Login/>}/> */}
            <Route exact path='/' element={<Header />}/>
        </Routes> 
      </HashRouter>
      </div>
      
    </div>
  )
}


