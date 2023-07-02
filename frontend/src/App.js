<<<<<<< HEAD
import React from "react";
import Home from "./pages/Home/Home";
import './App.css';
import Learning from './pages/Learning/Learning';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewCourses from './studentComponents/viewCourses';
import Login from './studentComponents/login';
import VLogin from './studentComponents/vlogin';
// import ViewCourses from './studentComponents/viewCourses';
// import Login from './studentComponents/login';

import Display from "./pages/displayData/display";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element= {<Home/>}/>
        <Route path="/learning" element={<Learning />} />
        <Route path="/courses" element={<ViewCourses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/display" element={<Display/>} />
        <Route path="/courses" element={<ViewCourses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vlogin" element={<VLogin />} />
      </Routes>
    </Router>
    
  );
}

export default App;
=======
import React from "react";
import Home from "./pages/Home/Home";
import './App.css';
import Learning from './pages/Learning/Learning';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewCourses from './studentComponents/viewCourses';
import Login from './studentComponents/login';
import VLogin from './studentComponents/vlogin';
// import ViewCourses from './studentComponents/viewCourses';
// import Login from './studentComponents/login';

import Display from "./pages/displayData/display";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element= {<Home/>}/>
        <Route path="/learning" element={<Learning />} />
        <Route path="/courses" element={<ViewCourses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/display" element={<Display/>} />
        <Route path="/courses" element={<ViewCourses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vlogin" element={<VLogin />} />
      </Routes>
    </Router>
    
  );
}

export default App;
>>>>>>> 7b39565f18fe5334a9ea052437f7ff8b24ec3069
