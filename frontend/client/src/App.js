import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Classes from './components/Classes';
import Forgot_password from './components/Forgot_password';
import PageNotFound from './components/PageNotFound';
import OTP from './components/OTP';
import AddNewUser from './components/AddNewUser';
import FeeSubmit from './components/FeeSubmit';
import Toastifi from './components/Toastifi';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/addstudent" element={<AddNewUser />} />
        <Route path="/fee-submit" element={<FeeSubmit />} />
        <Route path="/forgot-password" element={<Forgot_password />}>
          <Route path="otp" element={<OTP />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="toastifi" element={<Toastifi />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;


