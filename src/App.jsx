import React from 'react'
import './styles.css'

import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import LastesProjects from './components/LastesProjects'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <div className="app bg-slate-800">
      <div className='banner'>
        <Navbar/>
        <Welcome/>
        <p className='text-center text-3xl'>👇</p>
        <AboutMe/>
        <LastesProjects/>
        <Experience/>
        <Portfolio/>
      </div>
    </div>
  )
}

export default App
