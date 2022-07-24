
import {Navbar} from 'react-bootstrap';
//import styled from 'styled-components';
import {BrowserRouter as Router , NavLink} from 'react-router-dom';


function Hello()
{
   
    return(
       
        <div>
       <Navbar  bg="dark"  expand="lg"      style={{textDecoration: 'none' ,justifyContent: 'space-evenly', fontSize: '22px'}}>
         
                            <NavLink  to="/" exact activeStyle={{ color: "red"  }} style={{textDecoration: 'none'}}
              
                
                  >Home </NavLink> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                              
             <NavLink  to="/Register"exact activeStyle={{  color: "red"}}  style={{textDecoration: 'none'}}
                
                  
                 >Register </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              
            <NavLink to="/Login" exact activeStyle={{  color: "red"}}  style={{textDecoration: 'none'}}
                  
                
                >Login </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <NavLink to="/Admin" exact activeStyle={{ color: "red"}}  style={{textDecoration: 'none'}} >Admin </NavLink>
                        
                      </Navbar> 
                 
                      
                   </div>
              
   
                  )
                  
                  



    }
    export default Hello;