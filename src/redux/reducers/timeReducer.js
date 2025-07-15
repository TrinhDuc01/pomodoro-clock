const time = [
    {
        name: "Pomodoro",
        color: "#E55050",
        count: 1,
        minutes: 25,
        message: "Time to focus!"
    },
    {
        name: "Short Break",
        color: "#4A9782",
        count: 1,
        minutes: 5,
        message: "Time for a break!"
    },
    {
        name: "Long Break",
        color: "#00809D",
        count: 1,
        minutes: 15,
        message: "Time for a break!"
    }
]

const defaultState = {
    modify: time,
    currentTime: time[0],
}


const timeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "POMODORO":
            return { ...state, currentTime: state.modify[0] };
        case "SHORT":
            return { ...state, currentTime: state.modify[1] };
        case "LONG":
            return { ...state, currentTime: state.modify[2] };
        case "INCREASE_COUNT":
            return {
                modify: time.map(item => {
                    if (item.name === action.payload.name) return { ...item, count: item.count + 1 }
                    return item
                }),
                currentTime: { ...state.currentTime, count: state.currentTime.count + 1 }
            }
        default:
            return state
    }
}

export default timeReducer