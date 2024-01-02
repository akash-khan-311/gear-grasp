import Services from "../../../../Shared/Services/Services";
import Sponsor from "../../../../Shared/Sponsor/Sponsor";
import Video from "../../../../Shared/Video/Video";
import Banner from "../Banner/Banner";
import WhoWeAre from "../WhoWeAre/WhoWeAre";

const Home = () => {
  return (
    <>
      <Banner />
      <Sponsor />
      <WhoWeAre />
      <Video />
      <Services />
    </>
  );
};

export default Home;
