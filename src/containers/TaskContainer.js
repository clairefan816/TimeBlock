import {connect} from "react-redux";
import Task from '../components/Task/Task'

function mapStateToProps(state){
    return {
        taskData : state.timeSlot_reducer
    }
}

function mapDispatchToProps(dispatch, props){
    return {
        onSelectTaskClick:(selectedIndex) => {
            dispatch({type:"SELECT_TASK", data: selectedIndex})
          },
        onClearTaskClick : (selectedIndex) => {
            dispatch({type:"CLEAR_TASK", data: selectedIndex})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Task)