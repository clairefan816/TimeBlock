import React, {Component} from 'react';
import './Manual.css';
import Carousel from 'react-bootstrap/Carousel'
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import INSTRUCTION1 from '../../instruction1.gif';
import INSTRUCTION2 from '../../instruction2.gif';
import INSTRUCTION3 from '../../instruction3.gif';

import ORGANIZE1 from '../../organize.jpg';
import ORGANIZE2 from '../../organize2.jpg';
import ORGANIZE3 from '../../organize3.jpg';


class Manual extends Component {
    constructor(props){
        super(props);
        this.state = {
            index : 0
        }
    }
    render(){
        return(
        <div className="ManualPage">
            <Carousel className="SlidContainer">
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={ ORGANIZE1 }
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Having trouble managing time?</h3>
                <h3>Use Time Journal</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src= { ORGANIZE2 }
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Stuggling with time management?</h3>
                <h3>Use Time Journal</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ ORGANIZE3 }
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Having no idea what to do next?</h3>
                <h3>Use Time Journal</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Features</h1>
            <Container>
                <Row className='show-grid'>
                    <Col md={4}>
                    <Card style={{ width: '18rem', height: '30rem' }}>
                        <Card.Img variant="top" src={ INSTRUCTION1 } />
                        <Card.Body>
                            <Card.Title>Mark/Delete timeslot</Card.Title>
                            <Card.Text>
                            Mark Function: Click one of the time slots, then click one of the colored tasks(Except delete).
                            Delete Function: Click one of the time slots, then click the blue "Delete" task.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                    <Card style={{ width: '18rem', height: '30rem' }}>
                        <Card.Img variant="top" src={ INSTRUCTION2 }  />
                        <Card.Body>
                            <Card.Title>Next/Previous day</Card.Title>
                            <Card.Text>
                            Still in progress
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                    <Card style={{ width: '18rem', height: '30rem' }}>
                        <Card.Img variant="top" src={ INSTRUCTION3 }  />
                        <Card.Body>
                            <Card.Title>Login/Signup/Session</Card.Title>
                            <Card.Text>
                            Still in progress
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


            {/* <h2>Features:</h2>
            <h4>Mark/Override timeslot</h4>
            <ul>
                <ol>1. Click one of the time slots</ol>
                <ol>2. Click one of the colored tasks(Except delete)</ol>
            </ul>
            <h4>Delete timeslot</h4>
            <ul>
                <ol>1. Click one of the time slots</ol>
                <ol>2. Click the blue "Delete" task</ol>
            </ul>
            <h4>Next/Previous day</h4>
            <ul>
                <ol>Still in progress</ol>
            </ul>
            <h4>Login/Signup/Session</h4>
            <ul>
                <ol>Still in progress</ol>
            </ul>
            <h2>Libraries:</h2>
            <h4>Bootstrap</h4>
            <ul>
                <ol>install: npm install react-bootstrap@1.4.0 react-icons@3.11.0 --save</ol>
                <ol>Bootstrap for React</ol>
            </ul>
            <h4>Moment.js</h4>
            <ul>
                <ol>install: npm install moment --save</ol>
                <ol>Parse, validate, manipulate, and display dates and times in JS</ol>
            </ul>
            <h4>Framer motion</h4>
            <ul>
                <ol>install: npm install framer-motion</ol>
                <ol>Animation libary for React</ol>
            </ul> */}
        </div>
        )
    }
}

export default Manual;