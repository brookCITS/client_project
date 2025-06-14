import React, { StrictMode, useState, useEffect} from 'react'
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';

//auth routes
import LoginPage from './Routes/auth/login';
import SignupPage from './Routes/auth/register';
import VerifyEmailPage from './Routes/auth/verifyEmail';
import ForgotPasswordPage from './Routes/auth/forgotPassword';
import ResetPasswordPage from './Routes/auth/resetPassword';

//dahsboard routes
import LandingPage from './Routes/dashboard/landing';
import Bookings from './Routes/dashboard/booking';
import ContactUsPage from './Routes/contact';
import ErrorPage from './Routes/error';



const router = createBrowserRouter([
  {
    path: "/login",
    element:  <LoginPage/>,
  },
  {
    path: "/register",
    element:  <SignupPage/>,
  },
  {
    path: "/forgot-password",
    element:  <ForgotPasswordPage/>,
  },
  {
    path: "/reset-password",
    element:  <ResetPasswordPage/>,
  },
  {
    path: "/verify-email",
    element:  <VerifyEmailPage/>,
  },
  {
    path: "/",
    element:  <App />,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element:  <LandingPage/>,
      },
      {
        path: "/profile",
        element:  <LandingPage/>,
      },
      {
        path: "/bookings",
        element:  <Bookings/>,
      },
      {
        path: "/settings",
        element:  <LandingPage/>,
      },
    ]
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

reportWebVitals();
