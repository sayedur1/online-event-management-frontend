import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,  useImperativeHandle} from "react";
import Draggable from "react-draggable";
import React from 'react';
import ReactDOM from 'react-dom';
//import { PropTypes } from 'react';322a
 function Modall(props)
{
    

     console.log("inside props",props)
const [quantity,setQuantity]=useState({

})
     
//const [myState, setMyState] = useState('This is my state!');

const handeler=(e)=>{
     setQuantity(e.target.value)
   
    
}




 if (props.track==false){

     let obj={
          item: props.image.name ,
          ingredient: props.image.ingredient,
          cost : props.image.cost,
       
    }
    obj.amount=quantity

return(
    
 <div  >
<Draggable>

     
     <div  style={{zIndex: 100,position: "fixed", top:"100px",width:"50%", backgroundColor: "lightBlue",height:"410px"}}>
            <button  style={{ float: "right",'justifyCcontent': 'center',
            'alignItems': 'center'}} onClick={()=>props.falfoo(false)} > X </button>
 

        <div  > 
              <h5> Food Details of {props.image.name}</h5>
              <img  style={{width:"60%",height:"185px",marginTop:"20px"}} src={'foodImage/'+ props.image.keepingPath}/> <br></br><br></br>
   
               <label > quantity:</label> <input style={{width:"20%"}} onClick={handeler} type="number" min={1} placeholder="quantity" required/> <br></br>
              <span> Food Item: {props.image.name} </span> &nbsp;<br></br>

             <span> Food Ingredient: {props.image.ingredient} </span> &nbsp;<br></br>
              <span> Food Cost : {props.image.cost} $ </span> &nbsp;&nbsp;  


              <br></br>
              

        </div>
        <div>
             <Button onClick={()=> {props.parentCallback(obj)}}>  Select</Button>  &nbsp;&nbsp;
             <Button  onClick={()=> props.falfoo(false)}> Cancel </Button>
        </div>
             
        </div>
 
</Draggable>
</div>

)
} 

else if (props.track){

     let hotel_obj={
     
          VenueName: props.hotel.venueName,
          venueCost: props.hotel.venueCost,
          venueContact: props.hotel.venueContact 
     }

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
     
                   <span> Venue Cost : {props.hotel.venueCost} $ </span> &nbsp;&nbsp;  <br></br>
                   
                   <span> Venue Contact : {props.hotel.venueContact}  </span> &nbsp;&nbsp;  
     
     
                   <br></br>
                   
     
             </div>
             <div>
                  <Button onClick={()=> {props.hotelCallback(hotel_obj)}} > Select</Button>  &nbsp;&nbsp;
                  <Button onClick={()=>props.falplace(false)}> Cancel </Button>
             </div>
             </div>
             </Draggable>
     </div> 
     
     )
     }
     

}
export default Modall;