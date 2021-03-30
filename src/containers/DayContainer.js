import {connect} from "react-redux";
import DayPanel from '../components/DayPanel/DayPanel'


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
        },
        onNextClick : () => {
            dispatch({type:"NEXT_DAY"})
        },
        onPreviousClick : () => {
            dispatch({type:"PREVIOUS_DAY"})
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DayPanel)