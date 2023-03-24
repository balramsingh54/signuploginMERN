import React, { useEffect } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';

const App = () => {

  // useEffect(() => {
  //   fetch('/api')
  //     .then((res) => { return res.json() })
  //     .then((data) => { console.log(data) })
  // }, [])

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Signup/>} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;