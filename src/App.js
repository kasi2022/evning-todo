import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Address from './Component/Address'
import Dashbord from './Component/Dashbord'
import Login from './Component/Login'
import Sigin from './Component/Sigin'
import Register from './Component/Sigin'

function App() {
    return (
        <div>
            {/* <h1>This is An App component</h1> */}
            {/* <Dashbord/> */}
            
            <Routes>
                {/* in routing concepet / reprecent initilize routing */}
                <Route path='/' element={<Register/>}/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/address' element={<Address/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/dash' element={<Dashbord/>}/>


            </Routes>
        </div>
    )
}

export default App
