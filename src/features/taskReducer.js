// const initState = {
//     Tasks : ["Sleep", "Reading", "Sleep", "Reading","Sleep", "Reading"],
//     TaskColors: ["Grey", "Red", "Orange", "Yellow", "Blue", "Pink"],
//     PickedColor : -1
// };

// export default function taskReducer(preState = initState, action){
//     const {type, data} = action;
//     switch (type) {
//         case ("SELECT_TASK"):
//             return{
//                 Tasks: preState.Tasks,
//                 TaskColors: preState.TaskColors,
//                 PickedColor: data
//             }
//     }
//     return preState;
// }