import React from "react";
import c from "./Projects.module.css";
import ProjectTile from "./ProjectTile";

const Projects = (props) => {
  return (
    <section
      className={`page ${c.sec}`}
      id="projects"
      onClick={() => {
        props.toggleContact();
      }}
    >
      <h2>Projects</h2>
      <ul>
        <div>
          {props.projects.map((proj) => {
            return <ProjectTile key={proj.url} project={proj}></ProjectTile>;
          })}
        </div>
      </ul>
    </section>
  );
};

export default Projects;
