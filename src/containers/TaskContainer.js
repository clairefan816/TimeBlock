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
        onClearTaskClick : () => {
            dispatch({type:"CLEAR_TASK"})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Task)