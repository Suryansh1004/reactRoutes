import React from 'react';
import './App.css';
import {  BrowserRouter as Router, Routes, Route}
from 'react-router-dom'; 
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blog';
import SignUp from './pages/signup';
import Contact from './pages/contact';
 
 
function App() { 
  return ( 
    <Router>
{/* import { Link } from 'react-router-dom'; 
<Link to="/about">
    Home
</Link> */}

      <Routes>
          <Route exact path='/'   element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
        {/* <Navbar /> */}
      </Router>
  );
  }

export default App;
