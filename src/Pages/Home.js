import React, { useState, useRef, useEffect } from "react";
import "../Styles/Header.css";
import axios from "axios";
import Searchdiv from "../Components/Searchdiv";

function Home() {
  const [posters, setPosters] = useState([]);
  const [cards, setcards] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.npoint.io/6f2486b1013ff0297a61")
      .then((res) => {
        setPosters(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://api.npoint.io/871b2d9c1438b9bbf597")
      .then((res) => {
        setcards(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Searchdiv />

      {/* Slider */}

      <div className='slider-section'>
        <img
          src='https://images.pexels.com/photos/164338/pexels-photo-164338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          className='banner-img'
        />

        <h2>Not sure where to go? Perfect.</h2>
        <button>I am flexible</button>
        <div className='div'></div>
      </div>

      {/* Explore Nearby */}

      <div className='explore-section'>
        <div className='explore-column'>
          <h1>Explore Nearby</h1>
          <div className='posters'>
            {posters.map((poster, index) => {
              return (
                <div key={index} className='poster'>
                  <img src={poster.img} alt='poster' />
                  <div className='poster-info'>
                    <p>{poster.location}</p>
                    <p>{poster.distance}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* cards anywhere */}
      <div className='explore-section'>
        <div className='card-column'>
          <h1>Live anywhere </h1>
          <div className='cards'>
            {cards.map((card, index) => {
              return (
                <div className='card' key={index}>
                  <img src={card.img} alt='' className='card-img' />
                  <h3>{card.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* large card */}
      <div className='explore-section'>
        <div className='lg-card'>
          <img
            src='https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440'
            alt=''
          />
          <div className='lg-card-details'>
            <h2> The Greatest Outdoors </h2>
            <p>Wishlists curated by Airbnb</p>
            <button>Get Inspired</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
