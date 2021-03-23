import React, {Component} from 'react';
import { motion } from "framer-motion";
import './TimeSlot.css';

class TimeSlot extends Component {

    render(){
        const {slotIndex, onSelectClick, timeslot, strColor} = this.props;
        return(
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} key={slotIndex} className="timeslot" onClick={()=>onSelectClick(slotIndex)} style={{backgroundColor:strColor}}>
                    {timeslot.text}
            </motion.div>

        );
    }
}
export default TimeSlot;