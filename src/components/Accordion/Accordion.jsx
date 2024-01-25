/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Faqs = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-x-20">
      <div>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            className={`${
              open === 1
                ? "text-blue-600 hover:text-blue-600"
              : "text-white hover:text-white"
            } uppercase`}
            onClick={() => handleOpen(1)}
          >
            How can I request a custom motorcycle design?
          </AccordionHeader>
          <AccordionBody className="text-lg text-white">
            You can submit your request through our Contact Us page, specifying
            your preferences and requirements. Our team will get in touch with
            you to discuss the details.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            className={`${
              open === 2
                ? "text-blue-600 hover:text-blue-600"
                : "text-white hover:text-white"
            } uppercase`}
            onClick={() => handleOpen(2)}
          >
            What types of motorcycles do you specialize in building?
          </AccordionHeader>
          <AccordionBody className="text-lg text-white">
            GearGrasp specializes in a wide range of motorcycles, including
            cruisers, cafe racers, and urban explorers. Our custom builds cater
            to diverse riding preferences. dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            className={`${
              open === 3
                ? "text-blue-600 hover:text-blue-600"
                : "text-white hover:text-white"
            } uppercase`}
            onClick={() => handleOpen(3)}
          >
            How long does it take to complete a custom motorcycle project?
          </AccordionHeader>
          <AccordionBody className="text-lg text-white">
            The timeline varies based on the complexity of the project. On
            average, projects are completed within 8 to 12 weeks. Specific
            timelines will be discussed during the consultation. dreams.
          </AccordionBody>
        </Accordion>
      </div>
      <div>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader
            className={`${
              open === 4
                ? "text-blue-600 hover:text-blue-600"
                : "text-white hover:text-white"
            } uppercase`}
            onClick={() => handleOpen(4)}
          >
            Can I visit your workshop to see ongoing projects?
          </AccordionHeader>
          <AccordionBody className="text-lg text-white">
            Currently, visits to our workshop are by appointment only. Feel free
            to contact us to schedule a visit, and we'll be happy to show you
            around and discuss ongoing projects.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
          <AccordionHeader
            className={`${
              open === 5
                ? "text-blue-600 hover:text-blue-600"
                : "text-white hover:text-white"
            } uppercase`}
            onClick={() => handleOpen(5)}
          >
            What sets GearGrasp apart from other motorcycle builders?
          </AccordionHeader>
          <AccordionBody className="text-lg text-white">
            GearGrasp is driven by a passion for innovation and craftsmanship.
            Our commitment to pushing boundaries, attention to detail, and
            customer-centric approach sets us apart, delivering exceptional
            results.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
          <AccordionHeader
            className={`${
              open === 6
                ? "text-blue-600 hover:text-blue-600"
                : "text-white hover:text-white"
            } uppercase`}
            onClick={() => handleOpen(6)}
          >
            Are financing options available for custom builds?
          </AccordionHeader>
          <AccordionBody className="text-lg text-white">
            Yes, we offer financing options for our custom motorcycle builds.
            Contact our team, and we can discuss financing plans tailored to
            suit your budget and preferences.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
