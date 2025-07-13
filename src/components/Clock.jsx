import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "./Button"

const Clock = () => {
    const dispatch = useDispatch()
    const time = useSelector(state => state.timeReducer)
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        setCounter
    }, time)

    const handleClock = (clock) => {
        dispatch({
            type: clock
        })
    }

    console.log(time)
    return <div className="flex flex-col justify-center items-center py-5 gap-6 rounded bg-[#ffffff33]">
        <div className="flex gap-2">
            <Button time={time} name={"Pomodoro"} handleClock={() => handleClock("POMODORO")} />
            <Button time={time} name={"Short Break"} handleClock={() => handleClock("SHORT")} />
            <Button time={time} name={"Long Break"} handleClock={() => handleClock("LONG")} />
        </div>
        <div className="text-6xl font-[500] text-[120px]">
            25:00
        </div>
        <button style={{color: time.color}} className={`bg-white hover:bg-gray-200 text-2xl px-12 py-3 mt-4 rounded font-[600]`}>START</button>
    </div>
}
export default Clock