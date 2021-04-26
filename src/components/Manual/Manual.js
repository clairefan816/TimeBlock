import React, {Component} from 'react';
import './Manual.css';
import Carousel from 'react-bootstrap/Carousel'
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

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
            index : 0,
            dataLine: {
                labels: ["4am/Monday", "8am/Tuesday", "12pm/Wednesday", "4pm/Thursday", "8pm/Friday", "12am/Saturday", "4am/Sunday"],
                datasets: [
                  {
                    label: "Daily Report",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(225, 204,230, .3)",
                    borderColor: "rgb(205, 130, 158)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(205, 130,1 58)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40]
                  },
                  {
                    label: "Weekly Report",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(184, 185, 210, .3)",
                    borderColor: "rgb(35, 26, 136)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(35, 26, 136)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [28, 48, 40, 19, 86, 27, 90]
                  }
                ]
              }
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
        <h1>Report</h1>
        <MDBContainer>
        <h3 className="mt-5">My Daily/Weekly Report</h3>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
            {/* <Container>
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
            </Container> */}
        </div>
        )
    }
}

export default Manual;