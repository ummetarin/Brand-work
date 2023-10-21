import React from 'react';
import CardDAta from './CardDAta';


const Card = ({card}) => {
    return (
        <div className='py-10 mt-24 '>
            <h1 className='text-5xl text-center text-amber-950   font-bold'>All BRANDS INFORMATION</h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-10 grid-cols-1 mt-24 lg:ml-60 md:ml-55'>
                {
                  card.map(data=><CardDAta key={data.id} card={data}></CardDAta>)
                }
            </div>
            
        </div>
    );
};

export default Card;