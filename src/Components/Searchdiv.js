import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../Styles/Header.css";
import "../Styles/Header.css";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRangePicker } from "react-date-range";
import { Router } from "react-router-dom";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

function Searchdiv() {
  const [inputFieled, setInputFieled] = useState("");

  const [navbar, setNavbar] = useState(false);
  const [searchdivfocused, setsearchdivfocused] = useState(false);
  const dataranger = useRef(0);

  // date ranger picker
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  let history = useHistory();

  const search = () => {
    history.push({
      pathname: "/search",
      search:
        `location=${inputFieled}=/` +
        `startdate=${startDate}=/` +
        `enddate=${endDate}=/`,
    });
  };

  // date ranger chamoshla
  if (searchdivfocused) {
    dataranger.current && (dataranger.current.style = "height: 400px;");
  } else {
    dataranger.current && (dataranger.current.style = "height: 0px;");
  }

  // scrolled change background
  const changebackground = () => {
    if (window.scrollY >= 73) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changebackground);

  return (
    <>
      {/* searchfunct */}

      {searchdivfocused && (
        <>
          <div
            className='overflow'
            onClick={() => setsearchdivfocused(false)}
          ></div>
        </>
      )}

      <div className='dataranger' ref={dataranger}>
        {searchdivfocused && (
          <div className='date'>
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
            />
          </div>
        )}
      </div>
      <div className='search-div' onClick={() => setsearchdivfocused(true)}>
        <div
          className={
            navbar
              ? `${
                  searchdivfocused
                    ? "input-focused input-div"
                    : "input-div-active input-div"
                }`
              : `${searchdivfocused ? "input-focused input-div" : "input-div"}`
          }
        >
          <input
            type='text'
            className='search-input'
            onChange={(e) => setInputFieled(e.target.value)}
            value={inputFieled}
          />
          <div className='icon-div' onClick={search}>
            <FaSearch className='search-icon' />
            <p>search</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchdiv;
