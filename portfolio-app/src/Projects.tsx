import React, { useEffect, useRef } from "react";
import { animate, scroll } from "motion";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const MyPopup = (
  id: string,
  projects: {
    id: string;
    name: string;
    description: string;
    duration: string;
    src: string;
  }[]
) => (
  <Popup
    trigger={
      <img
        src={projects.find((project) => project.id === id)?.src}
        alt={`project ${id}`}
        className="cursor-pointer"
      />
    }
    position="center center"
    contentStyle={{
      width: "42rem",
      padding: "20px",
      backgroundColor: "#f1f1f1",
      cursor: "pointer",
    }}
  >
    <div className="text-left text-justify">
      <span className="font-bold">Description : </span>{projects.find((project) => project.id === id)?.description}
      <br />
      <span className="font-bold">Durée : </span>{projects.find((project) => project.id === id)?.duration}
    </div>
  </Popup>
);
interface ProjectsProps {
  projects: {
    id: string;
    name: string;
    description: string;
    duration: string;
    src: string;
  }[];
}

const Project: React.FC<ProjectsProps> = ({ projects }) => {
  const imgGroupContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imgGroupContainerRef.current) return;

    const container = imgGroupContainerRef.current;

    // Scroll horizontally
    scroll(
      animate(".img-group", {
        transform: ["none", `translateX(-${projects.length - 1}00vw)`],
      }),
      { target: container }
    );

    // Scroll progress
    const progressAnimation = scroll(
      animate(".progress", { scaleX: [0, 1], opacity: 1 }),
      {
        target: container,
        offset: ["start", "end 90%", "end"],
      }
    );
    return () => {
      progressAnimation();
    };
  }, [projects.length]);

  return (
    <div>
      <article
        id="project-img"
        className="bg-gradient-to-b from-gray-200 to-gray-600"
      >
        <header>
          <h2 id="projects" >
            Projects
          </h2>
        </header>
        <section className="img-group-container " ref={imgGroupContainerRef}>
          <div>
            <ul className="img-group">
              {projects.map((project) => (
                <li key={project.id} className="img-container">
                  {MyPopup(project.id, projects)}
                  <h3>#{project.name}</h3>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
      <div className="progress"></div>
    </div>
  );
};

export default Project;
