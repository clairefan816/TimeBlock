import React, {Component} from 'react';
import './Day.css'

class Day extends Component {


    // handlerLastClickOfSlot = (slotIndex) => {
    //     this.setState({
    //         LastClickOfSlot : slotIndex
    //     });
    //     console.log(this.state.LastClickOfSlot)
    // }

    render(){
        const {TimeTags, TimeSlots, LastClickOfSlot} = this.props.dayData
        return(
        <div className="Day">
            <div className="Today">
                I am the Day Component
            </div>
            <div className="Calender-Container">
                <div className="TimeTags-Container">
                    {TimeTags.map((timetag, timeIndex)=>{return(<div key={timeIndex} className="timetag">{timetag}</div>)})}
                </div>
                <div className="Timeslots-Container">
                    {TimeSlots.map((timeslot, slotIndex)=>{
                        let slotcolor = timeslot.color;
                        return(<div key={slotIndex} className="timeslot" 
                        style={{backgroundColor:slotcolor}} 
                        // onClick={() => this.handlerLastClickOfSlot(slotIndex)}
                        >{timeslot.text}</div>)})}
                </div>
            </div>
        </div>
        )
    }
}

export default Day;