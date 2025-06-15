import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const { ref, inView } = useInView({
    threshold: 0.6, // Le pourcentage de visibilité pour déclencher l'animation
  });
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm("service_337uyem", "template_evn3rmm", form.current, {
        publicKey: "QlmfoaFjIzHJl7MGe",
      })
      .then(
        () => {
          alert("Email envoyé !");
          // Réinitialiser le formulaire après l'envoi réussi
          form.current?.reset();
        },
        (error) => {
          alert(error.text);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section ref={ref} id="contact" className="pb-16">
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="contact p-8 section-bg-light rounded-xl shadow-lg max-w-md w-full transition-all duration-300">
          <h2 className="text-center text-3xl font-bold contact-text-dark transition-colors duration-300">
            Contactez-moi
          </h2>
          <p className="contact-subtitle-dark mt-2 transition-colors duration-300">
            Je suis à votre écoute pour toute question ou collaboration.
          </p>
          <form
            ref={form}
            name="contact"
            method="post"
            className="space-y-6"
            onSubmit={sendEmail}
          >
            <div className="form-group">
              <label
                htmlFor="name"
                className="block text-sm font-medium contact-label-dark transition-colors duration-300"
              >
                Nom:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg shadow-sm sm:text-sm focus:ring-blue-500 dark:focus:ring-gray-400 focus:border-blue-500 dark:focus:border-gray-400 transition-all duration-300"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium contact-label-dark transition-colors duration-300"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg shadow-sm sm:text-sm focus:ring-blue-500 dark:focus:ring-gray-400 focus:border-blue-500 dark:focus:border-gray-400 transition-all duration-300"
                required
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="subject"
                className="block text-sm font-medium contact-label-dark transition-colors duration-300"
              >
                Sujet:
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg shadow-sm sm:text-sm focus:ring-blue-500 dark:focus:ring-gray-400 focus:border-blue-500 dark:focus:border-gray-400 transition-all duration-300"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium contact-label-dark transition-colors duration-300"
              >
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg shadow-sm sm:text-sm focus:ring-blue-500 dark:focus:ring-gray-400 focus:border-blue-500 dark:focus:border-gray-400 transition-all duration-300"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full inline-flex justify-center py-3 px-6 border border-gray-300 dark:border-gray-500 rounded-lg shadow-md text-sm font-medium transition-all duration-300 ${
                isSubmitting
                  ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed text-gray-500"
                  : "bg-white dark:bg-gray-700 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:scale-105 hover:shadow-lg"
              }`}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
          <div className="mt-8 text-center">
            <h3 className="text-lg font-semibold text-black dark:text-white transition-colors duration-300">
              Réseaux sociaux
            </h3>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/in/styven-raya-ab5312302/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/StyvenR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactForm;
