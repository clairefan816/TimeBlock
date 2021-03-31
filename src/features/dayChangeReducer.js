import moment from 'moment'

const initState = {
    Today : moment(),
};
export default function dayChangeReducer(preState = initState, action){
    const { type, data } = action;
    if (type === "NEXT_DAY"){
        return {
            Today: preState.Today.clone().add(1, "day")
        }
    } else if (type === "PREVIOUS_DAY"){
        return {
            Today: preState.Today.clone().add(-1, "day")
        }
    }
    return preState;
}