const initState = {
    TimeTags : ["00:00", "01:00", "02:00"],
    TimeSlots:[
                {
                    text: "00-first-half",
                    color: null
                },
                {
                    text: "00-second-half",
                    color: null
                },
                {
                    text: "01-first-half",
                    color: null
                },
                {
                    text: "01-second-half",
                    color: null
                },
            ],
    LastClickOfSlot: -1,
    Tasks : ["Sleep", "Reading", "Sleep", "Reading","Sleep", "Reading"],
    TaskColors: ["Green", "Red", "Orange", "Yellow", "Blue", "Pink"],
    PickedColor : -1
};

export default function timeSlotReducer(preState = initState, action){
    const { type, data } = action;
    if (type === "SELECT_SLOT"){
        let selected = {
            text: preState.TimeSlots[data].text,
            color: "grey"
        }
        preState.TimeSlots[data] = selected;
        let newTime = JSON.parse(JSON.stringify(preState.TimeSlots));
        return {
            ...preState, LastClickOfSlot: data, TimeSlots: newTime
        }
    } else if (type === "SELECT_TASK"){
        if (preState.LastClickOfSlot != -1){
            let newColor = preState.TaskColors[data];
            let connected = {
                text : preState.TimeSlots[preState.LastClickOfSlot].text,
                color: newColor
            }
            preState.TimeSlots[preState.LastClickOfSlot] = connected;
            let newTime = JSON.parse(JSON.stringify(preState.TimeSlots));
            return {
                ...preState, PickedColor:data, LastClickOfSlot: -1
            }
            
        } else {
            return preState;
        }
    }
    return preState;
}