import { useSelector } from "react-redux"

const BarTiming = () => {
    const counter = useSelector(state => state.counterReducer.timeRemaining);
    const time = useSelector(state => state.timeReducer.currentTime.minutes) * 60
    console.log(counter)
    return <div className="relative mb-8">
        <div className="bg-gray-950 opacity-10 rounded-2xl w-[100%] h-[1px] absolute top-[1px]"></div>
        <div style={{ width: `${(time - counter) / (time) * 100}%` }} className={`bg-white rounded-2xl h-[3px] absolute`}></div>
    </div>
}
export default BarTiming