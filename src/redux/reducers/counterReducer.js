const defaultState = {
    timeRemaining: 1
}


const counterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "COUNT_TIME_REMAINING":
            return { timeRemaining: state.timeRemaining - 1 };
        case "SET_TIME_REMAINING":
            return {timeRemaining: action.payload}
        default:
            return state
    }
}

export default counterReducer