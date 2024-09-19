import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../Pages/Home/Home'
import User from '../Pages/User/User'
import Feature from '../Pages/Feature/Feature'
function AllRoutes() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/user-document-upload' element={<User/>}/>
<Route  path='/features' element={<Feature/>}/>
   </Routes>
  )
}

export default AllRoutes
