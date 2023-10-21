import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from './Banner';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Section3 from './Section3';

const Home = () => {

  

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Section3></Section3>
            <Footer></Footer>
        </div>
    );
};

export default Home;
