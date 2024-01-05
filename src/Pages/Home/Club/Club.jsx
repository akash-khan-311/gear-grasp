import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Subtitle from "../../../components/SubTitle/Subtitle";
import "./Club.css";

const Club = () => {
  return (
    <div className="club-bg lg:py-48 md:py-32 py-20">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start  space-y-3">
          <Subtitle text={"gaztem club"} />
          <div className="flex justify-center items-center text-center lg:text-left">
            <SectionTitle title={"kickstar your"} secondTitle={"adventure"} />
          </div>
          <h4 className="text-xl uppercase text-white font-semibold text-center ">
            BECOME A MEMBER OF GAZTEM TODAY!
          </h4>
          <p className="text-white tracking-wider text-sm text-center lg:text-left">
            Fuel your journey with Gaztem! Become a member today for exclusive
            benefits, exciting adventures, and a vibrant community. Kickstart
            your extraordinary experience with us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Club;
