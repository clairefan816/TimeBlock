import React, {Component} from 'react';
import { motion } from "framer-motion"
// import './TimeSlot.css

class TimeSlot extends Component {
    constructor(props){  
        super(props);  
    } 
    render(){
        return(
            <div key={this.props.slotIndex} className="timeslot" onClick={()=>this.props.onSelectClick(this.props.slotIndex)} style={{backgroundColor:this.props.strColor}}>
                    {this.props.timeslot.text}
            </div>
        );
    }
}
export default TimeSlot;