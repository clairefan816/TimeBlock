import React, {Component} from 'react';
import './Task.css'

class Task extends Component {
    render(){
        const { Tasks, TaskColors } = this.props.taskData;
        return(
        <div className="Task">
            <div className="TaskContent">
                {Tasks.map((task, index)=>{
                    let str = TaskColors[index]
                    return (
                        <div className="Task-Block" style={{backgroundColor:str}}>
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