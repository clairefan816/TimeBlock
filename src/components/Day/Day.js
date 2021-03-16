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
        const { TimeTags, TimeSlots, LastClickOfSlot } = this.props.dayData
        const { Task, TaskColors} = this.props.taskData
        const { onSelectClick } = this.props;

        // console.log(TaskColors[0])
        return(
        <div className="Day">
            <div className="Today">
                {LastClickOfSlot}
            </div>
            <div className="Calender-Container">
                <div className="TimeTags-Container">
                    {TimeTags.map((timetag, timeIndex)=>{return(<div key={timeIndex} className="timetag">{timetag}</div>)})}
                </div>
                <div className="Timeslots-Container">
                    {TimeSlots.map((timeslot, slotIndex)=>{
                        let strColor = (slotIndex == LastClickOfSlot) ? "Purple":"White";
                        return(<div key={slotIndex} className="timeslot" 
                        onClick={()=>onSelectClick(slotIndex)}
                        style={{backgroundColor:strColor}}
                        >{timeslot.text}</div>)
                        })}
                </div>
            </div>
        </div>
        )
    }
}

export default Day;