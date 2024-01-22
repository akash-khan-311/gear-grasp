import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";

import ServicesPage from "../Pages/Services/Services";
import GalleryPage from "../Pages/GalleryPage/GalleryPage";
import Projects from "../Pages/Projects/Projects";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/projects", element: <Projects /> },
      { path: "/gallery", element: <GalleryPage /> },
    ],
  },
]);

export default Router;
