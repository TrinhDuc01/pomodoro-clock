const NavBar = () => {
    return <div className="flex items-center justify-between py-2">
        <div className="logo flex items-center gap-1 py-2">
            <i class="fa-regular fa-circle-check text-2xl"></i>
            <h1 className="bg-red-400 text-2xl font-[500]">Pomodoro Clock</h1>
        </div>
        <div className="btn-group">
            <button className="bg-[#ffffff33] opacity-90 px-3 py-2 rounded-md"><i class="fa-solid fa-gear inline-block mr-1"></i>Setting</button>
        </div>
    </div>
}
export default NavBar