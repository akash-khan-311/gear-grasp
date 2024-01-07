import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";

import ServicesPage from "../Pages/Services/Services";
import GalleryPage from "../Pages/GalleryPage/GalleryPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/gallery", element: <GalleryPage /> },
    ],
  },
]);

export default Router;
