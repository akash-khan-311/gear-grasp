/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";

const Sidebar = ({ isActive, NavList }) => {
  return (
    <div
      className={`z-10 h-screen lg:hidden  bg-blue-gray-800 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
        isActive && "-translate-x-full"
      }    transition duration-200 ease-in-out`}
    >
      <div>
        <div>
          <div className="w-full md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>

        {/* Nav Items */}
        <div className="flex flex-col justify-between flex-1 mt-6  ">
          {/* If a user is host */}

          <NavList />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
