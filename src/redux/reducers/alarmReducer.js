const urlAlarm = [
    {
        name: 'Clock Alarm',
        url: 'sounds/alarm_clock.mp3'
    },
    {
        name: 'Danger Alarm',
        url: 'sounds/danger_alarm.mp3'
    },
    {
        name: 'SamSung Alarm',
        url: 'sounds/samsung_alarm.mp3'
    },
    {
        name: 'Siuuu Alarm',
        url: 'sounds/suuuu_alarm.mp3'
    }
]

const defaultState = {
    list_alarm: urlAlarm,
    alarm: urlAlarm[0]
}

const alarmReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CHANGE_ALARM":
            return {
                ...state,
                alarm: urlAlarm[action.payload]
            }
        default:
            return state;
    }
}

export default alarmReducer