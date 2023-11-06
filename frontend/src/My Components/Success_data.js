import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Success(props) {

  const calculatetimeLeft = (targetDate) => {
    const currentDate = new Date();
    const diffTime = Math.round(targetDate.getTime() - currentDate.getTime());
    return diffTime;
  }

  const calculateDaysLeft = (targetDate) => {
    const currentDate = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const diffDays = Math.round((targetDate.getTime() - currentDate.getTime()) / oneDay);
    return diffDays;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" id='Home'>
      {props.owners.map((val, key) => {
        const daysLeft = calculateDaysLeft(new Date(val.date));
        const Timeleft = calculatetimeLeft(new Date(val.date));
        const address = String(val.address);
        if (val.eth <= 0) {
          return (
            <div
              key={key}
              className="relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
            >
              <img
                src={val.image}
                className="object-cover w-full h-40 sm:h-48"
              />
              <div className="p-4">
                <h2 className="text-gray-800 text-lg font-bold mb-2">
                  {val.title}
                </h2>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-bold">{val.want_eth} ETH earn</span>
                </div>
              </div>
              <div className="absolute top-0 left-0 m-4 bg-green-500 text-white py-1 px-2 rounded-full">
                Completed
              </div>
            </div>
          );
        }
      })}
    </div>
  );
   
}

export default Success;
