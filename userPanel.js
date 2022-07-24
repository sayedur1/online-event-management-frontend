


import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';


function userPanel()
{
                return(

             
                <div style={{height:'450px',textDecoration:"none"}}>
                       
                        <h4> Wel Come To User panel  </h4> <br/>  <br/>
                        <pre>
                        <Link to = "/Venue" >    
                        <Button type="button" > View Venue </Button>
                        </Link>     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <Link to = "/Menue"   style={{textDecoration: 'none'}}>
                        <Button  type="button" > View Food Menu </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </Link>

                        <Button type="button" > View Bookings </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to = "/Booking"  style={{textDecoration: 'none'}}>   
                        <Button type="button" >Booking </Button><br/>  <br/><br/><br/>  <br/><br/>
                        </Link> 
                        <Button type="button" > Booking History </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button type="button" >View Notification </Button><br/>  <br/><br/>    

                        </pre> 

                        <Button type="button" >Logout </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button type="button" > Back </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>


          
                )

}export default userPanel