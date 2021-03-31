import React, {Component} from 'react';
import { motion } from "framer-motion";
import './TaskPanel.css'

class TaskPanel extends Component {
    render(){
        // const { TimeTags, TimeSlots, LastClickOfSlot, Tasks, TaskColors, PickedColor } = this.props.taskData;
        // const { onSelectTaskClick, onClearTaskClick } = this.props;
        const { Tasks, TaskColors } = this.props.taskData;
        const { onSelectTaskClick, onClearTaskClick } = this.props;
        
        return(
        <div className="TaskPanel">
            <div className="TaskContent">
                {Tasks.map((task, taskIndex)=>{
                    let str = TaskColors[taskIndex]
                    return (
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }} className="Task-Block" style={{backgroundColor:str}}
                        onClick={()=>onSelectTaskClick(taskIndex)}>
                            {task}
                        </motion.div>
                    )
                })}
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="Task-Block" style={{backgroundColor:"aliceblue"}}
                        onClick={()=>onClearTaskClick()}>
                            Delete
                </motion.div>
                {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="Task-Block" style={{backgroundColor:"Green"}}>
                            Add New
                </motion.div> */}
            </div>
            
            {/* <div>{PickedColor}</div> */}
        </div>
        )
    }
}

export default TaskPanel;