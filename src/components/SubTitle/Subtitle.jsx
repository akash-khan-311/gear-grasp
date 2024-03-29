/* eslint-disable react/prop-types */
import img from "../../assets//Images/subt.png";

const Subtitle = ({ text }) => {
  return (
    <div className="">
      <div className="flex items-center w-full h-full gap-x-3">
        <img src={img} className="w-20  h-full block" alt="" />
        <span className="text-lg md:text-xl uppercase text-white">{text}</span>
      </div>
    </div>
  );
};

export default Subtitle;
