import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Pages/Home.jsx'



const App = () => {
  return (

    <>
    
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<h2>About</h2>}/>
        <Route path='/category' element={<h2>category</h2>}/>
        <Route path='/trending' element={<h2>blog</h2>}/>
        <Route path='/contact' element={<h2>contact </h2>}/>


      </Routes>
    </Router>
    
    
    
    
    </>


  )
}

export default App