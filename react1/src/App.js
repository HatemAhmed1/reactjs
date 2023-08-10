// import logo from './logo.svg';

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout.js';
import Home from './Components/Home.js';
import Resume from './Components/Resume.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path="Resume" element={<Resume />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>        
    );
}

export default App;