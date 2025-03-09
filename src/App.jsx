import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion';

import Landing from './Components/Landing';
import ProductPage from './Components/ProductPage';
import Article from './Components/Article';
import About from './Components/about'
import Login from './Components/login';
import Shop from './Components/Shop'
import { AuthProvider } from './context/AuthContext';

// AnimationRoutes component to handle route transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/About-us" element={<About/>}/>
        <Route path="/Article" element={<Article/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/Product-Page" element={<ProductPage/>}/>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
