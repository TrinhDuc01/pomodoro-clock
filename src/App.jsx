import { useSelector } from 'react-redux'
import './App.css'
import Container from './components/Container'

function App() {
  const color = useSelector(state => state.timeReducer.color)
  console.log(color)
  return (
    <div style={{ backgroundColor: color }} className={`h-[100vh] transition-colors duration-800 text-white`}>
      <Container />
    </div>
  )
}

export default App
