import React, { useEffect, useRef, useState } from "react";
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
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleProjectClick = (id: string) => {
    setSelectedProject(id === selectedProject ? null : id);
  };

  const selectedProjectData = selectedProject
    ? projects.find((project) => project.id === selectedProject)
    : null;

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

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedProject) {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [selectedProject]);

  return (
    <div>
      {selectedProject ? (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-95 z-50 flex items-center justify-center">
          <div className="flex w-4/5 h-4/5 bg-white rounded-lg overflow-hidden shadow-2xl">
            {/* Image côté gauche */}
            <div className="w-1/2 bg-gray-200 flex items-center justify-center p-6">
              <img
                src={selectedProjectData?.src}
                alt={selectedProjectData?.name}
                className="max-h-full max-w-full object-contain rounded-lg shadow-md"
              />
            </div>

            {/* Description côté droit */}
            <div className="w-1/2 p-8 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">
                  #{selectedProjectData?.name}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-600 hover:text-gray-900 p-2"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Description
                </h3>
                <p className="text-gray-600">
                  {selectedProjectData?.description}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Durée
                </h3>
                <p className="text-gray-600">{selectedProjectData?.duration}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}

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
                <li
                  key={project.id}
                  className="img-container relative cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => handleProjectClick(project.id)}
                >
                  <img
                    src={project.src}
                    alt={`project ${project.id}`}
                    className="shadow-md"
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
