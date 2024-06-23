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
      <div className="main">
      <h2 className='title'>Create an Account</h2>

      <form onSubmit={handleSubmit} className='form_containor'>
        <div className='name_input'>
<span>User Name :</span>
<input type="text" width="30px" height="20px" onChange={(e)=>setusername(e.target.value)} />
</div>
<div className='name_input'>
<span>Password :</span>
<input type="password" width="30px" height="20px" onChange={(e)=>setpassword(e.target.value)} />
</div>
<div className='btn-container'>
  <button type='submit'>Login</button>
  </div>
      </form>
      </div>
    </div>
  )
}

export default Login
