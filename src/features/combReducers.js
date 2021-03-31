import { combineReducers } from 'redux';
import dayChangeReducer from './dayChangeReducer';
import timeSlotReducer from './timeSlotReducer';
// import taskReducer from './taskReducer'

export default combineReducers({
    timeSlot_reducer: timeSlotReducer,
    // task_reducer: taskReducer
    dayChange_reducer: dayChangeReducer,
});