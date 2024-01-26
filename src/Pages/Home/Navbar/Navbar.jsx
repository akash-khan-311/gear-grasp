import { Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import logo from "../../../assets/Images/logo.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "../../../components/Sidebar/Sidebar";

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setActive(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const NavList = () => {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
        <Typography
          as="li"
          variant="large"
          color="white"
          className="p-1 font-semibold font-unbounded "
        >
          <NavLink
            to={"/"}
            className="flex items-center  uppercase hover:text-blue-700 transition-colors"
          >
            home
          </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="large"
          color="white"
          className="p-1 font-semibold font-unbounded"
        >
          <NavLink
            to={"/about"}
            className="flex items-center  uppercase hover:text-blue-700 transition-colors"
          >
            about us
          </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="large"
          color="white"
          className="p-1 font-semibold font-unbounded"
        >
          <NavLink
            to={"/services"}
            className="flex items-center  uppercase hover:text-blue-700 transition-colors"
          >
            Services
          </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="large"
          color="white"
          className="p-1 font-semibold font-unbounded"
        >
          <NavLink
            to={"/projects"}
            className="flex items-center  uppercase hover:text-blue-700 transition-colors"
          >
            Projects
          </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="large"
          color="white"
          className="p-1 font-semibold font-unbounded"
        >
          <a
            onClick={() => setDropdown(!dropdown)}
            className="flex items-center  uppercase  cursor-pointer relative"
          >
            Pages{" "}
            {dropdown === true ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
            <div
              className={`absolute top-10 bg-black text-white border-t-4 border-blue-900  transition-all duration-300 ${
                dropdown === true ? "w-[150px] p-4" : "hidden"
              }`}
            >
              <ul className="space-y-3">
                <Typography
                  as="li"
                  variant="large"
                  color="white"
                  className="p-1 font-semibold font-unbounded"
                >
                  <NavLink
                    to={"/gallery"}
                    className="flex items-center  uppercase hover:text-blue-700 transition-colors"
                  >
                    Gallery
                  </NavLink>
                </Typography>
                <Typography
                  as="li"
                  variant="large"
                  color="white"
                  className="p-1 font-semibold font-unbounded"
                >
                  <NavLink
                    to={"/team"}
                    className="flex items-center  uppercase hover:text-blue-700 transition-colors"
                  >
                    Team
                  </NavLink>
                </Typography>
                <Typography
                  as="li"
                  variant="large"
                  color="white"
                  className="p-1 font-semibold font-unbounded"
                >
                  <NavLink
                    to={"/faq"}
                    className="flex items-center  uppercase hover:text-blue-700 transition-colors"
                  >
                    faqs
                  </NavLink>
                </Typography>
                <Typography
                  as="li"
                  variant="large"
                  color="white"
                  className="p-1 font-semibold font-unbounded"
                >
                  <NavLink
                    to={"/blogs"}
                    className="flex items-center  uppercase hover:text-blue-700 transition-colors"
                  >
                    blogs
                  </NavLink>
                </Typography>
              </ul>
            </div>
          </a>
        </Typography>
        <Typography
          as="li"
          variant="large"
          color="white"
          className="p-1 font-semibold font-unbounded"
        >
          <NavLink
            to={"/contact"}
            className="flex items-center  uppercase hover:text-blue-700 transition-colors"
          >
            Contact
          </NavLink>
        </Typography>
      </ul>
    );
  };

  return (
    <div>
      <nav className="container mx-auto">
        <div className="flex items-center  justify-between text-blue-gray-900">
          <Typography
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:flex hidden"
          >
            <img src={logo} className="w-52" alt="GEARGRASP" />
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-10 w-10 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={handleToggle}
          >
            {isActive ? (
              <Bars3Icon className="h-10 w-10 text-blue-700" strokeWidth={2} />
            ) : (
              <XMarkIcon className="h-10 w-10 text-blue-700" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Sidebar NavList={NavList} isActive={isActive} />
      </nav>
    </div>
  );
};

export default Navbar;
