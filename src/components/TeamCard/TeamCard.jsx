/* eslint-disable react/prop-types */
import "./TeamCard.css";

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
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
