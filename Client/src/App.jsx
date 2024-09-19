import { useState } from 'react'
import './App.css'
import AllRoutes from './Components/AllRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
function App() {
  return (
<Router>
  <Navbar/>
  <AllRoutes/>
  <Footer/>
</Router>
  )
}


export default App
