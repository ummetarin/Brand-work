import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsData = () => {
    const data=useLoaderData()
    console.log(data);
    return (
        <div>
          hi 
        </div>
    );
};

export default DetailsData;