import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dr_dashboard from './pages/Dr_dashboard';
import Alldoctor from './pages//Alldoctor';
import Intropage from './pages/Intropage';
import Login from './pages/Login';
import Student_dashboard from './pages/Student_dashboard';




const App = () => {
  
  return (
    <div>
      <Routes>
  <Route path='/' element={ <Intropage/>} />
  <Route path='/dr' element={ <Dr_dashboard/>} />
  <Route path='/alldr' element={ <Alldoctor/>} />
  <Route path='/student' element={ <Student_dashboard />} />
  <Route path='/login' element={ <Login />} />


  

      </Routes>
      
    </div>
  )
}

export default App
