import {useState} from 'react'
import  axiosInstance  from 'axios'
import {useNavigate} from 'react-router-dom'

import "./styles/login.css"

export default function SignUp() {
    const [creds , setCreds] = useState({
        email: "",
        username:"",
        password:"",
        name:""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        axiosInstance
            .post('http://127.0.0.1:8000/api/register/' ,{
                email: creds.email,
                username: creds.username,
                password:creds.password,
                name :creds.name
            })
            .then((res)=>{
                // redirect to home page  via usehistory
                console.log(res)
            })
            .catch((err)=>{
                console.log("ERROR A GAYA " ,err)
            })
    }
    const handleChange = (e) =>{
        setCreds({
            ...creds , 
            [e.target.name]: e.target.value
        })
    }
  return (
        <div className="main">
        <div className="box">
            <div className="heading">
                <h2>Sign Up</h2>
            </div>
                <form action = "post">
            <div className="form-div">
                <input name = "name" onChange={handleChange} type = "text" placeholder= "Name" id = "signup-name"/>
                <input name = "email" onChange={handleChange} type="text" placeholder="Email" id="signup-id"/>
                <input name = "username" onChange={handleChange} type = "text" placeholder = "Username" id = "signup-username"/>
                <input name = "password" onChange={handleChange} type="password" placeholder = "Password" id="signup-password"/>
                <button name = "submit" onClick={handleSubmit} className = "btns" type="submit">Sign up</button>
            </div>
                </form>
        </div>
    </div>

  )
}
