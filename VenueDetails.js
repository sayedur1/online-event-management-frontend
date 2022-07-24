import react, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


import { useState } from 'react';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button'
import PasswordStrengthBar from "react-password-strength-bar";
import './style.css'
import Axios from "axios";
//import 'bootstrap/dist/css/bootstrap.min.css';

function VenueDetails() 
{

 
  const [venueDetail, setvenueDetail] = useState([]);
   
  
useEffect(()=>{
  


    Axios.get("http://localhost:8080/VenueDetails")

    .then((response) =>{
             
         // console.log(" image name insideresponse",response.data[0].venueImage);
          setvenueDetail(response.data)
          console.log("response.data",placeInfo);
              alert("data retrieved successfully");

               }) 
  
              .catch((err)=>{
                            alert("error occured to retrieve data");
                            })
  
  },[])




  return (
    <div >
      
        <h2> Venue Details </h2>
        <form   >
          <div >
            <label>Venue Id</label>
            <input type="text" {...venueDetail.venueId} />
           
          </div>

          <div>
            <label>Venue Name</label>
            <input type="text" name="VenueName"  placeholder="Enter Venue Name" onChange={handleChange} required />
            
          </div>

          <div>
            <label>Venue Cost</label>
            <textarea
              placeholder="Enter Venue Cost"
              type="text"
              name="venueCost"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Venue Contact</label>
            <textarea
              placeholder="Enter Venue contact"
              type="text"
              name="venueContact"
              onChange={handleChange}
              required
            />
          </div>

          <div >
      <label>Venue image</label>
        <input
        placeholder="upload venue_image"
          type="file"
          name="image"
          onChange={handleChange}
          required
        />
      </div>

        </form>
       
    </div>
  );

    }
export default VenueDetails;