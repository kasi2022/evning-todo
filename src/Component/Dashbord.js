import React from 'react'
import { Link } from 'react-router-dom'

function Dashbord() {
    return (
        <div>
            <Link to='/about'>About</Link><br/>
            <Link to='/'>Home</Link><br/>
            <Link to='address'>Address</Link><br/>
        </div>
    )
}

export default Dashbord
