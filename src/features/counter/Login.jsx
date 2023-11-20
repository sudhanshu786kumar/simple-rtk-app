import React from 'react'
import { decrement,increment,addDetails } from './counterSlice';
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Login = () => {
    const name=useSelector((state)=>state.counter.name)
    const dispatch=useDispatch()
  return (
    <div style={{display:"flex" , alignItems:"center",justifyContent:"center", flexDirection:"column", padding:"20px",background:"grey",width:"520px",margin:"auto",color:"#fff",marginTop:"205px"}}>
        <h1>Login</h1>
         <span>Name</span><input style={{padding:"10px"}} onChange={(e)=>dispatch(addDetails(e.target.value))}></input>
         <Link style={{border:"2px solid",color:"#fff",textDecoration:"none",marginTop:"35px",padding:"12px"}} to="/add">Login</Link>
    </div>
  )
}

export default Login