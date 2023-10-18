import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
           <label>UserName</label><br/>
           <input type='text' placeholder='Enter the username'/>
           <br/>
           <label>Userpassword</label><br/>
           <input type='password' placeholder='Enter the userpassword'/>
           <br/>
           <Link to='/dash'><button >Login</button></Link>

        </div>
    )
}

export default Login
