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
import { withRouter } from "react-router";
//import useParams from "react-router";
import { useParams } from 'react-router-dom';
import './style.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function Child() 
{
 var date;
  
  const [clickData, setClickdata] = useState([])
  let { result } = useParams();
  
  
  useEffect(()=>{
  

    Axios.get(`http://localhost:8080/${result}/Child`)
 

    .then((response) =>{

      
      const data = response.data;
      console.log("retrieve placeinfo inside response.data",data);
/*setClickdata(clickData => (
        { ...clickData, info: data }
        ));*/

        //setClickdata([...clickData, { info: data}]);
         // console.log("retrieve placeinfo inside response",response.data);
         // console.log("type of response.data",typeof(response.data[0]));
          setClickdata(data);
         //console.log(" clickData after hook",(clickData.info));
              //alert(clickData);

               }) 
  
              .catch((err)=>{
                            alert("error occured to retrieve data");
                            })
  
  },[])


 

const sayedur = () => {
  var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
     
    if(month < 10)
    {
        month = '0' + month.toString();
         console.log("month <10",month);
    }
    if(day < 10)
        day = '0' + day.toString();
    
    var minDate= year + '-' + month + '-' + day;
   return minDate;

  };
  
  
  return (
    <div > 

      <h1> Details of Selected place</h1>
     {/* <Calendar onChange={onChange} value={value} />*/}
     
     
   <input type="date"  min={sayedur()}  required/>
     

      {clickData.map( element =>
       <div>
         <div>
            <label>VenueImage</label>
           
            { <img
              src={window.location.origin + '/image/'+ element.venueImage}
              width={540}
              height={300}
            />}
             
            
          
          </div>

         <div>
         <label>VenueId</label>
        <input type="text" placeholder={element.venueId}  />
        </div>
        <div>
        <label>VenueName</label>
        <input type="text"  placeholder={element.venueName}  />
        </div>
        <div>
        <label>VenueCost</label>
        <input type="text"  placeholder={element.venueCost}  />
        </div>
        <div>
        <label>VenueContact</label>
        <input type="text"  placeholder={element.venueContact}  />
        </div>
       </div> )}
     
    </div>
  
  )
 }
export default Child;