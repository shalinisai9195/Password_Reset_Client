import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Dashboard from './Dashboard';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';


function App() {
   return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/register' element={<Signup/>} />   
          <Route path='/login' element={<Login/>} /> 
          <Route path='/dashboard' element={<Dashboard/>} />  
          <Route path='/forgot-password' element={<ForgotPassword/>} /> 
          <Route path='/reset_password/:id/:token' element={<ResetPassword/>} /> 
      </Routes>
       
  </BrowserRouter>
    
  )
}

export default App
