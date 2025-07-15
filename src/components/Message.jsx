import { useSelector } from "react-redux"

const Message = () => {
    const { message, count } = useSelector(state => state.timeReducer.currentTime)
    return <div className="flex flex-col items-center">
        <div className="opacity-80">#{count}</div>
        <div className="text-[18px]">{message}</div>
    </div>
}
export default Message 