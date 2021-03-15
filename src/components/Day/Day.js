import React, {Component} from 'react';
import './Day.css'

class Day extends Component {
    constructor(props){
        super(props);
        this.state = {
            Slots:[["00:00","00-first-half", "00-second-half"], ["01:00","01-first-half", "01-second-half"], ["02:00","02-first-half", "02-second-half"]],
        }
    }

    render(){
        return(
        <div className="Day">
            <div className="Today">
                I am the Day Component
            </div>
            <div>
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
            </div>
        </div>
        )
    }
}

export default Day;