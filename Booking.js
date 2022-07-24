import react, { useEffect, useRef } from 'react'

import Select from 'react-select'

import { useState } from 'react';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button'

import './style.css'
import Axios from "axios";

import './style.css';

import 'react-calendar/dist/Calendar.css';

import Modall from './Modall';

function Booking() 
{

   const [place ,updatePlace]= useState({
     name:"",
     userClick:'false',
     onchange:'false'
   }); 
  
  const [getData, setGetdata] = useState([])
  const [getFood, updateFood] = useState()
  

  //const [hotelImage,setHotelImage]=useState(false)
  const [selectedFood, setSelectedFood] = useState([]); 

  const [imagePath,updateImagePath]=useState({
    keepingPath:"",
    cost:"",
    name:"",
    ingredient:""
  })
  const [placeInformation, updatePlaceInformation]=useState({})
  const [clickFood, updateClickFood]=useState()
  const [changeState, updateChangeState] = useState(false)
  const [ selectedData, setSelectedData]=useState({
   
    event_Type:"",
    place_Category:"",
    date:"",
  })

  
 const [ assignHotelData,setAssignHotelData]=useState({})
 const [ assignFoodData,setAssignFoodData]=useState({})
  


  const eventType = [
    {
        label: " select event here",
       
      },  
    {
      label: " Birthday",
     
    }, 
    {
      label: "Marrige",
     
    }, 
    {
      label: "Gettogether",
     
    },
  ];

  const venueType = [
    {
        category: " select venue category",
       
      }, 
    {
      category: " Open Air",
     
    }, 
    {
      category: "Indoor",
     
    }, 
   
  ];
  

   
  // retrieve hotel info
  useEffect(()=>{
  

    Axios.get("http://localhost:8080/place")
 

    .then((response) =>{

      
      const data = response.data;
      //console.log("retrieve placeinfo inside response.data",data);

          setGetdata(data);
        
        
               }) 
  
              .catch((err)=>{
                            alert("error occured to retrieve data");
                            })
  
  },[])


  // collect food item data

  useEffect(()=>{
  
    Axios.get("http://localhost:8080/food")
 
    .then((response) =>{

       const datta = response.data;
         
          updateFood(datta);
               
               }) 
  
              .catch((err)=>{
                            alert("error occured to retrieve  food data");
                            })
          },[])

const sayedur = () => {
  var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
     
    if(month < 10)
    {
        month = '0' + month.toString();
         //console.log("month <10",month);
    }
    if(day < 10)
        day = '0' + day.toString();
    
    var minDate= year + '-' + month + '-' + day;
   return minDate;

  };
  

const selectPlaceName=(event)=>{
          event.preventDefault();
                    
            updatePlace(prevState => (
              { ...prevState, name: event.target.value }
              
              ));

              updatePlace(prevState => (
                { ...prevState, userClick: true}
                
                ));
       }
      
      function placeClick(pinformation){
        
                        
                  updatePlaceInformation(( prevState)=>(
                {...prevState,
                  venueImage:pinformation[0].venueImage,
                  venueName:pinformation[0].venueName,
                    venueCost:pinformation[0].venueCost,
                    venueContact:pinformation[0].venueContact
                }))

                  updateChangeState(true)    

          }

         const placeImage=()=> {  
           
            if(place.userClick===true){
          let img = getData.filter(function (item) {
           //console.log("item",item);
           // return item.venueName === place.name ? item.venueImage : '';
             return (item.venueName === place.name)
          })
        
        return (
           <div >
             <button onClick={()=> placeClick(img)}  >
            <img  style={{width:"50%",marginTop:'10px',height:"150px",padding:"5px",marginRight:"130px"}} src={window.location.origin + '/image/'+ img[0].venueImage}
               /> 
             </button>     <br></br>
            <span> Venue Name: {img[0].venueName}</span>  <br></br> &nbsp;&nbsp;
            <span> Venue Cost: {img[0].venueCost}$</span>  <br></br> &nbsp;&nbsp;
            <span> Venue Contact: {img[0].venueContact}</span>  
            
            </div>  
          )
         } //end of if  plac.usrClk
      }  //end of placeImage             
      
        

        if(getFood!=null)
        {
        var opt =  getFood.map((element) => (
                      
          {label:element.foodName,value:element.foodCost,description:element.description, foodImage:element. foodImage}
          
         ))
      
        }
 
      var j;
      const getvalue=(e)=>{
        
        console.log("enter in event", e);

        setSelectedFood(e)

        updatePlace(prevState => (
          { ...prevState, onchange: true}
          
          ));
  
      } // end of get value

         // food image
 const imageClick=(event)=>{
    
   var val=event.currentTarget.value;
   var label=event.currentTarget.name
   var  element=event.currentTarget.id
  
  var path= event.target.src;
   var arrayOne= path.slice(32);
  
   
     updateImagePath(( prevState)=>(
   {...prevState,
    keepingPath:arrayOne
  
  }
   ))
   updateImagePath(( prevState)=>(
    {...prevState,cost:val,name:label,ingredient:element}
    ))
    updateChangeState(false);

    updateClickFood(true)
 }
const displayFood = () => {
  return (
    <div  style={{display:"flex"}}>
      {  selectedFood.map((sf) => {
       // console.log("sf",sf);
    return (<div style={{}}>
<button style={{width:"45%",marginTop:'10px',height:"150px",padding:"5px",marginRight:"130px"}} 
      
      onClick={imageClick} id={sf.description} name={sf.label} value={sf.value}> <img style={{width:"100%",height:"100%"}}  src={'foodImage/'+ sf.foodImage} 
     
    /> </button>< br></br>
       
       <span> Food Ingredient: {sf.description} </span> &nbsp;&nbsp;<br></br><br></br>
        <span> Food Cost : {sf.value} $ </span> &nbsp;&nbsp;
       </div>)})}
      </div>
  )

}
// receive event type


const programm=(e)=>{

  //console.log("inside event type",e.target.value);
  setSelectedData((prevState)=>(
    {...prevState, event_Type:e.target.value}
  ))
} 

const place_Mood=(e)=>{

  //console.log("inside event type",e.target.value);
  setSelectedData((prevState)=>(
    {...prevState, place_Category:e.target.value}
  ))
} 

// selected venue name
//receive date:
const date=(e)=>{

   setSelectedData((prevState)=>(
    {...prevState, date:e.target.min}
  ))
} 

// selected food details data
const food_Data=(food_details)=>{
  setAssignFoodData(food_details)

}

const hotel_Data=(hotels_details)=>{
  setAssignHotelData(hotels_details)
}

let hotel_Food = Object.assign(assignHotelData, assignFoodData);
let total_Data= Object.assign(hotel_Food, selectedData);
console.log("total data",total_Data)

 const handleSubmit=(e)=>{
 
   
Axios.post("http://localhost:8080/Booking",{
     

      event_Type: total_Data.event_Type ,  
      VenueName:total_Data.VenueName,
      venueCost:total_Data.venueCost,
      venueContact:total_Data.venueContact,
      place_Category:total_Data.place_Category,
      date:total_Data.date,
      item:total_Data.item,
      ingredient:total_Data.ingredient,

      amount:total_Data.amount,
      cost:total_Data.cost
      
   })
 
    .then((resp) =>{

        alert("selected data sucessfully inserted");
                 
               }) 
  
              .catch((err)=>{
                            alert("error occured to retrieve  food data",err);
                            })
    }

 
   
  return (
    <div >

    
            
      <h1> Details of Event Booking</h1>
  
     
     <div>
               <label> Event Type:</label>
                <select onClick={programm} required>
                    
                    { eventType.map((name) => (
                      
                      <option >{name.label}</option>
                    ))}
                </select>
     </div>  
     
  
     
       <div>
               <label>Venue Name:</label>
                <select onClick={selectPlaceName} required>
                    
                    { getData.map((option) => (
                      
                      <option >{option.venueName}</option>
                    ))}
                </select>
                
      
       </div>  
        
             <div>
               <label> Venue Type:</label>
                <select onClick={place_Mood} required>
                    
                    { venueType.map((venueSelection) => (
                      
                      <option >{venueSelection.category}</option>
                    ))}
                </select>
        </div>

            <div>
                  <label> Select Booking Date :</label>
                  <input type="date"  min={sayedur()} onClick={date}required/><br/>

            </div>
   
        <label >  selected Food:</label> 
        
           <Select  
           options={opt}
           isMulti={true}
            onChange={getvalue}
            isSearchable={true}
            placeholder={"select your food item"}
             clearValue={true}
required/>
       
        
         

        <div  style={{display:"flex"}}>
        <span > { place.userClick? placeImage():'' } </span> 

        

          <div> {displayFood()}</div>

        
        </div>  

        
        {changeState? <Modall  hotelCallback={hotel_Data} hotel={placeInformation} track={changeState} falplace={updateChangeState}/>:null}

        {clickFood? <Modall parentCallback={food_Data} image={imagePath} track={changeState} falfoo={updateClickFood}  />:null}
        <div ><br></br>
          
          <Button style={{width:"100px"}} type="submit" onClick={handleSubmit}> Submit</Button> 
          </div>
           
   </div>


  )
 }
export default Booking;