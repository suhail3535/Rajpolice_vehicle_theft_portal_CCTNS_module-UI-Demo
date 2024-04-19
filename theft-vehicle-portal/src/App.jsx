
import React from 'react'
import Navbar from './component/navbar/Navbar'

import MainRoutes from './MainRoutes'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"
const App = () => {
  return (
    <div>
      <ToastContainer />

      <Navbar />
      <MainRoutes />
    </div>
  )
}

export default App
