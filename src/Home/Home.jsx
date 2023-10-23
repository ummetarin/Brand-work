import React, { useState } from 'react';
import './Home.css'; 
import Navbar from '../Navbar/Navbar';
import Banner from './Banner';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
    const [isLightMode, setIsLightMode] = useState(() => {
        const storedMode = localStorage.getItem('theme');
        return storedMode ? JSON.parse(storedMode) : true;
      });
    
      const toggleMode = () => {
        setIsLightMode((prevMode) => {
          localStorage.setItem('theme', JSON.stringify(!prevMode));
          return !prevMode;
        });
      };
    
      const appClass = isLightMode ? '' : 'dark-mode';
    
    return (
        <div className={`app ${appClass}`}>
      <Navbar />
      <button className="btn bg-black  darken-overlay text-white" onClick={toggleMode}>
        Dark/Light
      </button>
      <Outlet />
      <Footer />
      </div>
    
    );
};

export default Home;
