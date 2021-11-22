import React, { Component, useState } from 'react';
import { Navbar, Nav, Container }from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import axios from 'axios';
//import './App.css';
//const baseURL='https://reqres.in';
/*
*/






class Flight extends React.Component {
    state={
        message: "tmp this is where the flight goes"
    }
    
    componentDidMount(){
        axios.get('http://localhost:5000/signin1')
            .then((res)=>{
                console.log(res.data.message);
                const message = res.data.message;
                this.setState({message});
            });
    }


   

//     displayFlight(info){
  //      $("#Flight").html("ID: "+info.id) 
    //  }
      





    render() { 
        return <div>
        
        <body >
            <div class="row">
                <div class="col-sm-3 col-md-3 col-lg-3"></div>
                
                <div class="col-sm-6 col-md-6 col-lg-6">
       <div className={"borderr"}>
                <div >
            
                <div >
                <h1>Flights</h1>
                </div>
                <div>
                <div >
                    <h2> 
        { this.state.message }</h2>
                </div>
                <div >
        
                    </div>
                    </div>
                  <div >
                  
                  </div>
               
          </div>
        </div>
     </div>
        <div class="col-sm-3 col-md-3 col-lg-3"></div>
      </div>
    </body>
    
    
    
            </div>;
    
 }
}
export default Flight;




