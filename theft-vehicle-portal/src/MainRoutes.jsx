import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Registration from './pages/Registration'
import View from './pages/View'
const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reg" element={<Registration />} />
                <Route path="/view" element={<View />} />
            </Routes>
        </div>
    )
}

export default MainRoutes
