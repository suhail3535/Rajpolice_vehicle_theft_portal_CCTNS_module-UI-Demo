import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Registration from './pages/Registration'
import Demo from './pages/Demo'
import VehicleForm from './pages/VehicleForm'

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Registration />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/v" element={<VehicleForm />} />


            </Routes>
        </div>
    )
}

export default MainRoutes
