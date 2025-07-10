import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dr_dashboard from './pages/Dr_dashboard';
import Alldoctor from './pages//Alldoctor';
import Intropage from './pages/Intropage';
import Login from './pages/Login';
import Patient_dashboard from './pages/Patient_dashboard';
import BookingSlot from './pages/BookingSlot';
import About from './pages/About';




const App = () => {
  
  return (
    <div>
      <Routes>
  <Route path='/' element={ <Intropage/>} />
  <Route path='/dr' element={ <Dr_dashboard/>} />
  <Route path='/alldr' element={ <Alldoctor/>} />
  <Route path='/patient' element={ <Patient_dashboard />} />
  <Route path='/login' element={ <Login />} />
  <Route path='/booking' element={ <BookingSlot />} />
  <Route path='/about' element={ <About />} />



  

      </Routes>
      
    </div>
  )
}

export default App
