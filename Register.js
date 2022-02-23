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
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const numberRegEx = /^[0-9\b]+$/;

function Register() 
{
  const [userName, updateFirstName] = useState({
    firstName: "",
    lastName: "",
    firstNameError: "",
    lastNameError: "",
    presentAddress: "",
    parmanentAddress:"",
    gender:""
  });
  const [mob_Number, updateNumber] = useState({
    givenNumber: "",
    numberError: ""
  });

  const [email, updateEmail] = useState({ givenEmail: null, emailError: " " });
  const [namee, updateName] = useState();

  const [formFields, setFormFields] = React.useState({
    passwordtwo: "",
    retypePassword: "",
    passError: ""
  });

  const options = [
    {
      label: " ",
     
    }, 
    {
      label: "Male",
     
    }, 
    {
      label: "Female",
     
    },
  ];

 /* useEffect(()=>{
  Axios.post("/Register")
  },[])*/

  const handleChange = (event) => {
    event.preventDefault();
    
    const { name, value } = event.target;

    switch (name) {
      case "fName":
        if (/^[a-zA-Z ]*$/.test(value)) {
          
          updateFirstName(userName => (
              { ...userName, firstName: event.target.value, firstNameError: " " }
          ));
          updateFirstName(userName => (
            { ...userName,  firstNameError: " " }
        ));
          
        } else
          updateFirstName(userName =>({ ...userName, firstNameError: "invalid input" }));
        break;

      case "lName":
        if (/^[a-zA-Z ]*$/.test(value)) 
        {
              updateFirstName(userName => (
                { ...userName, lastName: event.target.value }
            ));
            updateFirstName(userName => (
              { ...userName,  lastNameError: " " }))
        } 
        else  updateFirstName(userName =>({ ...userName, lastNameError: "invalid input" }));
        break;

      case "currentAddress":
            updateFirstName(userName => (
              { ...userName, presentAddress: event.target.value }
          ));
            break;

      case "oldAddress":
              updateFirstName(userName => (
                { ...userName, parmanentAddress: event.target.value }
            ));        
            break;  

       case "gender":
         console.log("gender..",event.target.value);
            updateFirstName(userName => (
              { ...userName, gender: event.target.value }
              ));
            break;
         

      case "email":
        if (validEmailRegex.test(value)) {
          updateEmail(email => (
            { ...email, givenEmail: event.target.value }
            ));
            updateEmail(email => (
              { ...email, emailError: " " }
              ));
           
        } 
        else
            updateEmail(email => (
              { ...email, emailError: "invalid Email" }
              ));
        break;

      case "number":
        //updateNumber({ value });

        if (numberRegEx.test(value))
        {
                updateNumber(mob_Number => (
                  { ...mob_Number, givenNumber: event.target.value }
                  ));

                if ((mob_Number.givenNumber).length < 9)
                updateNumber(mob_Number => (
                  { ...mob_Number, numberError: "enter 10 digit number" }
                  ));
                  
                else if ((mob_Number.givenNumber).length > 8)
                updateNumber(mob_Number => (
                  { ...mob_Number, numberError: " " }
                  ));

        } 
       else
                updateNumber(mob_Number => (
                  { ...mob_Number, numberError: "enter number only" }
                  ));    // return object have to put extra ()
                  break;

      case "password":
        setFormFields(formFields=>({ 
          ...formFields, passwordtwo: event.target.value }));
        break;

      case "confirm_pass":

        setFormFields(formFields=>({ 
          ...formFields, retypePassword: event.target.value }));
     

        break;

      default:
        break;
    }

    //updateName({ [name]: value });
  };
  const ChackingMatch = () => {
    if (
      formFields.passwordtwo !== formFields.retypePassword &&
      formFields.retypePassword.length > 0
    ) {
      return "password not match";
    }
    return "";
  };

  //console.log("firstname..",(userName.firstName));

 const createUser=(e)=>{
   e.preventDefault();
 
/*console.log("firstname..",(userName.firstName));
   console.log("lastname..",(userName.lastName));
   console.log("presentAddress..",(userName.presentAddress));
   console.log("parmanentAddress..",(userName.parmanentAddress));
   console.log("gender..",(userName.gender));
   console.log("givenNumber..",(mob_Number.givenNumber));
   console.log("email..",(email.givenEmail));
   console.log("password..",(formFields.passwordtwo));*/

   
  
/*Axios.post("http://localhost:8080/Register",{

  firstName:userName.firstName,
  lastName:userName.lastName,
  presentAddress:userName.presentAddress,
  parmanentAddress:userName.parmanentAddress,
  gender:userName.gender,
  givenNumber:mob_Number.givenNumber,
  givenEmail:email.givenEmail,
  passwordtwo:formFields.passwordtwo

}).then((response) =>{
  alert("USER INFO INSERTED SUCCESSFULLY");
})  */
};



  return (
    <div >
      
        <h2>Register </h2>
        <form >
          <div >
            <label>First Name</label>
            <input type="text" name="fName"  placeholder="Your First name" onChange={handleChange} required />
            <span> {userName.firstNameError}</span>
          </div>

          <div>
            <label>Last Name</label>
            <input type="text" name="lName"  placeholder="Your Last name" onChange={handleChange} required />
            <span> {userName.lastNameError}</span>
          </div>

          <div>
            <label>Present Address</label>
            <textarea
              placeholder="Your present address"
              type="text"
              name="currentAddress"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Permanent Address</label>
            <textarea
            placeholder="Your permanent address"
              type="text"
              name="oldAddress"
              onChange={handleChange}
              required
            />
          </div>
          <div>
               <label>Gender select:</label>
                <select name="gender" onChange={handleChange} >
                    
                    { options.map((option) => (
                      
                      <option >{option.label}</option>
                    ))}
                </select>
                </div>  
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" name="email"  placeholder="Your Email id" onChange={handleChange} required />
            <span> {email.emailError}</span>
          </div>

          <div className="number">
            <label htmlFor="number">Number</label>
            <input type="text" name="number" placeholder="Your contact number"
                    onChange={handleChange} required />
            <span> {mob_Number.numberError}</span>
          </div>

          <div className="pwd-container">
            <label htmlFor="password">Password </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              required
            />
            <span  >  < PasswordStrengthBar password={formFields.passwordtwo} /></span>
            
          </div>

          <div className="password">
            <label htmlFor="password">Confirm_Password</label>
            <input
              type="password"
              name="confirm_pass"
              onChange={handleChange}
              required
            />
            <ChackingMatch />
          </div>

          <div className="submit">
          
            <Button type="submit" onClick={createUser}>Create</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
          <Link to = "/">
         <Button type="submit">cancel</Button>
         </Link>
         </div>
        </form>
      
    </div>
  );

    
 

 
    }
export default Register