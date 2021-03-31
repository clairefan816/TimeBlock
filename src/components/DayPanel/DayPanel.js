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
        // const { TimeTags, TimeSlots, LastClickOfSlot, Tasks, TaskColors, PickedColor } = this.props.dayData

        //console.log(this.props.dayData)
        const { TimeTags, TimeSlots, LastClickOfSlot } = this.props.dayData
        const { onSelectClick, onNextClick, onPreviousClick } = this.props;
        const { Today } = this.props.dayChanger;
        //console.log(Today);
        // let today = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        let today = Today.format('dddd MMM Do YY');
        //let tomorrow = Today.clone().add(1, 'day').format('dddd');
        //let yesterday = Today.clone().add(-1, 'day').format('dddd');
        return(
        <div className="Day">
            <div className="DateDisplay">
                <div></div>
                <div className="Today">
                    <button onClick={()=>onPreviousClick()}> Previous </button>
                    { today }
                    <button onClick={()=>onNextClick()}> Next </button>
                </div>
            </div>
            
            <div className="Calender-Container">
                <div className="TimeTags-Container">
                    {TimeTags.map((timetag, timeIndex)=>{return(<div key={timeIndex} className="timetag">{timetag}</div>)})}
                </div>
                <div className="Timeslots-Container">
                    {TimeSlots.map((timeslot, slotIndex)=>{
                        let strColor = (slotIndex === LastClickOfSlot) ? "azure" : timeslot.color;
                        return(
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }} key={slotIndex} className="timeslot" onClick={()=>onSelectClick(slotIndex)} style={{backgroundColor:strColor}}>
                                {timeslot.task_text === null ? timeslot.text : timeslot.task_text}
                            </motion.div>)
                        })}
                </div>
            </div>
        </div>
        )
    }
}

export default Day;