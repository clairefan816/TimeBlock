import React, {Component, useState, useEffect} from 'react';
import './Report.css';
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { useAppContext } from "../../libs/contextLib";

export default function Report() {
    const { isAuthenticated, curUser } = useAppContext();
    useEffect(() => {
        OnLoad();
      }, []);
    
    function OnLoad() {
        console.log(isAuthenticated);
        console.log(curUser);
        }
    return(
        <div className="ReportPage">
        <h1>Report</h1>
        <MDBContainer>
        {isAuthenticated ? (
            <h3 className="mt-5">My User's Weekly Report</h3>
        ) : (
            <h3 className="mt-5">Average User's Weekly Report</h3>
        )}
        {/* <Line data={
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
                } options={{ responsive: true }} /> */}
        </MDBContainer>
        </div>
    )
}


// class Report extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             index : 0,
//             dataLine: {
//                 labels: ["4am/Monday", "8am/Tuesday", "12pm/Wednesday", "4pm/Thursday", "8pm/Friday", "12am/Saturday", "4am/Sunday"],
//                 datasets: [
//                   {
//                     label: "Daily Report",
//                     fill: true,
//                     lineTension: 0.3,
//                     backgroundColor: "rgba(225, 204,230, .3)",
//                     borderColor: "rgb(205, 130, 158)",
//                     borderCapStyle: "butt",
//                     borderDash: [],
//                     borderDashOffset: 0.0,
//                     borderJoinStyle: "miter",
//                     pointBorderColor: "rgb(205, 130,1 58)",
//                     pointBackgroundColor: "rgb(255, 255, 255)",
//                     pointBorderWidth: 10,
//                     pointHoverRadius: 5,
//                     pointHoverBackgroundColor: "rgb(0, 0, 0)",
//                     pointHoverBorderColor: "rgba(220, 220, 220,1)",
//                     pointHoverBorderWidth: 2,
//                     pointRadius: 1,
//                     pointHitRadius: 10,
//                     data: [65, 59, 80, 81, 56, 55, 40]
//                   },
//                   {
//                     label: "Weekly Report",
//                     fill: true,
//                     lineTension: 0.3,
//                     backgroundColor: "rgba(184, 185, 210, .3)",
//                     borderColor: "rgb(35, 26, 136)",
//                     borderCapStyle: "butt",
//                     borderDash: [],
//                     borderDashOffset: 0.0,
//                     borderJoinStyle: "miter",
//                     pointBorderColor: "rgb(35, 26, 136)",
//                     pointBackgroundColor: "rgb(255, 255, 255)",
//                     pointBorderWidth: 10,
//                     pointHoverRadius: 5,
//                     pointHoverBackgroundColor: "rgb(0, 0, 0)",
//                     pointHoverBorderColor: "rgba(220, 220, 220, 1)",
//                     pointHoverBorderWidth: 2,
//                     pointRadius: 1,
//                     pointHitRadius: 10,
//                     data: [28, 48, 40, 19, 86, 27, 90]
//                   }
//                 ]
//               }
//         }
//     }
//     render(){
//         const { curUser } = useAppContext();
//         return(
//         <div className="ReportPage">
//         <h1>Report</h1>
//         <MDBContainer>
//         {isAuthenticated ? (
//             <h3 className="mt-5">Average User's Weekly Report</h3>
//         ) : (
//             <h3 className="mt-5">My Weekly Report</h3>
//         )}
//         <Line data={this.state.dataLine} options={{ responsive: true }} />
//       </MDBContainer>
//             {/* <Container>
//                 <Row className='show-grid'>
//                     <Col md={4}>
//                     <Card style={{ width: '18rem', height: '30rem' }}>
//                         <Card.Img variant="top" src={ INSTRUCTION1 } />
//                         <Card.Body>
//                             <Card.Title>Mark/Delete timeslot</Card.Title>
//                             <Card.Text>
//                             Mark Function: Click one of the time slots, then click one of the colored tasks(Except delete).
//                             Delete Function: Click one of the time slots, then click the blue "Delete" task.
//                             </Card.Text>
//                         </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col md={4}>
//                     <Card style={{ width: '18rem', height: '30rem' }}>
//                         <Card.Img variant="top" src={ INSTRUCTION2 }  />
//                         <Card.Body>
//                             <Card.Title>Next/Previous day</Card.Title>
//                             <Card.Text>
//                             Still in progress
//                             </Card.Text>
//                         </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col md={4}>
//                     <Card style={{ width: '18rem', height: '30rem' }}>
//                         <Card.Img variant="top" src={ INSTRUCTION3 }  />
//                         <Card.Body>
//                             <Card.Title>Login/Signup/Session</Card.Title>
//                             <Card.Text>
//                             Still in progress
//                             </Card.Text>
//                         </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container> */}
//         </div>
//         )
//     }
// }
