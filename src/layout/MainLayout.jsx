import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop'
import { LoginModal } from '../Components/LoginModal/LoginModal'
import NavSideMenu from '../Components/NavSideMenu/NavSideMenu'
import ScrollProgressBar from '../Components/ProgressBar/ProgressBar'
import { Modal } from '../Components/Modal/Modal'
import LoginPage from '../Pages/LoginPage/LoginPage'
import { LoggedClientModal } from '../Components/LoggedClientModal/LoggedClientModal'

export const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <ToastContainer position={"top-right"} autoClose={3000} />
            <ScrollToTop />
            <NavSideMenu />
            <ScrollProgressBar />
        </>
    )
}
