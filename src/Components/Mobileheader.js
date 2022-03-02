import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Mobileheader() {
  return (
    <div className='mobileheader'>
      <Link to={"/"}>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'
          alt='logo'
          className='logo'
          style={{ cursor: "pointer" }}
        />
      </Link>

      <GiHamburgerMenu style={{ cursor: "pointer" }} />
    </div>
  );
}

export default Mobileheader;
