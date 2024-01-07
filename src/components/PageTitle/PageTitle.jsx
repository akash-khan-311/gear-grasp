/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./PageTitle.css";
import Navbar from "../../Pages/Home/Navbar/Navbar";

const PageTitle = ({ title }) => {
  return (
    <div className="page-bg">
      <Navbar />
      <div className=" py-5">
        <div className="page-title ">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
