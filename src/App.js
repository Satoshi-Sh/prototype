import './App.css';
import Nav  from './components/nav/Nav';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login'
import Signup from './pages/signup/Singup';

function App() {
  return (
    <div className="App">
      <Router>
       <Nav sticky='top' />
       <Routes>
          <Route exact path='/' element= {<Homepage />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/signup' element = {<Signup />} />
       </Routes>
       </Router>
    </div>
  );
}

export default App;
