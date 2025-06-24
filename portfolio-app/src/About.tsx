import { motion } from "framer-motion";
import PhotoProfile from "/assets/Photo-profile.png";
import StyvenRayaCV from "/assets/CV_STYVEN_RAYA.pdf";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref, inView } = useInView({
    threshold: 0.6, // Le pourcentage de visibilité pour déclencher l'animation
  });
  return (
    <motion.section
      id="about"
      className="theme mt-32 px-0 py-24 min-h-screen xl:px-32 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="container mx-auto bg-white/15 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/30 dark:border-violet-700/30 shadow-portfolio-light dark:shadow-portfolio-dark rounded-lg p-8 transition-all duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-slate-50 font-extrabold transition-colors duration-300">
          About Me
        </h2>
        <motion.div
          className="flex flex-col items-center mt-12 space-y-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            className="w-50 h-48 rounded-full"
            src={PhotoProfile}
            alt="Styven RAYA"
          />
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 font-bold transition-colors duration-300">
            Styven RAYA
          </h3>
          <motion.div
            className="text-center mt-12 mx-10 lg:mx-40 max-w-none text-slate-700 dark:text-slate-300 font-medium transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="italic font-serif text-xl text-slate-600 dark:text-slate-200 font-semibold transition-colors duration-300">
              "Chaque ligne de code est une nouvelle page dans mon histoire
              numérique."
            </p>

            <p className="mt-4">
              Aventurier du web en pleine ascension, je m'immerge dans l'univers
              fascinant du développement. Les langages et frameworks ne sont pas
              que des outils, mais des territoires à explorer - React,
              TypeScript et l'écosystème JavaScript sont mes cartes au trésor
              actuelles.
            </p>

            <p className="mt-4">
              Les projets collaboratifs sont mes terrains d'expédition favoris,
              où chaque défi technique devient une occasion d'évoluer
              collectivement. Tel un artisan digital, je façonne patiemment mes
              compétences, avec l'ambition de créer des expériences web qui
              allient élégance et performance.
            </p>
            <p>
              Je m'appelle Styven RAYA, j'ai 21 ans,  actuellement en formation, je suis à la
              recherche d'une alternance pour une durée de 14 mois en tant que développeur web.
            </p>
          </motion.div>
          <div className="flex gap-4 mt-8">
            <motion.a
              href={StyvenRayaCV}
              download="CV_STYVEN_RAYA.pdf"
              target="_blank"
              className="bg-white/20 dark:bg-slate-900/30 backdrop-blur-md border border-violet-300/40 dark:border-violet-700/50 text-blue-600 dark:text-violet-300 font-bold px-8 py-2 rounded-lg transition-all duration-300 hover:bg-violet-300/80 dark:hover:bg-violet-700/80 hover:border-pink-300/60 dark:hover:border-purple-600/60 hover:text-white hover:scale-105 shadow-btn-light dark:shadow-btn-dark hover:shadow-btn-hover-light dark:hover:shadow-btn-hover-dark"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              CV
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/styven-raya-ab5312302/"
              target="_blank"
              className="bg-white/20 dark:bg-slate-900/30 backdrop-blur-md border border-violet-300/40 dark:border-violet-700/50 text-blue-600 dark:text-violet-300 font-bold px-8 py-2 rounded-lg transition-all duration-300 hover:bg-blue-600/80 hover:border-blue-600/60 hover:text-white hover:scale-105 shadow-btn-light dark:shadow-btn-dark"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <img
                className="w-6 h-6 inline-block mr-2"
                src="/assets/Linkedin.png"
                alt="LinkedIn"
              />
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/StyvenR"
              target="_blank"
              className="bg-white/20 dark:bg-slate-900/30 backdrop-blur-md border border-violet-300/40 dark:border-violet-700/50 text-blue-600 dark:text-violet-300 font-bold px-8 py-2 rounded-lg transition-all duration-300 hover:bg-violet-300/80 dark:hover:bg-violet-700/80 hover:border-pink-300/60 dark:hover:border-purple-600/60 hover:text-white hover:scale-105 shadow-btn-light dark:shadow-btn-dark hover:shadow-btn-hover-light dark:hover:shadow-btn-hover-dark"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              onMouseOver={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.src = "/assets/GithubWhite.png";
              }}
              onMouseOut={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.src = "/assets/Github.png";
              }}
            >
              <img
                className="w-6 h-6 inline-block"
                src="/assets/Github.png"
                alt="Github"
              />
              Github
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        ref={ref}
        className="container mx-auto section-bg-light opacity-96 rounded-lg shadow-2xl p-8 mt-16 transition-all duration-300"
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white transition-colors duration-300">
          Compétences
        </h2>

        <motion.div
          className="flex justify-center flex-wrap gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className=" flex flex-col items-center">
            <img
              className="w-16 h-auto rounded-lg transform transition-transform hover:scale-110"
              src="/assets/HtmlLogo.png"
              alt="HTML logo"
            />
            <span className="mt-2 text-sm font-medium text-black dark:text-gray-300 transition-colors duration-300">
              HTML
            </span>
          </div>

          <div className=" flex flex-col items-center">
            <img
              className="w-16 h-auto rounded-lg transform transition-transform hover:scale-110"
              src="/assets/CSSLogo.png"
              alt="CSS logo"
            />
            <span className="mt-2 text-sm font-medium text-black dark:text-gray-300 transition-colors duration-300">
              CSS
            </span>
          </div>

          <div className=" flex flex-col items-center">
            <img
              className="w-16 h-auto rounded-lg transform transition-transform hover:scale-110"
              src="/assets/JsLogo.png"
              alt="JS logo"
            />
            <span className="mt-2 text-sm font-medium text-black dark:text-gray-300 transition-colors duration-300">
              JavaScript
            </span>
          </div>

          <div className=" flex flex-col items-center">
            <img
              className="w-16 h-auto rounded-lg transform transition-transform hover:scale-110"
              src="/assets/PHPLogo.png"
              alt="PHP logo"
            />
            <span className="mt-2 text-sm font-medium text-black dark:text-gray-300 transition-colors duration-300">
              PHP
            </span>
          </div>

          <div className=" flex flex-col items-center">
            <img
              className="w-16 h-auto rounded-lg transform transition-transform hover:scale-110"
              src="/assets/ReactLogo.png"
              alt="React logo"
            />
            <span className="mt-2 text-sm font-medium text-black dark:text-gray-300 transition-colors duration-300">
              React
            </span>
          </div>

          <div className=" flex flex-col items-center">
            <img
              className="w-28 h-auto rounded-lg transform transition-transform hover:scale-110"
              src="/assets/TailwindLogo.png"
              alt="Tailwind logo"
            />
            <span className="mt-2 text-sm font-medium text-black dark:text-gray-300 transition-colors duration-300">
              Tailwind CSS
            </span>
          </div>
          <div className=" flex flex-col items-center">
            <img
              className="w-16 h-auto rounded-lg transform transition-transform hover:scale-110"
              src="/assets/CLogo.png"
              alt="MySQL logo"
            />
            <span className="mt-2 text-sm font-medium text-black dark:text-gray-300 transition-colors duration-300">
              C
            </span>
          </div>

          <div className=" flex flex-col items-center">
            <img
              className="w-16 h-auto rounded-lg transform transition-transform hover:scale-110"
              src="/assets/MySQLLogo.png"
              alt="MySQL logo"
            />
            <span className="mt-2 text-sm font-medium text-black dark:text-gray-300 transition-colors duration-300">
              MySQL
            </span>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-32"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {/* <h2 className="text-2xl font-bold">Parcours</h2>
        <ul className="mt-12 ml-4">
          <motion.li
            className="text-lg"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            Frontend Developer
          </motion.li> */}
        {/* <motion.li
            className="text-lg"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            Backend Developer
          </motion.li>
          <motion.li
            className="text-lg"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.5 }}
          >
            Fullstack Developer
          </motion.li>
        </ul> */}
      </motion.div>
    </motion.section>
  );
}

export default About;
