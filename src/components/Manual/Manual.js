import React, {Component} from 'react';
import './Manual.css';

class Manual extends Component {
    render(){
        return(
        <div className="ManualPage">
            <h2>Features:</h2>
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
            </ul>
        </div>
        )
    }
}

export default Manual;