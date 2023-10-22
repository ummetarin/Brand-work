import React from 'react';
import Banner from './Banner';
import Section2 from './Section2';
import Card from '../Card/Card';
import { useLoaderData } from 'react-router-dom';
import Section3 from './Section3';


const FirstHome = () => {
    const card=useLoaderData()
    console.log(card);
    

    return (
        <div>
            <Banner></Banner>
            <Section2></Section2>
            <Card card={card}></Card>
            <Section3></Section3>
        </div>
    );
};

export default FirstHome;