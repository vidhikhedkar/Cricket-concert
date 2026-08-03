import { useState } from 'react'
import './App.css'
import Navbar from './components/global/Navbar'
import HomePage from './pages/HomePage'
import Footer from './components/global/Footer'

function App() {

  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  )
}

export default App
