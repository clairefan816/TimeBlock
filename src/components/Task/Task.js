import React, {Component} from 'react';
import './Task.css'

class Task extends Component {
    render(){
        const { Tasks, TaskColors, PickedColor } = this.props.taskData;
        const { onSelectTaskClick } = this.props;
        console.log(Tasks);
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
        </div>
        )
    }
}

export default Task;