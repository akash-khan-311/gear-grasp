/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const ServicesCard = ({ service }) => {
  const { title, description, icon } = service;
  return (
    <div className="group border ease-in-out duration-300 hover:border-blue-800 hover:backdrop-blur-lg hover:bg-white/10 relative overflow-hidden ">
      <div className="p-10  space-y-5">
        <h3 className="text-3xl  uppercase">{title}</h3>
        <p className="text-sm md:text-base">{description}</p>
        <button>Read More</button>
      </div>
      <img
        className="w-32 absolute ease-in-out duration-300 group-hover:-bottom-16 -bottom-12  right-8 overflow-hidden"
        src={icon}
        alt=""
      />
    </div>
  );
};

export default ServicesCard;
