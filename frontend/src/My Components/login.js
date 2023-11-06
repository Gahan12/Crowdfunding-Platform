import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import img from "./Sub-Component/images/back.png";

const Login = (props) => {

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({});

  const handle = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = false;
    props.user.map((val, key) => {
      if ((val.email === formData.email) && (val.password === formData.password)) {
        props.setData(val);
        console.log(val);
        flag = true;
      }
    })
    if (flag) {
      window.location.pathname = '/';
    }
    else window.alert('Invalid username password');
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-black"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        width: "100vw",
      }}
    >
      <div className="absolute top-0 right-0 mt-4 mr-4">
      <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md m-3"
          onClick={() => {
            window.location.pathname='/'
          }}
        >
          Explore
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
          onClick={() => {
            window.location.pathname='/register'
          }}
        >
          Register
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-10 text-white">Login</h1>
      <form className="bg-white rounded-lg shadow-md p-8 flex flex-col gap-6" onSubmit={handleSubmit}>
        <label className="text-gray-500 font-bold" htmlFor="email">
          Email
        </label>
        <input
          className="border-2 border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          type="email"
          id="email"
          placeholder="Enter your email address"
          name="email"
          onChange={handle}
          required
        />
        <label className="text-gray-500 font-bold" htmlFor="password">
          Password
        </label>
        <div className="relative">
          <input
            className="border-2 border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 pr-10"
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            name="password"
            onChange={handle}
            required
          />
          <div
            className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <HiEyeOff /> : <HiEye />}
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
