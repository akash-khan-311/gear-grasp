import img1 from "../../../../assets/Images/who we are/who-we-are-1.jpg";
import img2 from "../../../../assets/Images/who we are/who-we-are-2.jpg";
import Facilites from "../../../../components/Facilites/Facilites";
import MyBtn from "../../../../components/MyBtn/MyBtn";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Subtitle from "../../../../components/SubTitle/Subtitle";
import { BsGear } from "react-icons/bs";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <div className="container mx-auto my-10 px-5 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-start items-center gap-10">
        {/* Who we are image  */}
        <div className="flex justify-center flex-col md:flex-row  gap-4 w-full lg:w-1/2">
          {/* First Image */}
          <div className=" h-full">
            <img src={img1} className=" w-full" alt="" />
          </div>
          {/* Second Image */}
          <div className=" h-full flex flex-col gap-y-5">
            <img src={img2} className=" w-full" alt="" />
            <div className="text-white py-2 border border-blue-800 h-full w-full flex flex-col justify-center items-center bg-style">
              <h1 className="text-2xl ">1,250 +</h1>
              <h2 className="text-xl text-center uppercase">Project done </h2>
            </div>
          </div>
        </div>
        {/* Who we are content */}
        <div className="text-white  w-full lg:w-1/2">
          <Subtitle text={"who we are"} />
          <div>
            <SectionTitle
              title={"AWESOME MOTORCYCLE"}
              secondTitle={"BUILDER"}
            />
            <p className="text-sm md:text-base my-5">
              {`At GearGrasp, we proudly wear the title of "Awesome Motorcycle
              Builder." Infused with passion and precision, we craft two-wheeled
              masterpieces that embody freedom and individuality. Join us in the
              pursuit of thrilling journeys on roads less traveled.`}
            </p>
            {/* Facilites */}
            <div className="flex flex-col md:flex-row justify-center md:justify-between ">
              <div className="space-y-3">
                <Facilites label={"TAILORED DESIGN"} icon={BsGear} />
                <Facilites label={"UNIQUE FABRICATION"} icon={BsGear} />
                <Facilites label={"EXCLUSIVE MATERIALS"} icon={BsGear} />
              </div>
              <div className="space-y-3 mt-3 md:mt-0">
                <Facilites label={"ARTISTIC ELEMENTS"} icon={BsGear} />
                <Facilites label={"ATTENTION TO DETAIL"} icon={BsGear} />
                <Facilites label={"SKILLED BUILDER"} icon={BsGear} />
              </div>
            </div>
          </div>
          <div className="my-5">
            <MyBtn label={"more about us"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
