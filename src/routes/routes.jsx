import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../Dashboard/Component/DashboardLayout/DashboardLayout";
import { MainLayout } from "../layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import ToursPage from "../Pages/ToursPage/ToursPage";
import Blog from "../Pages/Blog/Blog";
import ContactPage from "../Pages/ContactPage/ContactPage";
import { CheckOut } from "../Pages/CheckOut/CheckOut";
import CategoryTours from "../Pages/CategoryTours/CategoryTours";
import SingleTour from "../Pages/SingleTour/SingleTour";
import { SingleBlog } from "../Pages/SingleBlog/SingleBlog";
import { ErrorPage } from "../Pages/ErrorPage/ErrorPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Register from "../Pages/Register/Register";
import { HomeDashboard } from "../Dashboard/Component/HomeDashboard/HomeDashboard";
import { ToursDashboard } from "../Dashboard/Component/ToursDashboard/ToursDashboard";
import { ReviewsDashboard } from "../Dashboard/Component/ReviewsDashboard/ReviewsDashboard";
import { UsersDashboard } from "../Dashboard/Component/UsersDashboard/UsersDashboard";
import { ContactMessagesDashboard } from "../Dashboard/Component/ContactMessagesDashboard/ContactMessagesDashboard";
import { BookedToursDashboard } from "../Dashboard/Component/BookedToursDashboard/BookedToursDashboard";
import { BlogsDashboard } from "../Dashboard/Component/BlogsDashboard/BlogsDashboard";
import { ForgetPassword } from "../Pages/ForgetPassword/ForgetPassword";
import { UserProfile } from "../Components/UserProfile/UserProfile";
import { UserInfo } from "../Components/UserProfile/UserInfo/UserInfo";
import { UserTransactions } from "../Components/UserProfile/UserTransaction/UserTransactions";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/tours",
                element: <ToursPage />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/contact",
                element: <ContactPage />
            },
            {
                path: "/checkout",
                element: <CheckOut />
            },
            {
                path: "/category/:category?",
                element: <CategoryTours />
            },
            {
                path: "/tour/:id?",
                element: <SingleTour />
            },
            {
                path: "/blog/:id?",
                element: <SingleBlog />
            },
            {
                path: "profile",
                element: <UserProfile />,
                children: [
                    {
                        path: "info",
                        element: <UserInfo />
                    },
                    {
                        path: "transactions",
                        element: <UserTransactions />
                    },
                ]
            },
        ]

    }, {
        path: "/login",
        element: <LoginPage />,
        errorElement: <ErrorPage />
    }, {
        path: "/register",
        element: <Register />,
        errorElement: <ErrorPage />
    }, {
        path: "dashboard",
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "home",
                element: <HomeDashboard />
            },
            {
                path: "tours",
                element: <ToursDashboard />
            },
            {
                path: "reviews",
                element: <ReviewsDashboard />
            },
            {
                path: "users",
                element: <UsersDashboard />
            },
            {
                path: "contact",
                element: <ContactMessagesDashboard />
            },
            {
                path: "bookedTours",
                element: <BookedToursDashboard />
            },
            {
                path: "blogs",
                element: <BlogsDashboard />
            },
        ]
    }, {
        path: "/forgetPassword",
        element: <ForgetPassword />,
        errorElement: <ErrorPage />
    }
]);

export default router;
