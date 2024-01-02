/* eslint-disable react/prop-types */

const Counter = ({ number, text, count }) => {
  return (
    <div className="flex flex-col justify-center text-center items-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold relative">
        {number}{" "}
        <span className="uppercase text-blue-700 text-lg absolute">
          {count}
        </span>
      </h1>
      <h4 className="uppercase text-sm md:text-xl font-semibold mt-5">
        {text}
      </h4>
    </div>
  );
};

export default Counter;
