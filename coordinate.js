import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Draggable from "react-draggable";
//import { PropTypes } from 'react';322a
function Modall(props) 
{
     const [coordinate ,setCoordinate]= useState({
          diffX:0,
          diffY:0,
          styles:{},
          dragging:false
     })
    

    //console.log("inside prop",props)
    //console.log("inside prop.track",props.track);
   //var lenth= Object.keys(props.food.length());
   //console.log("length of food array",lenth);

   
    const dragStart=(e)=> {
     setCoordinate({
         diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
         diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
         dragging: true
     });
   //console.log("dragstart",e.screenX - e.currentTarget.getBoundingClientRect().left)
 }

 const dragging=(e)=>
 {
   
      if(coordinate.dragging) {
       
        console.log("enter dragging")

        console.log("diffX",coordinate.diffX)
        console.log("diffy",coordinate.diffY)

         console.log("e screenX",e.screenX)
         console.log("e screeny",e.screenY)

          var leftt = e.screenX - coordinate.diffX;
          var topp = e.screenY - coordinate.diffY;

         
          console.log("leftt",leftt)
          console.log("topp",topp)

          setCoordinate({
              styles: {
                  left: leftt,
                  top: topp
               }
          });
         
      }
     
  }
  //console.log("top",coordinate.styles.top)
 // console.log("left",coordinate.styles.left)

  const dragEnd=(e)=> {
     setCoordinate({
         dragging: false
     });
 }
   // console.log("top",coordinate.styles.top);
 //const falseState=(e)=>{}
 if (props.track==false){
return(
    
 <div   className='Dialog' style={coordinate.styles} onMouseDown={dragStart} onMouseMove={dragging} onMouseUp={dragEnd} >


     
     <div  >
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
 

</div>

)
} 

else if (props.track){
     return(
     
     
     
     <div >
         
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
           
     </div> 
     
     )
     }
     

}
export default Modall;