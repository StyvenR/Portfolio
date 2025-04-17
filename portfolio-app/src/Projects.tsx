import React, { useEffect, useRef } from "react";
import { animate, scroll } from "motion";

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
          <h2 id="projects">Projects</h2>
        </header>
        <section className="img-group-container" ref={imgGroupContainerRef}>
          <div>
            <ul className="img-group">
              {projects.map((project) => (
                <li key={project.id} className="img-container relative">
                  <img
                    src={project.src}
                    alt={`project ${project.id}`}
                    className="cursor-default shadow-md"
                  />
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
