import { useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Subtitle from "../../components/SubTitle/Subtitle";
import "./Services.css";
import { useEffect } from "react";
import ServicesCard from "../../components/ServicesCard/ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="bg-img overflow-y-hidden">
      <div className="container mx-auto text-white px-5 lg:px-0">
        <div className="flex flex-col justify-center  items-center py-10 text-center">
          <div
            className="flex flex-col justify-center  items-center"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            <Subtitle text={"WHAT WE DO"} />
            <SectionTitle title={"THE ART OF"} secondTitle={"SERVICE"} />
          </div>
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="my-5 text-sm md:text-base text-center"
          >
            Experience excellence with GearGrasp. The Art of Unmatched
            Automotive Service.
          </p>
        </div>
        {/* Service Items  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
          {services.map((service) => (
            <ServicesCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
