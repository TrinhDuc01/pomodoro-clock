import Clock from "./Clock"
import BarTiming from './BarTiming'
import Message from './Message'
import NavBar from './Navbar'
const Container = () => {
    return <div className="mx-auto max-w-160 px-4">
        <NavBar />
        <BarTiming />
        <div className="mx-auto max-w-[80%] space-y-5">
            <Clock />
            <Message />
        </div>
    </div>
}
export default Container