import Count from "./components/Count"
import IncBtn from "./components/IncBtn"
import DecBtn from "./components/DecBtn"
import History from "./components/History"
import {useSelector} from 'react-redux'

function App() {
  const state = useSelector( state => state)
  console.log(state)
  return (
    <>
      <Count/>
      <div>
        <IncBtn/>
        <DecBtn/>
      </div>
      <History></History>
    </>
  )
}

export default App
