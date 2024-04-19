import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Registration from './pages/Registration'

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Registration />} />
            

            </Routes>
        </div>
    )
}

export default MainRoutes
