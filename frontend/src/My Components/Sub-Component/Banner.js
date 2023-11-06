import React from "react";
import img from "./images/banner.jpg";

function Banner({ openMobileMenu, setOpenMobileMenu, openMenu }) {
  return (
    <div className="banner">
      <div className="bg-image">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Banner;