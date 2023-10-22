import React from 'react';

const Section3 = () => {
    return (
      <div className='mx-auto text-5xl lg:ml-80 mt-14 rounded-lg'>
        <div className="stats stats-vertical lg:stats-horizontal shadow">
  
  <div className="stat text-center mt-6">
    <div className="stat-title mt-3">Downloads</div>
    <div className="stat-value mt-6">31K</div>
    <div className="stat-desc mt-6">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat text-center mt-6">
    <div className="stat-title mt-3">New Users</div>
    <div className="stat-value mt-6">4,200</div>
    <div className="stat-desc mt-6">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat text-center mt-6">
    <div className="stat-title mt-3">New Registers</div>
    <div className="stat-value mt-6">1,200</div>
    <div className="stat-desc mt-6">↘︎ 90 (14%)</div>
  </div>
  
</div>
      </div>
    );
};

export default Section3;