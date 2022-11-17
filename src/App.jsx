import {Routes, Route} from "react-router-dom"
// ---------------- Dependency imports above --------------------
import Navbar from "./Components/Navbar"
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Buy from './Pages/Buy'
import Rent from './Pages/Rent'
import Info from './Pages/Info'
import Login from './Pages/Login'
import Error from "./Components/Error"
import './App.css'
// ---------------- Imports above --------------------

function App() {

  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/buy' element={<Buy />}/>
        <Route path='/rent' element={<Rent />}/>
        <Route path='/rent/1/info' element={<Info />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/*' element={<Error />}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
