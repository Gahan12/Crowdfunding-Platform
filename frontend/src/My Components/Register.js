import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import img from './Sub-Component/images/back.png';
import '../App.css';

const RegistrationForm = (props) => {

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (formValues.password === formValues.confirmPassword) {
        let flag = true;
        props.user.map((val, key) => {
          if ((val.name == formValues.name) || (val.email == formValues.email)) flag = false;
        })
      if (flag) {
        window.location.pathname = '/login';
          const response = await fetch("https://decentralized-application.onrender.com/register", {
            method: "POST",
            body: JSON.stringify(formValues),
            headers: {
              'Content-Type': 'application/json',
            },
          }); 
          const result = await response.JSON();
        }
        else window.alert('User name or Gmail already exist');
    }
    else window.alert("Password matching fail");
    console.log(formValues);
  };

  return (
    <div
    className="flex flex-col items-center justify-center h-screen bg-black"
    style={{ backgroundImage: `url(${img})`,backgroundSize: "100%",
    backgroundRepeat: "no-repeat", width: '100%' }}
  >      <motion.div 
        className="bg-white p-8 rounded-lg shadow-lg w-96"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
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
            window.location.pathname='/login'
          }}
        >
          Login
        </button>
      </div>
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 p-2 rounded-md outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 p-2 rounded-md outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 p-2 rounded-md outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 p-2 rounded-md outline-none focus:border-blue-400"
              required
            />
          </div>
          <motion.button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default RegistrationForm;