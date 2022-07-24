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

function Fooditem() 
{

 
  const [foodDetail, setFoodDetail] = useState({
 
    foodName: "",
    foodCost: "",
    description: "",
    foodImage:null
      });
   
  

 
  const handleChange = (event) => {
    event.preventDefault();
    
    const { name, value } = event.target;

    switch (name) {


        case "image":
            {
              
                setFoodDetail(foodDetail => (
                    { ...foodDetail, foodImage:event.target.files[0] }
    
                   
                ));
              
                }
        

                case "foodName":
                    {
                      
                        setFoodDetail(foodDetail => (
                            { ...foodDetail, foodName: value }
                        ));
                        }
                    break;
            

      case "description":
         {
          
          setFoodDetail(foodDetail => (
              { ...foodDetail, description: value }
            ));
            //console.log("id...",(venueDetail.venueId));
          }
       break;

      

      case "foodCost":
        {
          
            setFoodDetail(foodDetail => (
                { ...foodDetail, foodCost:value }
            ));
            }      
            break;  


            
         


      default:
        break;
    }

  };


 const saveFood=(e)=>{
   e.preventDefault();
 
 var fd= new FormData();

 fd.append("foodImage",foodDetail.foodImage,);
  
  fd.append("foodName",foodDetail.foodName);
  
  fd.append("description",foodDetail.description);
  fd.append("foodCost",foodDetail.foodCost);
 


   /* SAVE FOOD INFORMATION TO DATABASE*/
Axios.post("http://localhost:8080/Fooditem",fd)

  .then((response) =>{
    //console.log(response);
    alert(response.data);
}) 
.catch((err)=>{
  alert(err );
})
 }

 


  return (
    <div >
      
        <h2> Food Item Listed </h2>
        <form  encType='multipart/form-data'  >
          
                <div >
            <label>Food image</label>
                <input
                placeholder="upload Food image"
                type="file"
                name="image"
                onChange={handleChange}
                required
                />
            </div>
          <div>
            <label>Food Name</label>
            <input type="text" name="foodName"  placeholder="Enter Food Name" onChange={handleChange} required />
            
          </div>

          <div>
            <label>Food Description</label>
            <textarea
              placeholder="Enter Food details"
              type="text"
              name="description"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Food cost</label>
            <input type="number" min="1" name="foodCost"  placeholder="Enter Food cost" onChange={handleChange} required />
            
          </div>

         

          
         <div className="submit">
          
         
        <Button type="submit" onClick={saveFood}>submit</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
       
         </div>

        </form>
       
    </div>
  );

    }
export default Fooditem;