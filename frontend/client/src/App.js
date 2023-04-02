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

const App = () => {

  // useEffect(() => {
  //   fetch('/api')
  //     .then((res) => { return res.json() })
  //     .then((data) => { console.log(data) })
  // }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/forgot-password" element={<Forgot_password />}>
          <Route path='otp' element = {<OTP/>}/>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;