import React from "react";
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function ForgotPassword(){
    const [email,setemail] = useState();

    axios.defaults.withCredentials = true;
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault()
  
        // axios.post('http://127.0.0.1:3001/forgot-password', {email})
        axios.post('https://authentication-reset-pwd.onrender.com/forgot-password', {email})
        .then(result =>{
           if(result.data.Status === 'Success'){
                 navigate('/login')
                
              }
          })
        .catch(err => console.log(err))
    }
  
    return (

        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
          <h4>ForgotPassword</h4>
           <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                 <label htmlFor='email'>
                     <strong>Email</strong>
                 </label>
                 <input
                   type='email'
                   placeholder='Enter Email'
                   autoComplete='off'
                   name='email'
                   className='form-control rounded-0'
                   onChange={(e) => setemail(e.target.value)}
                 />
 
              </div>
              
              <button type='submit' className='btn btn-success w-100 rounded-0'>
                 Send
              </button>
              </form>
              
        </div>
    </div>
 )
}

export  default ForgotPassword;