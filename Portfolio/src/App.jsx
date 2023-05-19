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

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Profile></Profile>
      <Stats></Stats>
      <Offer></Offer>
      <Social></Social>
      <Footer></Footer>
    </>
  )
}

export default App
