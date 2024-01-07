/* eslint-disable react/prop-types */
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Countup = ({ count, text, subText }) => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold relative text-center">
          {counterOn && <CountUp duration={3} start={0} end={count} />}
          <span className="uppercase text-blue-700 text-lg absolute ">
            {subText}
          </span>
        </h1>
        <h4 className="uppercase text-sm md:text-xl font-semibold text-center">
          {text}
        </h4>
      </div>
    </ScrollTrigger>
  );
};

export default Countup;
