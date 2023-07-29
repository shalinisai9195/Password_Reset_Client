import axios from 'axios';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';



function Dashboard(){
   const[suc, setSuc] = useState();
 
   axios.defaults.withCredentials = true;
   const navigate = useNavigate();

   useEffect( () => {
       axios.get('http://127.0.0.1:3001/dashboard')
       .then(res =>{
           if(res.data === "Success"){
              setSuc("Success OK")
           }else{
            navigate('/')
           }
       }).catch(err => console.log(err))
   },[])
   

    return (
        <div>
            <h2>Dashboard</h2>
          <p>{suc}</p> 
          welcome to  Dashboard Page..
        
        </div>
    )

}

export default Dashboard;