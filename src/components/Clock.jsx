import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "./Button"
import FormatTimeString from "../utilities/FormatTimeString"

const Clock = () => {
    const dispatch = useDispatch()
    const time = useSelector(state => state.timeReducer)
    const [counter, setCounter] = useState(0)
    const [start, setStart] = useState(false)
    const timeOutIDRef = useRef(null)
    useEffect(() => {
        setCounter(time.minutes * 60)
        // console.log('set')
    }, [time])

    const handleStart = () => {
        setStart(!start)
        timeOutIDRef.current = setInterval(() => {
            setCounter(prev => prev - 1)
        }, 1000)
    }

    const handleStop = () => {
        setStart(!start)
        clearInterval(timeOutIDRef.current)
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
                <button onClick={handleStart} style={{ color: time.color }} className={`bg-white hover:bg-gray-200 text-2xl px-12 py-3 mt-4 rounded font-[600]`}>START</button>
        }
    </div>
}
export default Clock