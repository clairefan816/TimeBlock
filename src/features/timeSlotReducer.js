const initState = {
    TimeTags : ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00",
                "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00",
                "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
    
    TimeSlots:[
                {
                    text: "00:00 - 00:30",
                    color: null
                },
                {
                    text: "00:30 - 01:00",
                    color: null
                },
                {
                    text: "00:00 - 00:30",
                    color: null
                },
                {
                    text: "00:30 - 01:00",
                    color: null
                },
                {
                    text: "00:00 - 00:30",
                    color: null
                },
                {
                    text: "00:30 - 01:00",
                    color: null
                },
                {
                    text: "00:00 - 00:30",
                    color: null
                },
                {
                    text: "00:30 - 01:00",
                    color: null
                },
                {
                    text: "00:00 - 00:30",
                    color: null
                },
                {
                    text: "00:30 - 01:00",
                    color: null
                },
                {
                    text: "00:00 - 00:30",
                    color: null
                },
                {
                    text: "00:30 - 01:00",
                    color: null
                },
                {
                    text: "00:00 - 00:30",
                    color: null
                },
                {
                    text: "00:30 - 01:00",
                    color: null
                },
                {
                    text: "00:00 - 00:30",
                    color: null
                },
                {
                    text: "00:30 - 01:00",
                    color: null
                },
                {
                    text: "00:00 - 00:30",
                    color: null
                },
                {
                    text: "00:30 - 01:00",
                    color: null
                },
                {
                    text: "00:00 - 00:30",
                    color: null
                },
                {
                    text: "00:30 - 01:00",
                    color: null
                },
                {
                    text: "00:00 - 00:30",
                    color: null
                },
                {
                    text: "00:30 - 01:00",
                    color: null
                },
                {
                    text: "00:00 - 00:30",
                    color: null
                },
                {
                    text: "00:30 - 01:00",
                    color: null
                },
                {
                    text: "00:00 - 00:30",
                    color: null
                },
                {
                    text: "00:30 - 01:00",
                    color: null
                },


            ],
    LastClickOfSlot: -1,
    Tasks : ["Sleep", "Reading", "Exercise", "Study","Gaming", "Delete"],
    TaskColors: ["#FFAC81", "#FF928B", "#FEC3A6", "#EFE9AE", "#CDEAC0", "AliceBlue"],
    PickedColor : -1
};
// function timeTagToTimeSlot (TimeTags) {
//     let timeslotText=[];
//     for([index, value] of TimeTags.entries()) {
//         timeslotText.push(TimeTags[index] + " - " + TimeTags[index + 1]);
//     }
//     return timeslotText;
// }
export default function timeSlotReducer(preState = initState, action){
    const { type, data } = action;
    if (type === "SELECT_SLOT"){
        if (data === preState.LastClickOfSlot){
            return {
                ...preState, LastClickOfSlot: -1
            }
        }
        return {
            ...preState, LastClickOfSlot: data
        }
    } else if (type === "SELECT_TASK"){
        if (preState.LastClickOfSlot !== -1){
            let newColor = preState.TaskColors[data];
            let connected = {
                text : preState.TimeSlots[preState.LastClickOfSlot].text,
                color: newColor
            }
            preState.TimeSlots[preState.LastClickOfSlot] = connected;
            let newTime = JSON.parse(JSON.stringify(preState.TimeSlots));
            return {
                ...preState, PickedColor:data, LastClickOfSlot: -1, Timeslots : newTime
            }
            
        } else if (type === "CLEAR_TASK"){
            if (preState.LastClickOfSlot !== -1){
                let clearcolor = {
                    text : preState.TimeSlots[preState.LastClickOfSlot].text,
                    color: null
                }
                preState.TimeSlots[preState.LastClickOfSlot] = clearcolor;
                let newTime = JSON.parse(JSON.stringify(preState.TimeSlots));
                return {
                    ...preState, LastClickOfSlot: -1, Timeslots : newTime
                }
            }
        }
    }
    return preState;
}