import React from 'react'
import ReactDOM from 'react-dom/client'

// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from '@material-tailwind/react'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/PublicRoutes.jsx'
// AOS.init();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider >

    <RouterProvider router={Router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
