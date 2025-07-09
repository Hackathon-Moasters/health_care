import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Intropage from './pages/Intropage';
import Login from './pages/Login';





const App = () => {
  
  return (
    <div>
      <Routes>
  <Route path='/' element={ <Intropage/>} />
  <Route path='/home' element={ <Homepage />} />
  <Route path='/login' element={ <Login />} />


  

      </Routes>
      
    </div>
  )
}

export default App
