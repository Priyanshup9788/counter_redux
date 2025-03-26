
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decremnet, increment } from './redux/action'

function App() {
  
  let dispatch = useDispatch();
  let count = useSelector((state)=>state.count)
  return (
    <>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <p>{count}</p>
      <button onClick={()=>dispatch(decremnet())}>Decrement</button>
    </>
  )
}

export default App
