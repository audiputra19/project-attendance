import { FC } from "react"
import { useRoutes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import { ProtectedRoute } from "./ProtectedRoute";
import Register from "../Pages/Regiter";
import { AuthLayout } from "../Layouts/AuthLayout";
import ForgotPassword from "../Pages/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword";
import { MainLayout } from "../Layouts/MainLayout";
import Attendance from "../Pages/Attendance";
import ReportAttendance from "../Pages/ReportAttendance";
import PdfViewer from "../Pages/PdfViewer";
import Salary from "../Pages/Salary";
import Menu from "../Pages/Menu";
import Profile from "../Pages/Profile";
import LanguangeSelector from "../Pages/LanguangeSelector";

export const Router:FC = () => {
    let element = [
        {
            path: '/',
            element: <ProtectedRoute><MainLayout/></ProtectedRoute>,
            // element: <MainLayout/>,
            children: [
                {
                    index: true,
                    element: <Home/>
                },
                {
                    path: '/report',
                    element: <ReportAttendance/>
                },
                {
                    path: '/profile',
                    element: <Profile/>
                },
            ]
        },
        {
            path: '/auth',
            element: <AuthLayout/>,
            children: [
                {
                    index: true,
                    element: <Login/>
                },
                {
                    path: '/auth/register',
                    element: <Register/>
                },
                {
                    path: '/auth/forgot-pass',
                    element: <ForgotPassword/>
                },
                {
                    path: '/auth/reset-pass/:token',
                    element: <ResetPassword/>
                }
            ]
        },
        {
            path: '/attendance',
            element: <ProtectedRoute><Attendance/></ProtectedRoute>
        },
        {
            path: '/pdf-viewer',
            element: <ProtectedRoute><PdfViewer/></ProtectedRoute>
        },
        {
            path: '/salary',
            element: <ProtectedRoute><Salary/></ProtectedRoute>
        },
        {
            path: '/menu',
            element: <Menu/>
        },
        {
            path: '/lang',
            element: <LanguangeSelector/>
        }
    ];

    let routes = useRoutes(element);

    return routes
}