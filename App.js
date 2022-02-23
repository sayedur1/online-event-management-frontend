import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './my-componant/Navbar';
import Register from './my-componant/Register';
import Home from './my-componant/Home';
//import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Switch  } from 'react-router-dom';

import Footer from './my-componant/Footer';
import Login from './my-componant/Login';
import Admin from './my-componant/Admin';
import Adminpanel from './my-componant/Adminpanel';
import Venue from './my-componant/Venue';
import userPanel from './my-componant/userPanel';
import venueManagement from './my-componant/venueManagementt';



function App() {

   

  return (

    <Router>
     
    <div className="App">
      
            
      <div> <h1 style={{ color: ' green' }}>Online Event Management System </h1> </div>
      
 
       
        <div>
         <Navbar/>
            <Switch>
                <Route path="/" component={Home}exact/>
                <Route path="/Register"  component={Register} exact/>
                <Route path="/Login"   component={Login} exact/> 

                <Route path="/Admin" component={Admin} exact />
                {/**<Route path="/AdminPanel" component={Apanel}/>*/}
                <Route path="/Adminpanel" component={Adminpanel}/>
                {/*<Route path="/Venue" component={Venue}/>*/}
                <Route path="/userPanel" component={userPanel}/>
                <Route path="/venueManagement" component={venueManagement}/>


              </Switch>
            
              </div> 
          
             <Footer/>



       
     
   
      
    </div>

    </Router>
   

  );
  
}

export default App;
