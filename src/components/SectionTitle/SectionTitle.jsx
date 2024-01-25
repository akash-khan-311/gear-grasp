/* eslint-disable react/prop-types */
const SectionTitle = ({ title, secondTitle }) => {
  return (
    <div className="uppercase ">
      <h1
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
      >
        {title} <span className="text-gradient">{secondTitle}</span>
      </h1>
    </div>
  );
};

export default SectionTitle;
