import React from "react";
import Project from "./Project";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <section className={`ybg-white yp-5 yrounded-md yshadow`}>
      <img
        src={project.projectImg}
        alt={project.projectImg}
        className={`yrounded-xl`}
      />
      <div className={`ypy-5`}>
        <div className={`yflex yflex-col ygap-1`}>
          <h1 className={`ytext-2xl yfont-biotifBlack`}>
            {project.projectName}
          </h1>
          <p className={`yfont-biotifBold`}>{project.industryType}</p>
          <p className={`ytext-sm md:ytext-base yfont-biotifRegular`}>
            {project.projectDescription}
          </p>
        </div>
        <aside className={`ygrid ygrid-cols-2 yitems-center yjustify-between ypt-12`}>
          <div className={`yflex ygap-2`}>
            <Button
              asChild
              className={`yfont-spaceGroteskRegular yrounded-full yh-8 yw-8`}
            >
              <Link to={project.liveLink}></Link>
            </Button>
            <Button
              asChild
              className={`yfont-spaceGroteskRegular yrounded-full yh-8 yw-8`}
            >
              <Link to={project.githubLink}></Link>
            </Button>
          </div>
          <ul className={`yflex ygap-2 `}>
            {Object.keys(project.techStackIcon).map((stack) => (
              <li className={``} key={stack}>
                <img
                  src={project.techStackIcon[stack]}
                  alt={` logo`}
                  className={`yrounded  yring-1 hover:ycursor-pointer`}
                />
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default ProjectCard;
