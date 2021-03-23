import React, {Component} from 'react';
import { motion } from "framer-motion";
import './DayPanel.css'

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
        let today = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        return(
        <div className="Day">
            <div className="Today">
                {today}
            </div>
            <div className="Calender-Container">
                <div className="TimeTags-Container">
                    {TimeTags.map((timetag, timeIndex)=>{return(<div key={timeIndex} className="timetag">{timetag}</div>)})}
                </div>
                <div className="Timeslots-Container">
                    {TimeSlots.map((timeslot, slotIndex)=>{
                        //备选颜色：#FF96A5（粉色）， #66DCEC（蓝色），#A39D9E（灰色）
                        let strColor = (slotIndex === LastClickOfSlot) ? "#66DCEC" : timeslot.color;
                        return(
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} key={slotIndex} className="timeslot" onClick={()=>onSelectClick(slotIndex)} style={{backgroundColor:strColor}}>
                                {timeslot.text}
                            </motion.div>)
                        })}
                </div>
            </div>
        </div>
        )
    }
}

export default Day;