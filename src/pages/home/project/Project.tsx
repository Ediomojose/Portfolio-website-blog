import React from "react";
import ProjectData from "@/data/ProjectData";
import ProjectCard from "./ProjectCard";
import { Interface } from "readline";

const Project = () => {
  return (
    <section className="">
      <h1 className="">Selected Works</h1>
      <main
        className={`ybg-brandConcrete yp-5 ypy-20 md:yp-10 lg:yp-48 ymy-10 ygrid ygrid-cols-1 md:ygrid-cols-2 ygap-10`}
      >
        {ProjectData.map((project) => (
          <ProjectCard key={project.projectName} project={project} />
        ))}
      </main>
    </section>
  );
};

export default Project;
