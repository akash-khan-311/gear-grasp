/* eslint-disable react/prop-types */
import "./TeamCard.css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const TeamCard = ({ img, name, role }) => {
  //   const dynamicStyles = {
  //     backgroundImage: `url(${img})`,
  //     height: "100%",
  //     width: "100%",
  //     position: "absolute",
  //     transition: "transform .3s ease-in-out",
  //     zIndex: 2,
  //   };

  return (
    <div>
      <div className="card relative overflow-x-hidden overflow-y-hidden ">
        <div className="w-full h-full  ">
          <img className="h-full w-full" src={img} alt />
        </div>
        <div className="info absolute top-0 flex justify-center items-center mx-auto w-full h-full">
          <div className="space-y-3 text-white flex flex-col justify-center items-center">
            <h1 className="text-2xl uppercase">{name}</h1>
            <p className=" uppercase">{role}</p>
            <div className="flex justify-center gap-x-5">
              <a
                className="border text-sm p-2 rounded-full hover:border-blue-700 hover:text-blue-600 ease-in-out duration-200"
                href="https://www.facebook.com/iyaRahmanirRahim"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                className="border text-sm p-2 rounded-full hover:border-blue-700 hover:text-blue-600 ease-in-out duration-200"
                href="https://twitter.com/AkashKhan334"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                className="border text-sm p-2 rounded-full hover:border-blue-700 hover:text-blue-600 ease-in-out duration-200"
                href="https://www.linkedin.com/in/md-akash-ali-9585a02a0/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
