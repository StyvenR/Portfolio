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
    teamSize: string;
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

    scroll(
      animate(".img-group", {
        transform: ["none", `translateX(-${projects.length - 1}00vw)`],
      }),
      { target: container }
    );

    const progressAnimation = scroll(
      animate(".progress", {
        scaleX: [0, 1],
        opacity: [1, 1, 0],
      }),
      {
        target: container,
        offset: ["start center", "end start"],
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
        <div className="fixed inset-0 bg-black/30 dark:bg-black/50 z-50 flex items-center justify-center">
          <div className="flex w-4/5 h-4/5 bg-portfolio-light-modal dark:bg-portfolio-dark-modal backdrop-blur-2xl border border-portfolio-light-modal-border dark:border-portfolio-dark-modal-border shadow-modal-light dark:shadow-modal-dark rounded-lg overflow-hidden">
            {/* Image côté gauche */}
            <div className="w-1/2 bg-portfolio-light-image-container dark:bg-portfolio-dark-image-container backdrop-blur-lg border border-portfolio-light-image-border dark:border-portfolio-dark-image-border flex items-center justify-center p-6">
              <img
                src={selectedProjectData?.src}
                alt={selectedProjectData?.name}
                className="max-h-full max-w-full object-contain rounded-lg shadow-md"
              />
            </div>

            {/* Description côté droit */}
            <div className="w-1/2 p-8 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-white">
                  #{selectedProjectData?.name}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-white hover:text-gray-200 p-2 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-all duration-300"
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
                <h3 className="text-lg font-semibold text-white mb-2">
                  Description
                </h3>
                <p className="text-gray-200">
                  {selectedProjectData?.description}
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Lien du projet:
                </h3>
                <a
                  href={selectedProjectData?.link}
                  target="_blank"
                  className="text-gray-200 hover:text-gray-200 hover:underline transition-colors duration-300"
                >
                  {selectedProjectData?.link}
                </a>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">Durée</h3>
                <p className="text-gray-200">{selectedProjectData?.duration}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Équipe
                </h3>
                <p className="text-gray-200">{selectedProjectData?.teamSize}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <article id="project-img">
        <header>
          <h2
            id="projects"
            className="bg-portfolio-light-bg dark:bg-portfolio-dark-bg backdrop-blur-2xl border border-portfolio-light-border dark:border-portfolio-dark-border text-slate-800 dark:text-slate-50 p-8 rounded-xl shadow-portfolio-light dark:shadow-portfolio-dark transition-all duration-300"
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
                    className="rounded-md bg-white border border-slate-300 dark:border-slate-600 shadow-xl transition-transform duration-300 transform hover:scale-105 w-[600px] h-96 object-cover object-center"
                  />
                  <h3 className="m-0 text-5xl font-bold tracking-tighter leading-tight relative -bottom-7 px-2.5 pb-2.5 rounded-lg inline-block transition-all duration-300 text-slate-900 dark:text-slate-50 bg-white/80 dark:bg-slate-800/90 border border-slate-400 dark:border-slate-300 underline">
                    #{project.name}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
      {/* Barre de progression avec dégradé */}
      <div
        className="progress fixed left-0 right-0 h-4 bottom-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 rounded-full mx-4 shadow-2xl border-2 border-white/30 dark:border-slate-600/50"
        style={{
          transformOrigin: "left",
          transform: "scaleX(0.3)",
          zIndex: 1000,
          opacity: "1 !important",
        }}
      ></div>
    </div>
  );
};

export default Project;
