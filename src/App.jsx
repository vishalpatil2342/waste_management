import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'
import Signup from './pages/Signup'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/'>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        </Route>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App