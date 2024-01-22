import { Link } from "react-router-dom";
import MyBtn from "../MyBtn/MyBtn";

/* eslint-disable react/prop-types */
const ProjectsCard = ({ project }) => {
  const { id, projectName, projectImage } = project;
  return (
    <div>
      <div className="card relative overflow-x-hidden overflow-y-hidden ">
        <div className="w-full h-full  ">
          <img className="h-full w-full" src={projectImage} alt />
        </div>
        <div className="info absolute top-0 flex justify-center items-center mx-auto w-full h-full">
          <div className="space-y-3 text-white flex flex-col justify-center items-center">
            <h1 className="text-2xl uppercase">{projectName}</h1>
            <Link to={`/detail/${id}`}>
              <MyBtn label={"details"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
