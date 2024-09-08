import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop'
import NavSideMenu from '../Components/NavSideMenu/NavSideMenu'
import ScrollProgressBar from '../Components/ProgressBar/ProgressBar'

export const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <ScrollToTop />
            <NavSideMenu />
            <ScrollProgressBar />
        </>
    )
}
