import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Features from './pages/Features';
import Plans from './pages/Plans';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Generate from './components/Generate';
import PrivateRoute from './components/PrivateRoute';

const AppLayout = () => {
  const location = useLocation();
  const hideFooter = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* Private Routes */}
        <Route path='/features' element={<PrivateRoute><Features /></PrivateRoute>} />
        <Route path='/plans' element={<PrivateRoute><Plans /></PrivateRoute>} />
        <Route path='/about' element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path='/contact' element={<PrivateRoute><Contact /></PrivateRoute>} />
        <Route path='/generate' element={<PrivateRoute><Generate /></PrivateRoute>} />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <div>
      <Router>
        <AppLayout />
      </Router>
    </div>
  );
};

export default App;
