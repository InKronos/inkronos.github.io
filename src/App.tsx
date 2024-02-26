import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/Navbar/Navbar.component';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutmePage from './pages/aboutme/Aboutme.page';
import Layout from './hocs/Layout/Layout';

function App() {
  return (
    
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/aboutme" element={<AboutmePage/>}>
            

          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
