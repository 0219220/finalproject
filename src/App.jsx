import React from 'react';
import Routes1 from './Routes';import { Navbar, Nav, Container, Col, Row }from 'react-bootstrap'
import SignIn from './components/SignIn';
import MainPage from './components/MainPage';
import HotelRes from './components/HotelRes';
import Flight from './components/Flight';
import History from './components/History';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import {Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

<Navbar bg="dark" variant="dark">

    <Navbar.Brand >GDL2Europe</Navbar.Brand>
    <Nav className="me-auto">
    <Link to="/"><Navbar.Brand href="#Home" >Home</Navbar.Brand></Link>
    <Link to="/Flight"><Navbar.Brand href="#flights">Flights</Navbar.Brand></Link>    
    <Link to="/Reservations"> <Navbar.Brand href="#Reservations">Reservations</Navbar.Brand></Link>
    <Link to="/History"> <Navbar.Brand href="#History">History</Navbar.Brand></Link>
 
    </Nav>
  </Navbar>
    


  <Routes>
            <Route path='/' element={<MainPage/>}/> 
            <Route path='/SignIn' element={<SignIn/>}/> 
            <Route path='/Reservations' element={<HotelRes/>}/> 
            <Route path='/History' element={<History/>}/> 
            <Route path='/Flight' element={<Flight/>}/>
 
            
        </Routes>
   

    </div>
  );
}

export default App;
