import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";

import ServicesPage from "../Pages/Services/Services";
import GalleryPage from "../Pages/GalleryPage/GalleryPage";
import Projects from "../Pages/Projects/Projects";
import TeamPage from "../Pages/TeamPage/TeamPage";
import FAQ from "../Pages/FAQ/FAQ";
import BlogsPage from "../Pages/Blogs/BlogsPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Router = createBrowserRouter([
  { path: "*", element: <ErrorPage /> },
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/projects", element: <Projects /> },
      { path: "/gallery", element: <GalleryPage /> },
      { path: "/team", element: <TeamPage /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/blogs", element: <BlogsPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

export default Router;
