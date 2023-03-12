import { Routes, Route } from 'react-router-dom'

import { Details } from "../pages/Details"
import { NewMovie } from "../pages/NewMovie"
import { Profile } from "../pages/Profile"
import { Home } from "../pages/Home"


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/new" element={<NewMovie />} />
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/details/:id" element={<Details />} />
        </Routes>
    )
}