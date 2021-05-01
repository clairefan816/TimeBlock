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
                    text: "01:00 - 01:30",
                    color: null
                },
                {
                    text: "01:30 - 02:00",
                    color: null
                },
                {
                    text: "02:00 - 02:30",
                    color: null
                },
                {
                    text: "02:30 - 03:00",
                    color: null
                },
                {
                    text: "03:00 - 03:30",
                    color: null
                },
                {
                    text: "03:30 - 04:00",
                    color: null
                },
                {
                    text: "04:00 - 04:30",
                    color: null
                },
                {
                    text: "04:30 - 05:00",
                    color: null
                },
                {
                    text: "05:00 - 05:30",
                    color: null
                },
                {
                    text: "05:30 - 06:00",
                    color: null
                },
                {
                    text: "06:00 - 06:30",
                    color: null
                },
                {
                    text: "06:30 - 07:00",
                    color: null
                },
                {
                    text: "07:00 - 07:30",
                    color: null
                },
                {
                    text: "07:30 - 08:00",
                    color: null
                },
                {
                    text: "08:00 - 08:30",
                    color: null
                },
                {
                    text: "08:30 - 09:00",
                    color: null
                },
                {
                    text: "10:00 - 10:30",
                    color: null
                },
                {
                    text: "10:30 - 11:00",
                    color: null
                },
                {
                    text: "11:00 - 11:30",
                    color: null
                },
                {
                    text: "11:30 - 12:00",
                    color: null
                },
                {
                    text: "12:00 - 12:30",
                    color: null
                },
                {
                    text: "12:30 - 13:00",
                    color: null
                },
                {
                    text: "13:00 - 13:30",
                    color: null
                },
                {
                    text: "13:30 - 14:00",
                    color: null
                },
                {
                    text: "14:00 - 14:30",
                    color: null
                },
                {
                    text: "14:30 - 15:00",
                    color: null
                },
                {
                    text: "15:00 - 15:30",
                    color: null
                },
                {
                    text: "15:30 - 16:00",
                    color: null
                },
                {
                    text: "16:00 - 16:30",
                    color: null
                },
                {
                    text: "16:30 - 17:00",
                    color: null
                },
                {
                    text: "17:00 - 17:30",
                    color: null
                },
                {
                    text: "17:30 - 18:00",
                    color: null
                },
                {
                    text: "18:00 - 18:30",
                    color: null
                },
                {
                    text: "18:30 - 19:00",
                    color: null
                },
                {
                    text: "19:00 - 19:30",
                    color: null
                },
                {
                    text: "19:30 - 20:00",
                    color: null
                },
                {
                    text: "20:00 - 20:30",
                    color: null
                },
                {
                    text: "20:30 - 21:00",
                    color: null
                },
                {
                    text: "21:00 - 21:30",
                    color: null
                },
                {
                    text: "21:30 - 22:00",
                    color: null
                },
                {
                    text: "22:00 - 22:30",
                    color: null
                },
                {
                    text: "22:30 - 23:00",
                    color: null
                },
                {
                    text: "23:00 - 23:30",
                    color: null
                },
                {
                    text: "23:30 - 24:00",
                    color: null
                },
            ],
    LastClickOfSlot: -1,
    Tasks : ["Sleep", "Reading", "Exercise", "Study","Gaming"],
    TaskColors: ["#FFAC81", "#FF928B", "#FEC3A6", "#EFE9AE", "#CDEAC0"],
    PickedColor : -1,
};

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
            let connected = {
                text : preState.TimeSlots[preState.LastClickOfSlot].text,
                task_text: preState.Tasks[data],
                color: preState.TaskColors[data]
            }
            preState.TimeSlots[preState.LastClickOfSlot] = connected;
            let newTime = JSON.parse(JSON.stringify(preState.TimeSlots));
            return {
                ...preState, PickedColor:data, LastClickOfSlot: -1, TimeSlots:newTime
            }
            
        } 
    } else if (type === "CLEAR_TASK"){
        if (preState.LastClickOfSlot !== -1){
            let clearcolor = {
                text : preState.TimeSlots[preState.LastClickOfSlot].text,
                task_text: null,
                color: null
            }
            preState.TimeSlots[preState.LastClickOfSlot] = clearcolor;
            let newTime = JSON.parse(JSON.stringify(preState.TimeSlots));
            return {
                ...preState, LastClickOfSlot: -1, Timeslots : newTime
            }
        }
    }
    return preState;
}