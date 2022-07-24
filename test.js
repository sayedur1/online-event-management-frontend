import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Draggable from "react-draggable";
//import { PropTypes } from 'react';322a
function Modall(props) 
{
    

     
 
   // console.log("top",coordinate.styles.top);
 //const falseState=(e)=>{}
 if (props.track==false){
return(
    
 <div  >
<Draggable>

     
     <div  style={{zIndex: 100,position: "fixed", top:"100px",width:"50%", backgroundColor: "lightBlue",height:"410px"}}>
            <button  style={{ float: "right",'justifyCcontent': 'center',
            'alignItems': 'center'}} onClick={()=>props.falfoo(false)} > X </button>
 

        <div  > 
              <h5> Food Details of {props.image.name}</h5>
              <img  style={{width:"60%",height:"185px",marginTop:"20px"}} src={'foodImage/'+ props.image.keepingPath}/> <br></br><br></br>
   
               <label > quantity:</label> <input style={{width:"20%"}} type="number" min={1} placeholder="quantity" /> <br></br>
              <span> Food Item: {props.image.name} </span> &nbsp;<br></br>

             <span> Food Ingredient: {props.image.ingredient} </span> &nbsp;<br></br>
              <span> Food Cost : {props.image.cost} $ </span> &nbsp;&nbsp;  


              <br></br>
              

        </div>
        <div>
             <Button> Select</Button>  &nbsp;&nbsp;
             <Button  onClick={()=> props.falfoo(false)}> Cancel </Button>
        </div>
             
        </div>
 
</Draggable>
</div>

)
} 

else if (props.track){
     return(
     
     
     
     <div >
          <Draggable>
          <div  style={{zIndex: 100,position: "fixed", top:"100px",width:"50%", backgroundColor: "lightBlue",height:"410px"}}>
           
                 <button  style={{ float: "right",'justifyCcontent': 'center',
                 'alignItems': 'center'}} onClick={()=>props.falplace(false)} > X </button>
           
            
     
             <div > 
                   <h5> Hotel Details of {props.hotel.venueName}</h5>
                   <img style={{width:"60%",height:"185px",marginTop:"20px"}} src={'image/'+ props.hotel.venueImage}/> <br></br><br></br>
        
                    
                   <span> Venue Name: {props.hotel.venueName} </span> &nbsp;<br></br>
     
                   <span> Venue Cost : {props.hotel.venueCost} $ </span> &nbsp;&nbsp;  
     
     
                   <br></br>
                   
     
             </div>
             <div>
                  <Button> Select</Button>  &nbsp;&nbsp;
                  <Button onClick={()=>props.falplace(false)}> Cancel </Button>
             </div>
             </div>
             </Draggable>
     </div> 
     
     )
     }
     

}
export default Modall;