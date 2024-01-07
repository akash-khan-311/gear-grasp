import PageTitle from "../../components/PageTitle/PageTitle";
import WhoWeAre from "./WhoWeAre/WhoWeAre";

const AboutUs = () => {
  return (
    <div className="">
      <div className="container mx-auto px-5 lg:px-0">
        <div>
          <PageTitle title={"about us"} />
        </div>
        <WhoWeAre />
      </div>
    </div>
  );
};

export default AboutUs;
