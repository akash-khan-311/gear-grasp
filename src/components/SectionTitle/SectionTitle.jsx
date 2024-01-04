/* eslint-disable react/prop-types */
const SectionTitle = ({ title, secondTitle }) => {
  return (
    <div className="uppercase ">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        {title} <span className="text-gradient">{secondTitle}</span>
      </h1>
    </div>
  );
};

export default SectionTitle;
