import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from './Banner';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {

  

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;
