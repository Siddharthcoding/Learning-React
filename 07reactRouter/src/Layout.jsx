import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


// Oulet uses layout as a base as keeps things same
// and changes it only where outlet is mentioned
function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout
