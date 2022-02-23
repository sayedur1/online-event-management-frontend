import react from 'react'
import ReactDOM from 'react-dom';
import React from 'react';
import {TextField} from '@adobe/react-spectrum';
import { useState } from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { propTypes } from 'react-bootstrap/esm/Image';
import './style.css'
import Apanel from './Adminpanel';
import { useHistory } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
  Routes,
  NavLink,
  Switch
} from "react-router-dom";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

function Admin() {

  const { push } = useHistory()

    const [initialstate, updatestate] = useState(false )
    const [initialposition, updateposition] = useState(false )
      
      const [email, updateEmail] = useState({ givenEmail: null, emailError: " ",});
      const [formFields, setFormFields] = React.useState({
        passwordtwo: "",
        retypePassword: "",
        passError: ""
      });

      const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        switch (name) {
      case "email":
        if (validEmailRegex.test(value)) {
          updateEmail({ ...email,givenEmail: value });
          updateEmail({...email, emailError: " " });
          updatestate({ initialstate: true});

        } else updateEmail({emailError: "invalid Email" });
        break;

        case "confirm_pass":
        setFormFields({ ...formFields, passwordtwo: value });
        updateposition({ initialposition: true});
        break;


        default:
        break;
    }
  
  }
 
     const enabled =initialstate&&initialposition;

     const handleClick=()=>{
      push("/Adminpanel")
     }
  return(
    
 <div  style={{height:'450px'}}>
     <h4>Adnin Login Page   </h4>
     <header>
     <meta charset = "UTF-8" />
     </header>
      <pre> 
         <div>
         <form  >
         <div >
            <label htmlFor="email">Email</label>
            <input type="email" name="email"  placeholder="Your Email id"  onChange={handleChange} required />
            <span> {email.emailError}</span>
          </div>

          <div >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="confirm_pass"
              onChange={handleChange}
              required
            />
  
          </div>
       
         {/*<Button style={{textDecoration: 'none'}} disabled={!enabled}>Login</Button>*/}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
         <Button onClick={handleClick}  disabled={!enabled}> Login </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
         <Link to = "/">
         <Button type="button" style={{textDecoration: 'none'}}>cancel</Button>
         </Link>
         
        
         </form>
         </div>
     </pre>
</div>
  )

    
}
export default Admin

 




