import axios from 'axios'
import React, { useState  } from 'react'
import {useNavigate} from 'react-router-dom'
import  axiosInstance  from './axios.js'
import './styles/login.css'
export default function Login() {
    const navigate = useNavigate();
    const [data , setData] = useState({
        email:"",
        password:""
    })
    const handleChange = (e) =>{
        setData(
            {...data ,
            [e.target.name] : e.target.value}
        )
    }
    const handleSumbmit = (e) =>{
        e.preventDefault()
        console.log(data)
        axiosInstance
            .post("http://127.0.0.1:8000/api/token/" , {
                email:data.email,
                password:data.password
            })
            .then((res) =>{
                console.log("login succesFull")
                console.log(res)
                localStorage.setItem('access_token' , res.data.access)
                localStorage.setItem('refresh_token' , res.data.refresh)
                axiosInstance.defaults.headers['Authorization'] = localStorage.getItem('access_token');
                navigate("/")
            })
            .catch((err)=>{
                console.log("error found " , err)
            })
    }
  return (
       <>

    <div className="main">
        <div className="box">
            <div className="heading">
                <h2>Login</h2>
            </div>
                <form >
            <div className="form-div">
                <input onChange = {handleChange} name = "email" type="text" placeholder="Email" id="login-id"/>
                <input onChange = {handleChange} name = "password" type="password" placeholder = "Password" id="login-password"/>
                <button onClick = {handleSumbmit} className = "btns" type="submit">Log in</button>
            </div>
                </form>

        </div>
    </div>
       </>
  )
}
