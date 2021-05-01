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
      const data1 = {
        index : 0,
        dataLine: {
            labels: ["Sleep", "Reading", "Study", "Exercise", "Gaming",],
            datasets: [
              {
                label: "Daily Report",
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
                data: [50, 30, 12, 27, 8]
              }
            ]
          }
        }
    const data2 = {
                    index : 0,
                    dataLine: {
                        labels: ["Sleep", "Reading", "Study", "Exercise", "Gaming",],
                        datasets: [
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
                            data: [60, 30, 42, 27, 18]
                          }
                        ]
                      }
                    }
    function OnLoad() {
        console.log(isAuthenticated);
        console.log(curUser);
        }
    return(
        <div className="ReportPage">
        <h1>Report</h1>
        <MDBContainer>
        {isAuthenticated ? (
            <div>
            <h3 className="mt-5">My Weekly Report</h3>
            <Line data={data1.dataLine} options={{ responsive: true }} />
            </div>
        ) : (
            <div>
            <h3 className="mt-5">Average User's Weekly Report</h3>
            <Line data={data2.dataLine} options={{ responsive: true }} />
            </div>
            
        )}
        
        </MDBContainer>
        </div>
    )
}
