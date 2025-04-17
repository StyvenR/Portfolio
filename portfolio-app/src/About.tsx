import { motion } from "framer-motion";
import PhotoProfile from "/assets/Photo-profile.png";
import StyvenRayaCV from "/assets/Styven_RAYA_CV.png";

function About() {
  return (
    <motion.section
      id="about"
      className="mt-32 px-0 py-24 min-h-screen xl:px-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="container mx-auto bg-gray-100 rounded-lg shadow-2xl p-8"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center ">About Me</h2>
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
          <h3 className="text-2xl font-bold">Styven RAYA</h3>
          <motion.div
            className="text-center mt-12 mx-10 lg:mx-40 prose prose-lg max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="italic font-serif text-xl">
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
              Je m'appelle Styven RAYA, actuellement en formation, je suis à la
              recherche d'une alternance en tant que développeur web.
            </p>
            <p>
              <span className="font-bold">Mes compétences:</span> HTML, CSS,
              JavaScript, React, TypeScript, MySQL, TailwindCSS.
            </p>
          </motion.div>
            <motion.a
            href={StyvenRayaCV}
            download="Styven_RAYA_CV.png"
            className="text-lg font-bold text-black bg-gray-100 border border-black px-8 py-2 rounded-lg transition-all hover:bg-black hover:scale-110 hover:text-white hover:shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            >
            CV
            </motion.a>
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
