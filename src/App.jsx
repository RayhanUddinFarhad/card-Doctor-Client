import { useState } from 'react'

import './App.css'
import Navbar from './components/Header/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=' '>



     <Navbar></Navbar>

     <div >

     <Outlet></Outlet>

     </div>

     </div>
    </>
  )
}

export default App
