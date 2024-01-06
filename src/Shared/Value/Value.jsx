import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Subtitle from "../../components/SubTitle/Subtitle";
import "./Value.css";

const Value = () => {
  return (
    <div className="py-28 value-bg text-white">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="w-full lg:w-2/3 space-y-4">
          <Subtitle text={"our value"} />
          <SectionTitle
            title={"CRAFTSMANSHIP BEYOND"}
            secondTitle={"COMPARE"}
          />
          <p className="w-full lg:w-5/6 text-sm md:text-base">
            Discover our commitment to excellence in every detail. Our value
            lies in crafting unparalleled quality, setting standards beyond
            compare. Experience true craftsmanship with us.
          </p>
        </div>
        <div className="flex items-center gap-x-5 flex-wrap justify-center md:justify-start">
          <ProgressBar percentage={93} title={"creativity"} />
          <ProgressBar percentage={97} title={"technique"} />
          <ProgressBar percentage={90} title={"ability"} />
        </div>
      </div>
    </div>
  );
};

export default Value;
