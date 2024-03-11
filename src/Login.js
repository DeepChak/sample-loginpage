import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"

const Login = () => {
    const navigate = useNavigate()
    const username = "deepan@gmai.com"
    const pass = "1234567"
    const Login = () => {
        if (username === "deepan@gmai.com" && pass === "1234567" ) {navigate ("/portal/dashboard")} else {
            alert ("WrongData")
        }
    }
  return (
    <div className='container'>
        <h1>Login Form</h1>
        <form>
            <label for="username"> UserName: </label>
            <input type='text' name='username' placeholder='Enter your username' />
            <label for="Password"> Password: </label>
            <input type='password' name='password' placeholder='Enter your Password' />
            <div className='check'>
                <input type='checkbox' name='remember' />
                <label for="remember">Remember</label>
            </div>
            <button className='btn-primary' onClick={Login}> Login </button>
        </form>
    </div>
  )
}

export default Login
