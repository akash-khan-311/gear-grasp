import { Link } from "react-router-dom";
import MyBtn from "../../components/MyBtn/MyBtn";
import Subtitle from "../../components/SubTitle/Subtitle";

const ErrorPage = () => {
  return (
    <div className="error-bg h-screen flex items-center font-unbounded">
      <div className="container mx-auto px-5 lg:px-0 ">
        <div className=" text-white space-y-5  w-full lg:w-1/2">
          <Subtitle text={"error"} />
          <h2 className="text-7xl md:text-8xl lg:text-9xl uppercase font-bold ">
            404
          </h2>
          <h3 className="uppercase text-4xl md:text-5xl lg:text-6xl font-bold ">
            page not found
          </h3>
          <p className="">
            Oops! The road seems to be under construction. Navigate back or
            contact us for assistance. GearGrasp is always here to guide you.
          </p>
          <Link className="py-10 flex" to={"/"}>
            <MyBtn label={"back to home"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
