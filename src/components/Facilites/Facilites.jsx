/* eslint-disable react/prop-types */

const Facilites = ({ icon: Icon, label }) => {
  return (
    <div>
  
      <div className="flex  items-center gap-x-3">
        <Icon className="text-sm md:text-2xl text-blue-900" />
        <h4 className="text-sm md:text-lg uppercase font-semibold">{label}</h4>
      </div>
    </div>
  );
};

export default Facilites;
