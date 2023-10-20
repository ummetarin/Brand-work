import React from 'react';
import Banner from './Banner';
import Section2 from './Section2';
import Card from '../Card/Card';
import { useLoaderData } from 'react-router-dom';

const FirstHome = () => {
    const card=useLoaderData()
    console.log(card);
    

    return (
        <div>
            <Banner></Banner>
            <Section2></Section2>
            <Card card={card}></Card>
        </div>
    );
};

export default FirstHome;