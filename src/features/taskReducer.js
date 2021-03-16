const initState = {
    Tasks : ["Sleep", "Reading", "Sleep", "Reading","Sleep", "Reading"],
    TaskColors: ["Black", "Red", "Orange", "Yellow", "Blue", "Pink"]
};

export default function taskReducer(preState = initState, action){
    const {type, data} = action;
    return preState;
}