import React from 'react';
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { decrement,increment,addDetails,addProducts } from './counterSlice';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
const Counter = () => {
    useEffect(()=>{
        fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
        .then(res => res.json())
        .then(data=>dispatch(addProducts(data)));
    },[])
    const count =useSelector((state)=>state.counter.value);
    const name=useSelector((state)=>state.counter.name);
    const cart=useSelector((state)=>state.counter.cart)
    const product=useSelector((state)=>state.counter.products)
    const dispatch=useDispatch()
    console.log(cart);
    let[cartData,setCartData]=useState([])
    const addToCart=(data)=>{
        dispatch(increment(cartData))
setCartData(oldData=>[...oldData,data])
    }
    console.log(cart)
  return (
    <div style={{margin:"auto"}}>


{/* <!-- As a heading --> */}
<nav class="navbar  border-bottom border-body" style={{backgroundColor: "yellow"}}>
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Flipkart</span>
    <a class="navbar-brand" href="#">
    Hi {name} !
    <img width="50" height="50" src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="shopping-cart--v1"/>
      <span style={{background:"blue",borderRadius:"35px",padding
    :"6px",color:"#fff"}}>{count}</span>
   <div style={{position:"absolute",top:"5rem",zIndex:"11",right:".5rem",background:"lightblue",padding:"2px"}}>
    <ul>
        <b>In cart</b>
        {
            cartData.map((d)=>(
                <li>
                    {d.title}
                </li>
        ))
        }
    </ul>
   </div>
    </a>
    

  </div>
</nav>
<div style={{display:"flex",flexWrap:"wrap",maxWidth:"95rem",margin:"12px"}}>
        {
            product && product.products.map((data)=>(
                <div style={{background:"grey",display:"flex",alignItems:"center",flexDirection:"row",maxWidth:"320px",margin:"12px"}}>
            <div style={{maxWidth:"520px",padding:"50px"}}>
                
            <h1>{data.title}</h1>
            <h2>cost : {data.price} Rs.</h2>
            <button onClick={()=>addToCart(data)}>Add</button>
            </div>
        </div>
                    
                
            ))
        }
         </div>
        
        {/* <input onChange={(e)=>dispatch(addDetails(e.target.value))}></input> */}
    </div>

  )
}

export default Counter
