import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";

//https://api.npoint.io/e61b9aaa2fdaf6f7b934

function Hotel({ props }) {
  return (
    <>
      <div className='hotels'>
        <div className='hotel-left'>
          <img src={props.img} alt='hotel image' />
        </div>
        <div className='hotel-right'>
          <div className='hotel-top'>
            <p className='hoteltopp'>{props.location}</p>
            <FaRegHeart />
          </div>
          <h1>{props.title}</h1>
          <p className='hoteldesc'>{props.description}</p>
          <div className='hotel-bottom'>
            <div style={{ display: "flex" }}>
              <p>{props.star}</p> <FaStar />
            </div>

            <h3>30$ / night</h3>
            <h5> {props.total} </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hotel;
