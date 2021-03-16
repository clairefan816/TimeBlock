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
};

export default function timeSlotReducer(preState = initState, action){
    const { type, data } = action;
    
    switch (type) {
        case "SELECT_SLOT":
            let selected = {
                text: preState.TimeSlots[data].text,
                color: 0
            }
            preState.TimeSlots[data] = selected;
            let newTime = JSON.parse(JSON.stringify(preState.TimeSlots));
            return {
                TimeTags: preState.TimeTags,
                LastClickOfSlot: data,
                TimeSlots: newTime
            }
    }
    return preState;
}