import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Home from './components/Home';

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
          <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;