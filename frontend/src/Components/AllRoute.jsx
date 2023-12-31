import React from 'react'
import {Route, Routes} from "react-router-dom"
import Dashboard from './Dashboard'
import Login from './Login'
import Signup from './Signup'
import ReqAuth from './ReqAuth'

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<ReqAuth><Dashboard/></ReqAuth>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            
        </Routes>
    
      
    </div>
  )
}

export default AllRoute
