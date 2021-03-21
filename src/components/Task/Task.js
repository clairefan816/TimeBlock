import React, {Component} from 'react';
import './Task.css'

class Task extends Component {
    render(){
        const { TimeTags, TimeSlots, LastClickOfSlot, Tasks, TaskColors, PickedColor } = this.props.taskData;
        const { onSelectTaskClick, onClearTaskClick } = this.props;
        
        return(
        <div className="Task">
            <div className="TaskContent">
                {Tasks.map((task, taskIndex)=>{
                    let str = TaskColors[taskIndex]
                    return (
                        <div className="Task-Block" style={{backgroundColor:str}}
                        onClick={()=>onSelectTaskClick(taskIndex)}>
                            {task}
                        </div>
                    )
                })}
            </div>
            {/* <button onClick={()=>onClearTaskClick()}>Delete</button> */}
            <div>{PickedColor}</div>
        </div>
        )
    }
}

export default Task;