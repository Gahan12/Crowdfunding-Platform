import React, { useEffect, useState } from "react";
import "../App.css";

function Registration(props) {

  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      'id': props.data._id
    })
    if (!props.data.name) window.location.pathname = '/login';
  }, []);

  const handler = (e) => {
    if (e.target.name == "title") e.target.value = e.target.value.toUpperCase();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleSubmit = async (e) => {
    if (props.data.deploy === false) {
      const response = await fetch("http://localhost:5000/owner", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      props.setData({});
      window.location.pathname = '/login';
    }
    else window.alert('Already Project Deployed for Fund');
  };

  return (
    <div
      className="w-full py-6 px-8 mx-auto border border-black bg-gray-100 rounded-lg shadow-lg md:w-2/3 lg:w-1/2 xl:w-1/3"
      id="Registration"
    >
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <h3 className="text-3xl font-bold text-gray-800">Start a Campaign</h3>
        <div className="mt-6 w-full max-w-lg space-y-6">
          <div>
            <label htmlFor="title" className="text-lg font-medium text-gray-700">
              Campaign Title *
            </label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              className="mt-2 block w-full px-4 py-3 rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={handler}
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="text-lg font-medium text-gray-700">
              Description *
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="mt-2 block w-full px-4 py-3 rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={handler}
              required
            />
          </div>
          <div>
            <label htmlFor="story" className="text-lg font-medium text-gray-700">
              Story *
            </label>
            <textarea
              type="text"
              name="story"
              placeholder="Write a story"
              className="mt-2 block w-full px-4 py-3 rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={handler}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="address" className="text-lg font-medium text-gray-700">
              Address *
            </label>
            <input
              type="text"
              name="address"
              placeholder="Account number"
              className="mt-2 block w-full px-4 py-3 rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={handler}
              required
            />
          </div>
          <div>
            <label htmlFor="Image" className="text-lg font-medium text-gray-700">
              Image URL *
            </label>
            <input
              type="text"
              name="image"
              placeholder="image URL"
              className="mt-2 block w-full px-4 py-3 rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={handler}
              required
            />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="eth" className="text-lg font-medium text-gray-700">
                Goal *
              </label>
              <input
                type="number"
                step="0.00001"
                name="eth"
                placeholder="Eth 0.50"
                className="mt-2 block w-full px-4 py-3 rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handler}
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="text-lg font-medium text-gray-700">
                End Date *
              </label>
              <input
                type="date"
                name="date"
                className="mt-2 block w-full px-4 py-3 rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handler}
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#27d8c4] text-white rounded border border-purple-500 hover:bg-transparent hover:text-purple-500 transition duration-300 ease-in-out text-base px-6 py-2 mt-4"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registration;
