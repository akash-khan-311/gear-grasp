import { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Subtitle from "../../components/SubTitle/Subtitle";
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard";
import Value from "../../Shared/Value/Value";
import Review from "../../Shared/Review/Review";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <>
      <PageTitle title={"Projects"} />
      <div className="flex flex-col justify-center items-center text-center text-white space-y-5 my-20">
        <Subtitle text={"our projects"} />
        <SectionTitle title={"impressive project "} secondTitle={"lineup"} />
        <p>
          Discover our stellar projects, redefining excellence in motorcycle
          craftsmanship.
        </p>
      </div>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectsCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <Value />
      <Review />
    </>
  );
};

export default Projects;
