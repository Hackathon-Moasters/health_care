import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Intropage from './pages/Intropage';




const App = () => {
  
  return (
    <div>
      <Routes>
  <Route path='/' element={ <Homepage />} />
  <Route path='/intro' element={ <Intropage/>} />

  

      </Routes>
      
    </div>
  )
}

export default App
