import React from 'react';
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import { decrement,increment,addDetails } from './counterSlice';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
const Counter = () => {
    const count =useSelector((state)=>state.counter.value);
    const name=useSelector((state)=>state.counter.name)
    const dispatch=useDispatch()
  return (
    <div style={{margin:"auto"}}>
        add to cart
        {count}
        Hi {name} !
        <div>
            <h1 className=''>Product 1</h1>
            <p>product description</p>
            <button onClick={()=>dispatch(increment())}>Add</button>
        </div>
        {/* <input onChange={(e)=>dispatch(addDetails(e.target.value))}></input> */}
    </div>

  )
}

export default Counter