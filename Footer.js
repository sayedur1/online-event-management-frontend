
import react from 'react'
import {Navbar,Container, Nav} from 'react-bootstrap';
import './blog-post.css'
import styled from 'styled-components';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import Register from './my-componant/Register';
import { NavLink } from 'react-router-dom';

import fbook from './facebook.jpg';
import twiter from './twitter.jpg';

function Footer()
{


    const images = {
    
        borderRadius: '4px',
        padding: '5px',
        width: '5%',
        height: '30px'
        };

       /* const fot={

                      
            pposition: 'fixed',
            padding: '1px 10px 0px 10px',
            bottom: '0',
            width: '100%',
            height: '40px',
            
        }*/

      
   
    return(
       
     

       <Navbar bg="white"expand="lg" className="justify-content-center"   >
          <h5 style={{  fontSize: '10px'}}> Copy right@ 2021 Sayedur</h5>
        <Nav.Link> <Link to="/"  >About Us </Link></Nav.Link>
                        
        <Nav.Link>  <Link to="/"  >Career  </Link></Nav.Link>
        
        <Nav.Link> <Link to="/" >Contact </Link></Nav.Link>
        <img style={images}src={fbook} />
        <img style={images}src={twiter} />

    </Navbar> 
   
    )
  
    }
    export default Footer;