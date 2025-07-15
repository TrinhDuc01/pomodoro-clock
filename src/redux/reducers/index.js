import { combineReducers } from "redux";
import timeReducer from "./timeReducer";
import counterReducer from "./counterReducer";
const reducer = combineReducers({
    timeReducer,
    counterReducer
})

export default reducer