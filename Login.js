import react, { useEffect } from 'react'
import ReactDOM, { render } from 'react-dom';
import React from 'react';
import {TextField} from '@adobe/react-spectrum';
import { useState } from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { propTypes } from 'react-bootstrap/esm/Image';
import './style.css'
//import Apanel from './Adminpanel';
import { useHistory } from 'react-router-dom'
import Axios from "axios";
//import userPanel from './userPanel'
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
  Routes,
  NavLink,
  Switch
} from "react-router-dom";
import { alignPropType } from 'react-bootstrap/esm/types';


const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
function Login(props) {

  const { push } = useHistory()

  const [initialstate, updatestate] = useState(false )
  const [initialposition, updateposition] = useState(false )
    
    const [email, updateEmail] = useState({ givenEmail: null, emailError: " ",});
    const [formFields, setFormFields] = React.useState({
      passwordtwo: "",
      retypePassword: "",
      passError: ""
    });
  const [users, setUsers]=useState([])

    const handleChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;

      switch (name) {


      case "email":
        if (validEmailRegex.test(value)) {
          updateEmail(email => (
            { ...email, givenEmail: event.target.value }
            ));
            updateEmail(email => (
              { ...email, emailError: " " }
              ));
              updatestate({ initialstate: true});
        } 
        else
            updateEmail(email => (
              { ...email, emailError: "invalid Email" }
              ));
        break;


     case "confirm_pass":
      setFormFields({ ...formFields, passwordtwo: value });
      updateposition({ initialposition: true});
      break;
     


      default:
      break;
  }

}
const clickedLogin=((e)=>{
  e.preventDefault();

  Axios.post("http://localhost:8080/Login",
  { givenEmail:email.givenEmail,
    passwordtwo:formFields.passwordtwo
  })
  .then((response)=>
  {
    console.log("response after matching:",response);
   if(response.status===200)
   {
     console.log(response);
    props.history.push("/userPanel");
   }
   else if(response.status===500) alert("wrong username or password");

  }).catch((err)=>{

    console.log("inside catch",err);
    alert("incorrect username or password");
  });
})

   const enabled =initialstate&&initialposition;

   
return(
  
<div  style={{height:'450px'}}>
   <h4>User account login Page   </h4>
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
      
       <Button   disabled={!enabled} onClick={clickedLogin}> Login </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
       <Link to = "/Register">
       <Button type="button" style={{textDecoration: 'none'}}>Create Account</Button>
       </Link>
        
      
       </form>
       </div>
   </pre>
</div>
)

  
    
}
export default Login

 




