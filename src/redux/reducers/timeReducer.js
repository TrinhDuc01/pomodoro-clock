const time = [
    {
        name: "Pomodoro",
        color: "#E55050",
        count: 1,
        minutes: 25
    },
    {
        name: "Short Break",
        color: "#4A9782",
        count: 1,
        minutes: 5
    },
    {
        name: "Long Break",
        color: "#00809D",
        count: 1,
        minutes: 15
    }
]

const defaultState = time[0]


const timeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "POMODORO":
            return time[0];
        case "SHORT":
            return time[1];
        case "LONG":
            return time[2];
        default:
            return state
    }
}

export default timeReducer