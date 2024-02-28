import React from 'react';
import logo from './logo.svg';
import NavbarComponent from './components/Navbar/Navbar.component';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import AboutmePage from './pages/aboutme/Aboutme.page';
import Layout from './hocs/Layout/Layout';
import ProjectsPage from './pages/projects/projects.page';

function App() {
  return (
    
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AboutmePage/>}/>
          <Route path="/aboutme" element={<AboutmePage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
