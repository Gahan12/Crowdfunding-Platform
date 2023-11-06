import "../App.css";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import i from "./Sub-Component/images/logo1.svg";
import SidebarData from "./SidebarData";

function Sidebar(props) {
  const click = () => {
    props.setData({});
    window.location.pathname = "/login";
  };

  console.log(props.data);

  return (
    <>
      <div
        className="flex flex-col justify-between h-screen bg-gradient-to-b from-green-400 via-teal-500 to-blue-500 p-2"
        id="Sidebar"
      >
        <div className="flex flex-col justify-center items-center">
          <img
            src={i}
            alt="Logo"
            className="w-20 h-20 rounded-full bg-gray-600 mb-4"
          />
          {props.data.name ? (
            <div className="flex flex-col justify-center items-center">
              <div className="m-2 text-white text-xl font-semibold">
                {props.data.name}
              </div>
              <button
                className="bg-transparent hover:bg-white text-white font-semibold hover:text-blue-600 py-2 px-4 border border-white hover:border-transparent rounded-full"
                onClick={click}
              >
                LogOut
              </button>
            </div>
          ) : (
            <button
              className="bg-transparent hover:bg-white text-white font-semibold hover:text-blue-600 py-2 px-4 border border-white hover:border-transparent rounded-full"
              onClick={click}
            >
              Login
            </button>
          )}
        </div>
        <ul className="flex-1 mt-3">
          {SidebarData.map((val, key) => {
            return (
              <li
                className="px-8 py-5 hover:bg-transparent hover:text-white transition duration-300 ease-in-out cursor-pointer"
                key={key}
                id={window.location.pathname == val.link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div className="flex items-center">
                  <div className="mr-4">{val.icon}</div>
                  <div>{val.title}</div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center items-center py-3">
          <div className="mr-4">
            <FaUser className="text-white text-xl hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer" />
          </div>
          <div className="mr-4">
            <FaCog className="text-white text-xl hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer" />
          </div>
          <div>
            <FaSignOutAlt className="text-white text-xl hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
