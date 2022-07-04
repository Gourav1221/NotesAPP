import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [formData,setformData] = useState({})
    const nav= useNavigate()
    const handelChange=(e)=>{
        const {value,name}= e.target
        setformData({...formData,
             [name]: value})
    }

    const handelogin= async ()=>{
        console.log(formData)
          try{
            const {data}=await axios.post("http://localhost:8080/reg/login",formData)
            
            const user= data[0]
            localStorage.setItem("userid",user["name"])
            nav("/note")
          }catch(err){
           console.log(err)
          }
    }
  return (
    <div>
        <input type="text" name='username' onChange={handelChange} placeholder='Enter UserName'/><br />
        <input type="text" name='password' onChange={handelChange} placeholder='Enter password'/><br />
        <button onClick={handelogin}>Login</button>
    </div>
  )
}

