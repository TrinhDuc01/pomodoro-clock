import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "./Button"
import FormatTimeString from "../utilities/FormatTimeString"

const Clock = () => {
    const dispatch = useDispatch()
    const time = useSelector(state => state.timeReducer.currentTime)
    const counter = useSelector(state => state.counterReducer.timeRemaining)
    const alarm = useSelector(state => state.alarmReducer.alarm);
    // console.log(alarm)
    const [start, setStart] = useState(false)
    const intervalIDRef = useRef(null)
    const audioRef = useRef(null)
    useEffect(() => {
        // setCounter(time.minutes * 1)
        dispatch({
            type: "SET_TIME_REMAINING",
            payload: time.minutes * 60
        })
        // console.log('rerender')
    }, [time])

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.load(); // Load lại source mới
        }
    }, [alarm.url])

    // console.log(alarm, audioRef.current)

    useEffect(() => {
        if (counter <= 0) {
            setStart(!start)
            clearInterval(intervalIDRef.current)
            dispatch({
                type: "INCREASE_COUNT",
                payload: {
                    name: time.name
                }
            })
            audioRef.current.play()
        }
    }, [counter])

    const handleStart = () => {
        setStart(!start)
        intervalIDRef.current = setInterval(() => {
            dispatch({
                type: "COUNT_TIME_REMAINING"
            })
        }, 1000)
    }

    const handleStop = () => {
        setStart(!start)
        clearInterval(intervalIDRef.current)
    }

    const handleClock = (clock) => {
        dispatch({
            type: clock
        })
    }

    return <div className="flex flex-col justify-center items-center py-5 gap-6 rounded bg-[#ffffff33]">
        <div className="flex gap-2">
            <Button time={time} name={"Pomodoro"} handleClock={() => handleClock("POMODORO")} />
            <Button time={time} name={"Short Break"} handleClock={() => handleClock("SHORT")} />
            <Button time={time} name={"Long Break"} handleClock={() => handleClock("LONG")} />
        </div>
        <div className="text-6xl font-[500] text-[120px]">
            {FormatTimeString(counter)}
        </div>
        {
            start ?
                <button onClick={handleStop} style={{ color: time.color }} className={`bg-white hover:bg-gray-200 text-2xl px-12 py-3 mt-4 rounded font-[600]`}>STOP</button> :
                <button disabled={counter <= 0 ? true : false} onClick={handleStart} style={{ color: time.color }} className={`bg-white hover:bg-gray-200 text-2xl px-12 py-3 mt-4 rounded font-[600]`}>START</button>
        }
        <audio ref={audioRef}>
            <source src={import.meta.env.BASE_URL+alarm.url}></source>
        </audio>
    </div>
}
export default Clock