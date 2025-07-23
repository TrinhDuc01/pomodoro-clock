import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ModalSetting = ({ isOpen, setIsOpen }) => {
    const settingTimeInit = useSelector(state => state.timeReducer.modify)
    const settingAlarmList = useSelector(state => state.alarmReducer.list_alarm)

    const [settingTime, setSettingTime] = useState(settingTimeInit)
    const [settingAlarm, setSettingAlarm] = useState(0)
    // console.log(settingAlarm)
    const dispatch = useDispatch();
    const handleChangSettingTime = (e, index) => {
        const updatedSetting = [...settingTime];
        const newSetting = { ...updatedSetting[index], minutes: parseInt(e.target.value) }
        updatedSetting[index] = newSetting
        setSettingTime(updatedSetting)
    }

    const handleSetting = () => {
        dispatch({
            type: "SETTING_TIME",
            payload: settingTime
        })
        dispatch({
            type: "CHANGE_ALARM",
            payload: settingAlarm
        })

        setIsOpen(false)
    }

    return (
        <div className="fixed inset-0 text-gray-400 font-bold z-50 flex items-baseline pt-10 justify-center bg-[#00000066]">
            <div className="bg-white w-[90%] max-w-md rounded-2xl shadow-lg relative">
                <div className="border-b-gray-200 border-b-1  px-6 py-3">
                    <h3 className="text-center text-gray-400 font-bold">SETTING</h3>
                    {/* Nút đóng */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-1 right-3 text-gray-300 hover:text-gray-700 text-3xl font-bold"
                    >
                        ×
                    </button>
                </div>
                <div className="p-5 setting-time">
                    <h2 className="text-gray-500"><i class="fa-solid fa-clock mr-1.5"></i>{`Time (minutes)`}</h2>
                    <div className="flex justify-between items-center mt-3">
                        <div>
                            <label htmlFor="pomodoro">Pomodoro</label>
                            <input onChange={(e) => handleChangSettingTime(e, 0)} className="block w-24 p-2.5 bg-gray-200 rounded-sm" type="number" min={1} step={1} value={settingTime[0].minutes} id="pomodoro" />
                        </div>
                        <div>
                            <label htmlFor="short">Short</label>
                            <input onChange={(e) => handleChangSettingTime(e, 1)} className="block w-24 p-2.5 bg-gray-200 rounded-sm" type="number" min={1} step={1} value={settingTime[1].minutes} id="short" />
                        </div>
                        <div>
                            <label htmlFor="long">Long</label>
                            <input onChange={(e) => handleChangSettingTime(e, 2)} className="block w-24 p-2.5 bg-gray-200 rounded-sm" type="number" min={1} step={1} value={settingTime[2].minutes} id="long" />
                        </div>
                    </div>
                </div>

                <div className="px-5 pb-5 setting-alarm flex justify-between">
                    <h2 className="text-gray-500"><i class="fa-solid fa-volume-high mr-1.5"></i>Alarm sound</h2>
                    <select className="bg-gray-200 rounded px-2 py-1" name="alarm" onChange={(e) => setSettingAlarm(parseInt(e.target.value))} >
                        {settingAlarmList && settingAlarmList.map((item, index) => {
                            return <option value={index}>{item.name}</option>
                        })}
                    </select>

                </div>

                <div className="border-t-gray-200 border-t-1  px-6 py-3 text-right">
                    <button
                        onClick={handleSetting}
                        className="bg-gray-500 px-6 py-2 rounded-xl text-gray-300 hover:text-gray-700"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalSetting