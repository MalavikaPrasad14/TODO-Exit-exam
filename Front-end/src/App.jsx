import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar /><br /><br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddNew" element={<Add />} />
      </Routes>
      < Home />
    </>
  )
}

export default App
