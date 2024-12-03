import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, updateUserName } from '../../features/counter/counterSlice';

function Counter() {
    const counterData = useSelector( (state)=>state.counterData)
    const dispatch = useDispatch()
    const [userName,setUserName] = useState(counterData.userName)
    console.log(counterData);
  return (
    <div>
        <h1>counter : {counterData.counter}</h1>
        <button onClick={ ()=> dispatch(increment())}>increment</button>
        <button onClick={ ()=> dispatch(decrement())}>decrement</button>
        <button onClick={()=> dispatch(incrementByAmount(5))}>increment By 5</button>
        <hr />
        <h3>userName : {counterData.userName}</h3>
        <input 
            type="text" 
            placeholder='username'
            value={userName}
            onChange={(e)=> setUserName(e.target.value)}
            />
        <button onClick={()=> dispatch(updateUserName(userName))} >updateUserNmae</button>
    
    </div>
  )
}

export default Counter