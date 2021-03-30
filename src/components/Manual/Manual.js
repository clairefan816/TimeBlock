import React, {Component} from 'react';
import './Manual.css';

class Manual extends Component {
    render(){
        return(
        <div className="ManualPage">
            <h2>Mark/Override timeslot:</h2>
            <ul>
                <ol>1. Click one of the time slots</ol>
                <ol>2. Click one of the colored tasks(Except delete)</ol>
            </ul>
            <h2>Delete timeslot:</h2>
            <ul>
                <ol>1. Click one of the time slots</ol>
                <ol>2. Click one of the blue "Delete" task</ol>
            </ul>
            <h2>Libraries</h2>
            <h3>Moment.js</h3>
            <ul>
                <ol>install: npm install moment --save</ol>
                <ol>Parse, validate, manipulate, and display dates and times in JS</ol>
            </ul>
            <h3>Framer motion</h3>
            <ul>
                <ol>install: npm install framer-motion</ol>
                <ol>A motion libary for React</ol>
            </ul>
        </div>
        )
    }
}

export default Manual;