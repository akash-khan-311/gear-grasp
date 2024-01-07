import Review from "../../Shared/Review/Review";
import Sponsor from "../../Shared/Sponsor/Sponsor";
import Team from "../../Shared/Team/Team";
import Value from "../../Shared/Value/Value";
import Video from "../../Shared/Video/Video";

import PageTitle from "../../components/PageTitle/PageTitle";
import Images from "./Images/Images";
import WhoWeAre from "./WhoWeAre/WhoWeAre";

const AboutUs = () => {
  return (
    <div className="">
      <div className="">
        <div>
          <PageTitle title={"about us"} />
        </div>
        <div className="">
          <WhoWeAre />
          <div className="py-10">
            <Images />
          </div>
          <Value />
          <Review />
          <Video />
          <Team />
          <Sponsor />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
