import React from "react";
import { useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';



function ResetPassword(){
    const [password,setpassword] = useState();
    const {id, token} = useParams();

    axios.defaults.withCredentials = true;
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault()
  
        axios.post(`http://127.0.0.1:3001/reset_password/${id}/${token}`, {password})
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
          <h4>ResetPassword</h4>
           <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                 <label htmlFor='password'>
                     <strong> New Password</strong>
                 </label>
                 <input
                   type='password'
                   placeholder='Enter Password'
                   autoComplete='off'
                   name='Password'
                   className='form-control rounded-0'
                   onChange={(e) => setpassword(e.target.value)}
                 />
 
              </div>
              
              <button type='submit' className='btn btn-success w-100 rounded-0'>
                 Update
              </button>
              </form>
              
        </div>
    </div>

    )
}

export  default ResetPassword;