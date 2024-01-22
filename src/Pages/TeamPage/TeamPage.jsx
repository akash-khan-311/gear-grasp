import Sponsor from "../../Shared/Sponsor/Sponsor";
import Team from "../../Shared/Team/Team";
import Value from "../../Shared/Value/Value";
import PageTitle from "../../components/PageTitle/PageTitle";

const TeamPage = () => {
  return (
    <div>
      <PageTitle title={"Team"} />
      <Team />
      <Value/>
      <Sponsor/>
      
    </div>
  );
};

export default TeamPage;
