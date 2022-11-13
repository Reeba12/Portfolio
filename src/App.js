import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar'
import About from './Pages/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from './Pages/Resume/Resume';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contactus';
import ProjectGallery from './Pages/ProjectGallery/ProjectGallery';
import React,{useEffect,useRef} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <AppBar />
        <Routes>
          <Route path='/Portfolio' exact element={<Home />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/aboutus' exact element={<About />} />
          <Route path='/resume' exact element={<Resume />} />
          <Route path='/gallery' exact element={<ProjectGallery />} />
        </Routes>
      </BrowserRouter>
     {/* <Resume/> */}
     {/* <About/> */}
     {/* <Contact/> */}
     {/* <ProjectGallery /> */}
    </div>
  );
}

export default App;
