import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import About from './Containers/About/About'
import Stack from './Containers/Stack/Stack'
import Projects from './Containers/Projects/Projects'
import Contact from './Containers/Contact/Contact'

function App() {

  return (
    <>
      <NavBar />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </>
  )
}

export default App
