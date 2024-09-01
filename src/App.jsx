import React, { useEffect } from 'react'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import AboutPage from './Pages/AboutPage/AboutPage'
import ToursPage from './Pages/ToursPage/ToursPage'
import { ErrorPage } from './Pages/ErrorPage/ErrorPage'
import DestinationPage from './Pages/DestinationPage/DestinationPage'
import Blog from './Pages/Blog/Blog'
import LoginPage from './Pages/LoginPage/LoginPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import Register from './Pages/Register/Register'
import SingleTour from './Pages/SingleTour/SingleTour'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import ProgressBar from './Components/ProgressBar/ProgressBar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { CheckOut } from './Pages/CheckOut/CheckOut'
import { LoginModal } from './Components/LoginModal/LoginModal'
import NavSideMenu from './Components/NavSideMenu/NavSideMenu'
import { messages } from './translations/messages'
import { IntlProvider } from 'react-intl'
import { DashboardLayout } from './Dashboard/Component/DashboardLayout/DashboardLayout'
import { ToursDashboard } from './Dashboard/Component/ToursDashboard/ToursDashboard'
import { HomeDashboard } from './Dashboard/Component/HomeDashboard/HomeDashboard'
import { ReviewsDashboard } from './Dashboard/Component/ReviewsDashboard/ReviewsDashboard'
import { UsersDashboard } from './Dashboard/Component/UsersDashboard/UsersDashboard'
import { ContactMessagesDashboard } from './Dashboard/Component/ContactMessagesDashboard/ContactMessagesDashboard'
import { BookedToursDashboard } from './Dashboard/Component/BookedToursDashboard/BookedToursDashboard'
import CategoryTours from './Pages/CategoryTours/CategoryTours'
import { SingleBlog } from './Pages/SingleBlog/SingleBlog'
import { BlogsDashboard } from './Dashboard/Component/BlogsDashboard/BlogsDashboard'
import { useRecoilState } from 'recoil'
import { $lang, $theme } from './Store'
import router from './routes/routes'

export default function App() {
  const lang = localStorage.getItem("lang") || "ltr";
  const [langState, setLangState] = useRecoilState($lang);
  const locale = lang == "ltr" ? "en" : "ar"
  const [theme] = useRecoilState($theme);

  useEffect(() => {
    document.documentElement.dir = lang;
    setLangState(locale)
  }, [])

  const translation = messages[locale];
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className={``}>
      <IntlProvider locale={locale} messages={translation} defaultLocale='en' >
        <RouterProvider router={router} />
      </IntlProvider>
    </div>
  )
}
