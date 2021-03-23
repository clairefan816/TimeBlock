import React, {Component} from 'react';
import TaskSlot from "./TaskSlot/TaskSlot"
import './TaskPanel.css'

class TaskPanel extends Component {
    render(){
        const { TimeTags, TimeSlots, LastClickOfSlot, Tasks, TaskColors, PickedColor } = this.props.taskData;
        const { onSelectTaskClick, onClearTaskClick } = this.props;
        
        return(
        <div className="TaskPanel">
            <div className="TaskContent">
                {Tasks.map((task, taskIndex)=>{
                    let str = TaskColors[taskIndex]
                    return (
                        <TaskSlot str={str} task={task} taskIndex={taskIndex} onSelectTaskClick={onSelectTaskClick}/>
                    )
                })}
            </div>
            {/* <button onClick={()=>onClearTaskClick()}>Delete</button> */}
            <div>{PickedColor}</div>
        </div>
        )
    }
}

export default TaskPanel;