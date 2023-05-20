import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Stats from './components/Stats'
import Offer from './components/Offer'
import Social from './components/Social'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
