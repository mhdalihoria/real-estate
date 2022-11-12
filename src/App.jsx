import { useState } from 'react'
import {Routes, Route, Link} from "react-router-dom"
// ---------------- Dependency imports above --------------------
import Header from "./Components/Header"
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Buy from './Pages/Buy'
import Rent from './Pages/Rent'
import './App.css'
// ---------------- Imports above --------------------

function App() {

  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/buy' element={<Buy />}/>
        <Route path='/rent' element={<Rent />}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
