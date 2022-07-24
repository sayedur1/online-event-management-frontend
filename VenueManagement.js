import react, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
  Routes,
  Switch
} from "react-router-dom";


import { useState } from 'react';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    venueImage:null
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
            console.log("id...",(venueDetail.venueId));
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

       case "image":
        {
          
            setvenueDetail(venueDetail => (
                { ...venueDetail, venueImage:event.target.files[0] }

               
            ));
          
            }
            break;
         


      default:
        break;
    }

  };


 const savePlace=(e)=>{
   e.preventDefault();
 
 var fd= new FormData();
  fd.append("venueId",venueDetail.venueId);
  fd.append("venueName",venueDetail.venueName);
  fd.append("venueCost",venueDetail.venueCost);
  fd.append("venueContact",venueDetail.venueContact);
  fd.append("venueImage",venueDetail.venueImage,);

 //console.log(" formdata...",fd);
  /*venueId:venueDetail.venueId,
  venueName:venueDetail.venueName,
 venueCost:venueDetail.venueCost,
 venueContact:venueDetail.venueContact,
 venueImage:venueDetail.venueImage*/



   /* SAVE PLACE INFORMATION TO DATABASE*/
Axios.post("http://localhost:8080/VenueManagement",fd)

  .then((response) =>{
    //console.log(response);
   // alert(response.data);
}) 
.catch((err)=>{
  alert("error occured to insert place informatiom" );
})
 }




  return (
    <div >
      
        <h2> Venue Register </h2>
        <form  encType='multipart/form-data'  >
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
            <input type="number" name="venueCost" min="1" placeholder="Enter Venue Cost" onChange={handleChange} required />
            
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

          
         <div className="submit">
          
         
        <Button type="button" onClick={savePlace}>Inserte</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <Link to="/Venue"  style={{textDecoration: 'none'}}>
        <Button type="button"  >View</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Link>

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