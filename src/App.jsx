import { useState } from 'react'
import {Routes, Route, Link} from "react-router-dom"
// ---------------- Dependency imports above --------------------
import Header from "./Components/Header"
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Buy from './Pages/Buy'
import Rent from './Pages/Rent'
import Info from './Pages/Info'
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
        <Route path='/rent/1/info' element={<Info />}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
