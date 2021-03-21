import React, {Component} from 'react';
import TimeSlot from './../TimeSlot/TimeSlot'
import './Day.css'

class Day extends Component {


    // handlerLastClickOfSlot = (slotIndex) => {
    //     this.setState({
    //         LastClickOfSlot : slotIndex
    //     });
    //     console.log(this.state.LastClickOfSlot)
    // }

    render(){
        const { TimeTags, TimeSlots, LastClickOfSlot, Tasks, TaskColors, PickedColor } = this.props.dayData
        // const { Task, TaskColors, PickedColor} = this.props.taskData
        const { onSelectClick } = this.props;
        console.log(onSelectClick)
        // console.log(this.props)
        // console.log(TimeTags);
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
                        //备选颜色：#FF96A5（粉色）， #66DCEC（蓝色），#A39D9E（灰色）
                        let strColor = (slotIndex === LastClickOfSlot) ? "#66DCEC" : timeslot.color;
                        return(<TimeSlot slotIndex={slotIndex} slotIndex={slotIndex} timeslot={timeslot} onSelectClick={onSelectClick} strColor={strColor}/>)
                        })}
                </div>
            </div>
        </div>
        )
    }
}

export default Day;