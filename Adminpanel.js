


import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';


function Adminpanel()
{
                return(

             
                <div style={{height:'450px'}}>
                       
                        <h4> Wel Come To Adnin panel  </h4> <br/>  <br/>
                        <pre>
                        <Link to = "/VenueManagement" >    
                        <Button type="button" >Venue Management </Button>
                        </Link>     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <Link to = "/Fooditem" >    
                        <Button type="button" >Food Management </Button>
                        </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <Button type="button" >Equipment Management </Button><br/>  <br/><br/><br/>  <br/><br/>
                        <Button type="button" >View Booking </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button type="button" >Notification Management </Button><br/>  <br/><br/>    

                        </pre> 

                        
                </div>


          
                )

}export default Adminpanel