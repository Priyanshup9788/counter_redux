import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decremnet} from '../../redux/action'
const Counter = () => {

     
  let dispatch = useDispatch();
  let count = useSelector((state)=>state.counter.count);    

  return (
    <>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <p>{count}</p>
      <button onClick={()=>dispatch(decremnet())}>Decrement</button>
    </>
  )
}

export default Counter