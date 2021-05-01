import React, { useState } from "react";
// import { defaultValue } from "./defaultValue";
// import { DayPanel } from "./DayPanel";
import { useAppContext } from "../libs/contextLib";
import { motion } from "framer-motion";
import "./Calendar.css";

export default function Calendar() {
    const { curDate, setCurDate } = useAppContext();

    // function renderDay(){
    //     console.log(curDate)
    //     return(
    //         <div className="Day">
    //             <div className="DateDisplay">
    //                 <div></div>
    //                 <div className="Today">
    //                     <button onClick={()=>setCurDate(curDate.add(1, 'day'))}> Previous </button>
    //                     { curDate.format('dddd MMM Do, YYYY') }
    //                     <button onClick={()=>setCurDate(curDate.add(-1, 'day'))}> Next </button>
    //                 </div>
    //             </div>
                
    //             <div className="Calender-Container">
    //                 <div className="TimeTags-Container">
    //                     {defaultValue.TimeTags.map((timetag, timeIndex)=>{return(<div key={timeIndex} className="timetag">{timetag}</div>)})}
    //                 </div>
    //                 <div className="Timeslots-Container">
    //                     {defaultValue.TimeSlots.map((timeslot, slotIndex)=>{
    //                         let strColor = (slotIndex === defaultValue.LastClickOfSlot) ? "azure" : timeslot.color;
    //                         return(
    //                             <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }} key={slotIndex} className="timeslot" onClick={()=>defaultValue.onSelectClick(slotIndex)} style={{backgroundColor:strColor}}>
    //                                 {timeslot.task_text === null ? timeslot.text : timeslot.task_text}
    //                             </motion.div>)
    //                         })}
    //                 </div>
    //             </div>
    //         </div>
    //         )
    // }

    // function renderTask(){
    //     return(
    //         <div className="TaskPanel">
    //             <div className="TaskContent">
    //                 {defaultValue.Tasks.map((task, taskIndex)=>{
    //                     let str = defaultValue.TaskColors[taskIndex]
    //                     return (
    //                         <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }} className="Task-Block" style={{backgroundColor:str}}
    //                         onClick={()=>defaultValue.onSelectTaskClick(taskIndex)}>
    //                             {task}
    //                         </motion.div>
    //                     )
    //                 })}
    //                 <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="Task-Block" style={{backgroundColor:"aliceblue"}}
    //                         onClick={()=>defaultValue.onClearTaskClick()}>
    //                             Delete
    //                 </motion.div>
    //                 {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="Task-Block" style={{backgroundColor:"Green"}}>
    //                             Add New
    //                 </motion.div> */}
    //             </div>
                
    //             {/* <div>{PickedColor}</div> */}
    //         </div>
    //     )
    // }
    return (
        <div className="Calendar">
            {/* {DayPanel()} */}
            {/* {TaskPanel()} */}
        </div>
    );
}