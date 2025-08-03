import { useSelector } from 'react-redux'
import './App.css'
import Container from './components/Container'

function App() {
  const color = useSelector(state => state.timeReducer.currentTime.color)

  return (
    <div style={{ backgroundColor: color }} className={`h-[100vh] min-h-[600px] transition-colors duration-800 text-white`}>
      <Container />
    </div>
  )
}

export default App
