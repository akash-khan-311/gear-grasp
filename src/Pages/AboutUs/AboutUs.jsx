import Review from "../../Shared/Review/Review";
import Sponsor from "../../Shared/Sponsor/Sponsor";
import Team from "../../Shared/Team/Team";
import Value from "../../Shared/Value/Value";
import Video from "../../Shared/Video/Video";
import Gellary from "../../components/Gellary/Gellary";
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
        <Gellary />
        <Value />
        <Review />
        <Video />
        <Team />
        <Sponsor />
      </div>
    </div>
  );
};

export default AboutUs;
