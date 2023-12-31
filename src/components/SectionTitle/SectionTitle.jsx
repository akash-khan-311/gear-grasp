/* eslint-disable react/prop-types */
const SectionTitle = ({ title, secondTitle }) => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
        {title} <span className="text-gradient">{secondTitle}</span>
      </h1>
    </div>
  );
};

export default SectionTitle;
