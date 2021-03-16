import {connect} from "react-redux";
import Day from '../components/Day/Day'


function mapStateToProps(state){
    return {
        dayData : state.timeSlot_reducer
    }
}
export default connect(mapStateToProps)(Day)