import React, {Component} from 'react';
import './Manual.css';

class Manual extends Component {
    render(){
        return(
        <div className="ManualPage">
            <h3>Mark/Override timeslot:</h3>
            <ul className="list">
                <ol>Click one of the time slots</ol>
                <ol>Click one of the colored tasks(Except delete)</ol>
            </ul>
            <h3>Delete timeslot:</h3>
            <ul className="list">
                <ol>Click one of the time slots</ol>
                <ol>Click one of the blue "Delete" task</ol>
            </ul>
        </div>
        )
    }
}

export default Manual;