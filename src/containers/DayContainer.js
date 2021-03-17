import {connect} from "react-redux";
import Day from '../components/Day/Day'


function mapStateToProps(state){
    return {
        dayData : state.timeSlot_reducer,
    }
}

function mapDispatchToProps(dispatch, props){
    return {
        onSelectClick:(selectedIndex) => {
            dispatch({type:"SELECT_SLOT", data: selectedIndex})
          },
        onClearClick : (selectedIndex) => {
            dispatch({type:"CLEAR_SLOT", data: selectedIndex})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Day)