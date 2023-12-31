import Review from "../../../Shared/Review/Review";
import Services from "../../../Shared/Services/Services";
import Sponsor from "../../../Shared/Sponsor/Sponsor";
import Team from "../../../Shared/Team/Team";
import Value from "../../../Shared/Value/Value";
import Video from "../../../Shared/Video/Video";
import Banner from "../Banner/Banner";
import Club from "../Club/Club";
import WhoWeAre from "../WhoWeAre/WhoWeAre";

const Home = () => {
  return (
    <>
      <Banner />
      <Sponsor />
      <WhoWeAre />
      <Video />
      <Services />
      <Value />
      <Team />
      <Review />
      <Club />
    </>
  );
};

export default Home;
