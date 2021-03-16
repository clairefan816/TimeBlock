import {connect} from "react-redux";
import Task from '../components/Task/Task'

function mapStateToProps(state){
    return {
        taskData : state.task_reducer
    }
}
export default connect(mapStateToProps)(Task)