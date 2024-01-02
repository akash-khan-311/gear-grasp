import TeamCard from "../../components/TeamCard/TeamCard";
import team1 from "../../assets/Images/team/team1.jpg";
import team2 from "../../assets/Images/team/team2.jpg";
import team3 from "../../assets/Images/team/team3.jpg";
import team4 from "../../assets/Images/team/team4.jpg";
import Subtitle from "../../components/SubTitle/Subtitle";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const Team = () => {
  return (
    <div className="container mx-auto px-5 lg:px-0 overflow-x-hidden overflow-y-hidden my-10">
      <div className="flex flex-col lg:flex-row items-center gap-x-10">
        <div className="h-full  w-full">
          <TeamCard name={"Akash Khan"} role={"Founder || CEO"} img={team1} />
        </div>
        <div className="text-white space-y-5 mt-10 lg:mt-0 ">
          <Subtitle text={"our team"} />
          <SectionTitle title={"meet the"} secondTitle={"masters"} />
          <p>
            {` Explore the pinnacle of expertise with GearGrasp's 'Meet the
            Masters' section. Immerse yourself in the profiles of our skilled
            team, each a master in their craft, dedicated to delivering
            unparalleled automotive excellence.`}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10 ">
            <TeamCard name={"mike owen"} role={"builder"} img={team2} />
            <TeamCard img={team3} name={"cole young"} role={"mechanic"} />
            <TeamCard img={team4} name={"jim burton"} role={"painter"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
