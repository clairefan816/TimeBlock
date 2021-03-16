const initState = {
    TimeTags : ["00:00", "01:00", "02:00"],
            // TimeSlots:["00-first-half", "00-second-half", "01-first-half", "01-second-half", "02-first-half", "02-second-half"],
            // SlotColors: ["Black", "Red", "Orange", "Yellow", "Blue", "Pink"],
    TimeSlots:[
                {
                    text: "00-first-half",
                    color: "red"
                },
                {
                    text: "00-second-half",
                    color: null
                },
                {
                    text: "01-first-half",
                    color: "null"
                },
                {
                    text: "01-second-half",
                    color: "green"},
            ],
    LastClickOfSlot: -1,
};

export default function timeSlotReducer(preState = initState, action){
    const {type, data} = action;
    return preState;
}