import React, { Component } from 'react';
import { Navbar, Nav, Container, Col, Row }from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import '../App.css';

class MainPage extends React.Component {
    render() { 
        return <div >
        <div class="row">
          <div class="col-sm-3 col-md-3 col-lg-3"></div>

                
          <div class="col-sm-6 col-md-6 col-lg-6">
          <div className={"borderr"}>  
        <Container>
          <Row className="justify-content-md-center">
              <Col xs lg="2">
               </Col>
                 <Col md="auto">
              <Link to='/Flight'>  <button type="submit" className="btn btn-danger" style={{marginTop: '30px'}}>Search for Flights!</button></Link>
              </Col>
            <Col xs lg="2">
            </Col>
        </Row>

        <Row className="justify-content-md-center">
              <Col xs lg="2">
               </Col>
                 <Col md="auto">
                 <Link to='/History'>  <button type="submit" className="btn btn-danger" style={{marginTop: '30px'}}>See your History</button></Link>
              </Col>
            <Col xs lg="2">
            </Col>
        </Row>

        <Row className="justify-content-md-center">
              <Col xs lg="2">
               </Col>
                 <Col md="auto">
                 <Link to='/Reservations'>  <button type="submit" className="btn btn-danger" style={{marginTop: '30px'}}>See your Reservations</button></Link>
              </Col>
            <Col xs lg="2">
            </Col>
        </Row>
               
      </Container>
</div>
</div>


                <div class="col-sm-3 col-md-3 col-lg-3"></div>
    </div>

        </div>;
 }
}
 
export default MainPage;
