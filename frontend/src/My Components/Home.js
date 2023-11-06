import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../App.css';
import Details from './Details';
import { Link } from 'react-router-dom';

function Home(props) {

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

  const update = async (val) => {
    await fetch("http://localhost:5000/owner_data", {
            method: "POST",
            body: JSON.stringify(val),
            headers: {
              "Content-Type": "application/json",
            },
          })
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" id='Home'>
      {props.owners.map((val, key) => {
        const daysLeft = calculateDaysLeft(new Date(val.date));
        const Timeleft = calculatetimeLeft(new Date(val.date));
        const address = String(val.address);
        if ((Timeleft > 0) && (val.eth > 0)) {
          return (
            <Link
              to="/Details"
              state={{
                user: {
                  title: val.title,
                  story: val.story,
                  eth: val.eth,
                  date: daysLeft,
                  image: val.image,
                  description: val.description,
                  address: address,
                  _id: val._id,
                },
              }}
              key={key}
              className="relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300 ease-in-out"
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
                  <span className="text-gray-700 font-bold">{val.eth} ETH</span>
                  <span className="text-gray-700 font-bold">
                    {daysLeft} Days Left
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{val.description}</p>
              </div>
            </Link>
          );
        }
        else {
          update(val);
        }
      })}
    </div>
  );
  
}

export default Home;
