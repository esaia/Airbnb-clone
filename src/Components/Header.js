import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Styles/Header.css";

import { RiAccountCircleLine } from "react-icons/ri";

function Header() {
  const [navbar, setNavbar] = useState(false);

  const changebackground = () => {
    if (window.scrollY >= 73) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changebackground);
  return (
    <div className={navbar ? "header-section active-header" : "header-section"}>
      <div className='column'>
        {/* left */}
        <div className='left'>
          <Link to={"/"}>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'
              alt='logo'
              className='logo'
            />
          </Link>
        </div>
        {/* center */}

        <div className='center'>
          <ul>
            <li>
              <NavLink
                to='/'
                exact
                className='text'
                activeClassName='active-nav-txt'
              >
                Places to stay
              </NavLink>
            </li>
            <li>
              <NavLink to='/' className='text'>
                Experiences
              </NavLink>
            </li>
            <li>
              <NavLink to='/' className='text'>
                Online Experiences
              </NavLink>
            </li>
          </ul>
        </div>

        {/* right */}
        <div className='right'>
          <NavLink to='/' className='text'>
            Become a host
          </NavLink>
          <RiAccountCircleLine className='icon' />
        </div>
      </div>
    </div>
  );
}

export default Header;
