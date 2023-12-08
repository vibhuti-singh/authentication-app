import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Box } from '@mui/material'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
   <>
   <Router>
    <div className="container1 ">
   <Navbar/>
   <Box sx={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height:"100%"}}>
   <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
  
   </Routes>
   </Box></div>
   </Router>
     </>
  )
}

export default App
