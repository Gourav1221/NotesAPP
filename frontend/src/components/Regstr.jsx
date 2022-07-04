import React, { useState } from 'react'
import { Link } from "react-router-dom";
import axios from "axios"

export const Regstr = () => {
const [data,setData]= useState({})

const handelClick=()=>{
    axios.post("http://localhost:8080/reg/signup",data).then(({data})=>{
        console.log("data",data)
    })
}

const handelChange=(e)=>{
    const {id,value}= e.target
    setData({...data,
    [id]: value})
}
  return (
    <div>
        <input type="text"  id='name' placeholder='Enter Name' onChange={handelChange}/>
        <input type="text"  id='username' placeholder='Enter userName' onChange={handelChange}/>
        <input type="text"  id='email' placeholder='Enter Email' onChange={handelChange}/>
        <input type="text"  id='password' placeholder='Enter password' onChange={handelChange}/>
        <Link to="/login"><button onClick={handelClick}>Signup</button></Link>
    </div>
  )
}
