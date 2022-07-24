import react, { useEffect } from 'react'
import { useState } from 'react';

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Axios from "axios";
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'

function Venue() 
{

  const [placeInfo, setPlaceInfo] = useState([])
  const [clickData, setClickdata] = useState([])
  //const [click ,setclick]=useState(true)
  let history = useHistory();
  
useEffect(()=>{
  


    Axios.get("http://localhost:8080/Venue")

    .then((response) =>{
             
          console.log(" response in venue",response);
          setPlaceInfo(response.data)
         //console.log("'response.data' after hook",placeInfo);
              //alert("data retrieved successfully");

               }) 
  
              .catch((err)=>{
                            alert("error occured to retrieve data");
                            })
  
  },[])

 const column = [
  {  
    Header: 'VenueId',  
    accessor: 'venueId'  
    }, 
  {  
  Header: 'VenueName',  
  accessor: 'venueName'  
  },
  {  
  Header: 'VenueCost',  
  accessor: 'venueCost'  
  },
  {  
    Header: 'VenueContact',  
    accessor: 'venueContact'  
    },

    {  
      Header: 'VenueImage',  
      accessor: 'venueImage' ,
      Cell:((tableProps) => {
      
       console.log("value of tableProps",tableProps);

        return(<div>
         
         <img
          src={window.location.origin + '/image/'+ tableProps.original.venueImage}
          width={40}
          height={40}
        /> &nbsp;&nbsp;&nbsp;
          
         <Button style={{height:30}} type="submit" >View Details</Button>
        
       
                   
       </div>)
   
      })
      
    },
  
    ]  
    
     const OnRowClick = (state, rowInfo, column, instance) => {
    return {
        onClick: e => {
          
          if(e.target.type=="submit"){
         
          var result=rowInfo.row.venueId;  // Create one variable
           // props.history.push(`/Venue/${result}`);
            history.push(`/${result}/Child`);
        

                                        
        }
       
    }
 
  }
}
//console.log("clickdata is",clickData.data);

  return (
    <div >
      
        <h2> Show Venue Details </h2>
         
        <div>  
        <ReactTable  
            data={placeInfo} 
            columns={column}  
            defaultPageSize = {8}  
            pageSizeOptions = {[4, 6,8,10]}  
            getTrProps={OnRowClick}
       />
        </div> 
       
      
    </div>
  );

    }
export default Venue