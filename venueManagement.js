import react, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
  Routes,
  Switch
} from "react-router-dom";

import {TextField} from '@adobe/react-spectrum';
import { useState } from 'react';
import { createPopper } from '@popperjs/core';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TextArea} from '@adobe/react-spectrum'
import Button from 'react-bootstrap/Button'
import PasswordStrengthBar from "react-password-strength-bar";
import './style.css'
import Axios from "axios";
//import 'bootstrap/dist/css/bootstrap.min.css';



function VenueManagement() 
{
  const [venueDetail, setvenueDetail] = useState({
    venueId: "",
    venueName: "",
    venueCost: "",
    venueContact: "",
    venueImage:""
      });

  

 
  const handleChange = (event) => {
    event.preventDefault();
    
    const { name, value } = event.target;

    switch (name) {
      case "venueId":
         {
          
          setvenueDetail(venueDetail => (
              { ...venueDetail, venueId: value }
          ));
          }
       break;

      case "VenueName":
        {
          
            setvenueDetail(venueDetail => (
                { ...venueDetail, venueName: value }
            ));
            }
        break;

      case "venueContact":
        {
          
            setvenueDetail(venueDetail => (
                { ...venueDetail, venueContact:value }
            ));
            }
            break;

      case "venueCost":
        {
          
            setvenueDetail(venueDetail => (
                { ...venueDetail, venueCost:value }
            ));
            }      
            break;  

       case "venueImage":
        {
          
            setvenueDetail(venueDetail => (
                { ...venueDetail, venueImage:event.target.file[0] }
            ));
            }
            break;
         


      default:
        break;
    }

  };
  console.log("image...",(venueDetail.venueImage));

  /*const ChackingMatch = () => {
    if (
      formFields.passwordtwo !== formFields.retypePassword &&
      formFields.retypePassword.length > 0
    ) {
      return "password not match";
    }
    return "";
  };*/



 const savePlace=(e)=>{
   e.preventDefault();
 
//console.log(" image...",(venueDetail.venueImage));
/*console.log("vanue name...",(venueDetail.venueName));
console.log("vanue cost...",(venueDetail.venueCost));*/

  
/*Axios.post("http://localhost:8080/venueManagement",{

  venueId:venueDetail.venueId,
  venueName:venueDetail.venueName,
 venueCost:venueDetail.venueCost,
 venueContact:venueDetail.venueContact,
 venueImage:venueDetail.venueImage

}).then((response) =>{
  alert("USER INFO INSERTED SUCCESSFULLY");
}) .catch((err)=>{
  alert("user hit wrong URL");
})*/

 }


  return (
    <div >
      
        <h2> Venue Register </h2>
        <form >
          <div >
            <label>Venue Id</label>
            <input type="text" name="venueId"  placeholder="Enter venue Id" onChange={handleChange} required />
           
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
         
         
          required
        />
      </div>

          
         <div className="submit">
          
         
        <Button type="button" onClick={savePlace}>Inserte</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="button">View</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="button">Update</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="button">Delete</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to = "/Adminpanel">
         <Button type="submit">Back</Button>
         </Link>
         </div>

        </form>
      
    </div>
  );

    }
export default VenueManagement;