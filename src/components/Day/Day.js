import React, {Component} from 'react';
import './Day.css'

class Day extends Component {
    constructor(props){
        super(props);
        this.state = {
            TimeTags : ["00:00", "01:00", "02:00"],
            // TimeSlots:["00-first-half", "00-second-half", "01-first-half", "01-second-half", "02-first-half", "02-second-half"],
            // SlotColors: ["Black", "Red", "Orange", "Yellow", "Blue", "Pink"],
            TimeSlots:[
                {
                    text: "00-first-half",
                    color: "red"
                },
                {
                    text: "00-second-half",
                    color: null
                },
                {
                    text: "01-first-half",
                    color: "null"
                },
                {
                    text: "01-second-half",
                    color: "green"},
            ]
        }
    }

    render(){
        return(
        <div className="Day">
            <div className="Today">
                I am the Day Component
            </div>
            <div className="Calender-Container">
                <div className="TimeTags-Container">
                    {this.state.TimeTags.map((timetag, timeIndex)=>{return(<div key={timeIndex} className="timetag">{timetag}</div>)})}
                </div>
                <div className="Timeslots-Container">
                    {this.state.TimeSlots.map((timeslot, slotIndex)=>{
                        let slotcolor = timeslot.color;
                        return(<div key={slotIndex} className="timeslot" style={{backgroundColor:slotcolor}}>{timeslot.text}</div>)})}
                </div>
            </div>

            {/* <div>
                {this.state.Slots.map((timeTags,timeIndex)=>{
                    return (
                        <div key={timeIndex} className="Calender-Container">
                            {timeTags.map((timeSlots, slotIndex) => {
                                return (
                                    <div key={slotIndex} className="Left-Right-Slots">{timeSlots}</div>
                                )
                            })}    
                        </div>
                    )
                })}
            </div> */}
        </div>
        )
    }
}

export default Day;