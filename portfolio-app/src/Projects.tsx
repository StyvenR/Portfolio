import React, { useEffect, useRef, useState } from "react";
import { animate, scroll } from "motion";

interface ProjectsProps {
  projects: {
    id: string;
    name: string;
    description: string;
    link: string;
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
        <div className="fixed inset-0 bg-black bg-opacity-75 dark:bg-opacity-95 z-50 flex items-center justify-center">
          {" "}
          <div className="flex w-4/5 h-4/5 bg-white/20 dark:bg-slate-900/50 backdrop-blur-2xl border border-violet-300/30 dark:border-violet-700/40 shadow-modal-light dark:shadow-modal-dark rounded-lg overflow-hidden">
            {/* Image côté gauche */}
            <div className="w-1/2 bg-white/10 dark:bg-slate-800/40 backdrop-blur-lg border border-orange-300/30 dark:border-slate-600/40 flex items-center justify-center p-6">
              <img
                src={selectedProjectData?.src}
                alt={selectedProjectData?.name}
                className="max-h-full max-w-full object-contain rounded-lg shadow-md"
              />
            </div>

            {/* Description côté droit */}
            <div className="w-1/2 p-8 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
                  #{selectedProjectData?.name}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white p-2"
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
                <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Description
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {selectedProjectData?.description}
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Lien du projet:
                </h3>
                <a
                  href={selectedProjectData?.link}
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:underline"
                >
                  {selectedProjectData?.link}
                </a>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Durée
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedProjectData?.duration}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <article id="project-img">
        <header>
          <h2
            id="projects"
            className="bg-white dark:bg-gray-800 dark:text-white p-8 opacity-96 rounded-xl shadow-lg "
          >
            Projects
          </h2>
        </header>
        <section className="img-group-container" ref={imgGroupContainerRef}>
          <div>
            <ul className="img-group">
              {projects.map((project) => (
                <li
                  key={project.id}
                  className="img-container relative cursor-pointer flex flex-col items-center justify-center"
                  onClick={() => handleProjectClick(project.id)}
                >
                  <img
                    src={project.src}
                    alt={`project ${project.id}`}
                    className="rounded-md bg-white border border-gray-300 shadow-xl transition-transform duration-300 transform hover:scale-105 w-[600px] h-96 object-cover object-center"
                  />
                  <h3 className="m-0 text-5xl font-bold tracking-tighter leading-tight relative -bottom-7 px-2.5 pb-2.5 rounded-lg inline-block transition-all duration-300 text-gray-900 dark:text-white bg-white/80 dark:bg-gray-800/90 border border-black dark:border-white/30 underline">
                    #{project.name}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
      <div className="progress fixed left-0 right-0 h-1.5 bottom-12 transform scale-x-0 transition-colors duration-300 bg-black dark:bg-white"></div>
    </div>
  );
};

export default Project;
