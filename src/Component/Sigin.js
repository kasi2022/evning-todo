import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div>
            <div>
                <label>UserName</label><br/>
                <input type='text' placeholder='Enter the username'/><br/>
                <label>UserEmail</label><br/>
                <input type='email'  placeholder='Enter the emil'/><br/>
                <label>Password</label><br/>
                <input type='password' placeholder='Enter the Password '/><br/>
                <Link to='/login'><button>Sigin</button></Link>
            </div>
        </div>
    )
}

export default Register;