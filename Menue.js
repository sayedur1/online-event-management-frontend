import react, { useEffect, useRef } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Select from 'react-select'

import { useState } from 'react';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button'
import './style.css'
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'react-calendar/dist/Calendar.css';


function Menue() 
{

   const [place ,updatePlace]= useState({
     name:"",
     userClick:'false',
     onchange:'false'
   });
  
  
  const [getFood, updateFood] = useState();
  const [selectedFood, setSelectedFood] = useState([]); 
 

  // collect food item data

  useEffect(()=>{
  

    Axios.get("http://localhost:8080/Menue")
 

    .then((response) =>{

      
      const datta = response.data;
      //const fname=datta.foodName;
     // console.log("retrieve food item inside response.data",datta);


     
          updateFood(datta);
           

          //setOtherFood(datta)
        
               }) 
  
              .catch((err)=>{
                            alert("error occured to retrieve  food data");
                            })
  
  },[])

 

      const CustomStyles = {
        option: (provided, state) => ({
          ...provided,
          color: state.isSelected ? 'red' : 'green',
          width:'50%'
        
          }),

      }

        if(getFood!=null)
        {
        var opt =  getFood.map((element) => (
                      
          {label:element.foodName,value:element.foodCost,description:element.description, foodImage:element. foodImage}
          
         ))
      
        }
 
      var j;
      const getvalue=(e)=>{
        
        console.log("enter in event", e);

        setSelectedFood(e)

        updatePlace(prevState => (
          { ...prevState, onchange: true}
          
          ));
        
     

      } // end of get value


     
    
      
         


const displayFood = () => {
  return (
    <div style={{display:"flex"}} >
      {  selectedFood.map((sf) => {
       // console.log("sf",sf);
    return (<div  ><img   src={'foodImage/'+ sf.foodImage} style={{width:"300px", padding: "5px"}}/><br></br>
       
       <span> Cost: {sf.label}   </span> <br></br>
       <span> Ingredient: {sf.description} </span><br></br>
        <span> Cost: {sf.value}  $ </span> <br></br>
       
      
       </div>)})}
      </div>
  )

}


//console.log("getdata",getData);

    
  return (

    <div class="container">
  
     <div class="row">
    
      
      <h1> Details of Food Menue</h1>
         
        <label >  selected Food:</label> 
        
            
           <Select  
           options={opt}
           isMulti={true}
            onChange={getvalue}
            isSearchable={true}
            placeholder={"select your food item"}
            styles={CustomStyles}
            clearValue={true}
          />
       
    
       </div>
       
   
        <div class="row">
        <div  >

        {displayFood()}
        
        </div>

        <div ><br></br>
         <Link to = "/userPanel">
          <Button style={{width:"100px"}} type="Back"> Back</Button> 
          </Link>
          </div>

          </div>
  
   </div>

  
  )
 }
export default Menue;