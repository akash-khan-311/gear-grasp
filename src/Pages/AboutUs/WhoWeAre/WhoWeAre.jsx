import aboutUs from "../../../assets/Images/About-Us-Image-8.jpg";
import Facilites from "../../../components/Facilites/Facilites";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Subtitle from "../../../components/SubTitle/Subtitle";
import { BsGear } from "react-icons/bs";
import me from "../../../assets/Images/team/team1.jpg";

const WhoWeAre = () => {
  return (
    <div className="container mx-auto px-5 lg:px-0 py-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Image */}
        <div className="w-full lg:w-1/3">
          <img src={aboutUs} alt="" />
        </div>
        {/* Content */}
        <div className="w-full lg:w-2/3">
          <Subtitle text={"who we are"} />
          <SectionTitle title={"AWESOME MOTORCYCLE"} secondTitle={"BUILDER"} />
          <p className="text-white">
            At GearGrasp, we are more than just enthusiasts; we are craftsmen
            dedicated to the art of building exceptional motorcycles. With
            passion fueling our creativity, we bring expertise and innovation to
            every project, delivering awe-inspiring rides that embody the spirit
            of the open road.
          </p>
          <div className="mt-10 flex flex-col md:flex-row justify-between items-start lg:items-center ">
            {/* Facilities */}
            <div className="text-white space-y-5">
              <Facilites label={"TAILORED DESIGN"} icon={BsGear} />
              <Facilites label={"UNIQUE FABRICATION"} icon={BsGear} />
              <Facilites label={"EXCLUSIVE MATERIALS"} icon={BsGear} />
              <Facilites label={"ATTENTION TO DETAIL"} icon={BsGear} />
            </div>
            {/* Varticle line */}
            <div className="border-r border-blue-600 h-52 hidden lg:block"></div>
            {/* CEO */}
            <div>
              <div className="text-white mt-10 md:mt-0">
                <div className="flex items-center gap-x-5">
                  <img
                    src={me}
                    className="w-14 h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 rounded-full"
                    alt=""
                  />
                  <div>
                    <h4 className="text-xl md:text-2xl lg:text-3xl">
                      Akash Khan
                    </h4>
                    <p className="text-sm text-blue-500">
                      GearGrasp Founder || CEO
                    </p>
                  </div>
                </div>

                <h2 className="font-sign text-5xl text-center text-gray-400 mt-10">
                  Akash Khan
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
