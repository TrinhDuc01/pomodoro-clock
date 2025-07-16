import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ModalSetting = ({ isOpen, setIsOpen }) => {
    const settingTime = useSelector(state => state.timeReducer.modify)
    const [setting, setSetting] = useState(settingTime)
    const dispatch = useDispatch();
    const handleChangSettingTime = (e, index) => {
        const updatedSetting = [...setting];
        const newSetting = { ...updatedSetting[index], minutes: parseInt(e.target.value) }
        updatedSetting[index] = newSetting
        setSetting(updatedSetting)
    }
    console.log('rerender-modal')
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
                <div className="p-5">
                    <h2 className="text-gray-500"><i class="fa-solid fa-clock mr-1.5"></i>{`Time (minutes)`}</h2>
                    <div className="flex justify-between items-center mt-3">
                        <div>
                            <label htmlFor="pomodoro">Pomodoro</label>
                            <input onChange={(e) => handleChangSettingTime(e, 0)} className="block w-24 p-2.5 bg-gray-200 rounded-sm" type="number" min={1} step={1} value={setting[0].minutes} id="pomodoro" />
                        </div>
                        <div>
                            <label htmlFor="short">Short</label>
                            <input onChange={(e) => handleChangSettingTime(e, 1)} className="block w-24 p-2.5 bg-gray-200 rounded-sm" type="number" min={1} step={1} value={setting[1].minutes} id="short" />
                        </div>
                        <div>
                            <label htmlFor="long">Long</label>
                            <input onChange={(e) => handleChangSettingTime(e, 2)} className="block w-24 p-2.5 bg-gray-200 rounded-sm" type="number" min={1} step={1} value={setting[2].minutes} id="long" />
                        </div>
                    </div>
                </div>
                <div className="border-t-gray-200 border-t-1  px-6 py-3 text-right">
                    <button
                        onClick={() => {
                            dispatch({
                                type: "SETTING_TIME",
                                payload: setting
                            })
                            setIsOpen(false)
                        }}
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