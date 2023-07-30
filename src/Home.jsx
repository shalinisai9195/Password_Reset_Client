import React from "react";
import { Link } from "react-router-dom";



function Home(){

    return (
        <div className='bg-light vh-100'>
        <div className='d-md-flex justify-content-md-center pt-4 gap-4 ' >
            <h3  className='fst-italic fw-semibold'>Welcome to  Home Page! </h3> 
              <div className='d-grid gap-3 d-md-flex'>
                <Link to='/register' type="button" className="btn btn-outline-info">Register</Link>
        
                <Link to='/login' type="button" className="btn btn-outline-secondary">Login</Link>
               </div>
       
        
        </div>
        </div>
    )

}

export default Home;