/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./PageTitle.css";
import Navbar from "../../Pages/Home/Navbar/Navbar";

const PageTitle = ({ title }) => {
  return (
    <div className="page-bg">
      <Navbar />
      <div className="container mx-auto px-5 lg:px-0 py-5">
        <div className="page-title ">
          <h1
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase "
          >
            {title}
          </h1>
        </div>
        <div className="text-white flex items-center gap-x-5"></div>
      </div>
    </div>
  );
};

export default PageTitle;
