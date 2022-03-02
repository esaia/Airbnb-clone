import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { format } from "date-fns";
import Hotel from "../Components/Hotel";
import axios from "axios";
function Search() {
  let history = useHistory();

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.npoint.io/e61b9aaa2fdaf6f7b934")
      .then((res) => {
        setHotels(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // format url to Array
  let searchurl = history.location.search.replace("?", "");
  let decodeURL = decodeURI(searchurl);
  decodeURL = decodeURL.split("=");

  const formattedStartDate = format(new Date(decodeURL[3]), "dd/MMM/yyyy");
  const formattedEndDate = format(new Date(decodeURL[5]), "dd/MMM/yyyy");
  const daterange = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div className='explore-section'>
      <div className='result'>
        <div className='info'>
          <p>300+ stays {daterange} </p>
          <h1>Stays in {decodeURL[1]}</h1>
        </div>

        {hotels.map((hotel, i) => {
          return <Hotel key={i} props={hotel} />;
        })}
      </div>
    </div>
  );
}

export default Search;
