import { combineReducers } from "redux";
import timeReducer from "./timeReducer";
import counterReducer from "./counterReducer";
import alarmReducer from "./alarmReducer";
const reducer = combineReducers({
    timeReducer,
    counterReducer,
    alarmReducer
})

export default reducer