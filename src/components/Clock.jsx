const Clock = () => {
    return <div className="flex flex-col justify-center items-center py-5 gap-6 rounded bg-[#ffffff33]">
        <div className="flex gap-2">
            <button className="py-1 px-3 bg-[#00000026] rounded">Pomodoro</button>
            <button className="py-1 px-3 bg-[#00000026] rounded">Short Break</button>
            <button className="py-1 px-3 bg-[#00000026] rounded">Long Break</button>
        </div>
        <div className="text-6xl font-[500] text-[120px]">
            25:00
        </div>
        <button className="bg-white text-red-400 text-2xl px-12 py-3 mt-4 rounded font-[600]">START</button>
    </div>
}
export default Clock