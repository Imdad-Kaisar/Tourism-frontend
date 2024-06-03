import React from 'react'
import { useState } from 'react'
import axios from'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const navigate= useNavigate()
    const [data,setData]=useState({
        email:'',
        password:'',
    })

    const loginUser = async (e) => {
        e.preventDefault()
        const {email, password}= data
        try {
          const {data} =await axios.post('/login', {
            email,
            password
          });
          if(data.error){
            toast.error(data.error)
          }else{
            setData({});
            navigate('/dashboard')
          }
        } catch (error) {
          
        }

    }
  return (
    
    <div className='body'>
      <div className="main">
        <div className="register">
          <h2>Login</h2>
      <form id='register' onSubmit={loginUser}>
            
            <label> Email</label>
            <br />
            <input id='name' type='email' placeholder=' enter email'  value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
            <br /> <br />
            <label> Password</label>
            <br />
            <input id='name' type='password' placeholder=' enter password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
            <br /> <br />
            <button id='submit' type='submit'>Login</button>
      </form>
    </div>
    </div>
    </div>
  )
}