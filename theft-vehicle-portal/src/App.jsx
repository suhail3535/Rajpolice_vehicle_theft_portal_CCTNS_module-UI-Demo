
import React from 'react'
import Navbar from './component/navbar/Navbar'
import Home from './pages/Home'
import MainRoutes from './MainRoutes'
import DisclaimerModal from './pages/Des'

const App = () => {
  return (
    <div>
      <Navbar />
    
      <MainRoutes />
    </div>
  )
}

export default App
