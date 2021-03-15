import React, {Component} from 'react';
import './Task.css'

class Task extends Component {
    constructor(props){
        super(props);
        this.state = {
            Tasks : ["Sleep", "Reading", "Sleep", "Reading","Sleep", "Reading"],
            Colors: ["Black", "Red", "Orange", "Yellow", "Blue", "Pink"]
        }
    }
    render(){
        return(
        <div className="Task">
            <div className="TaskContent">
                {this.state.Tasks.map((task, index)=>{
                    let str = this.state.Colors[index]
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