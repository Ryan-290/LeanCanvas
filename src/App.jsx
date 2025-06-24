import Header from './component/Header'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import CanvasPage from './pages/Canvas'
import Footer from './component/footer'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/canvas/:id" element={<CanvasPage />} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
