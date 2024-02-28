import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/Navbar/Navbar.component';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutmePage from './pages/aboutme/Aboutme.page';
import Layout from './hocs/Layout/Layout';
import ProjectsPage from './pages/projects/projects.page';

function App() {
  return (
    
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AboutmePage/>}/>
          <Route path="/aboutme" element={<AboutmePage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
