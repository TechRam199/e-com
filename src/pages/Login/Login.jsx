import React, { useState } from 'react'
import "./login.css"
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/Apicalls';

function Login() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const dispatch = useDispatch();
    // const {isFatching,error} = useSelector((state)=>state.user)
console.log(username, password)

    const handleSubmit = (e)=>{
e.preventDefault()
login(dispatch,{username,password})

    }
  return (
    <div className='login_cont'>
      <h2> Create an Account</h2>

      <form onSubmit={handleSubmit}>
        <div>
<span>User Name :</span>
<input type="text" width="30px" height="20px" onChange={(e)=>setusername(e.target.value)} />
</div>
<span>Password :</span>
<input type="password" width="30px" height="20px" onChange={(e)=>setpassword(e.target.value)} />

<div><button type='submit'>Login</button></div>
      </form>
    </div>
  )
}

export default Login
