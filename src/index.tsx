import React, { StrictMode, useState, useEffect} from 'react'
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import LandingPage from './Routes/landing';
import ContactUsPage from './Routes/contact';
import ErrorPage from './Routes/error';






const router = createBrowserRouter([
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
        //contactus
         path: "/contact",
        element:  <ContactUsPage/>,
      }
    ]
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

reportWebVitals();
