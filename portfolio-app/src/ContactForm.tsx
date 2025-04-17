import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const { ref, inView } = useInView({
    threshold: 0.6, // Le pourcentage de visibilité pour déclencher l'animation
  });
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_337uyem", "template_evn3rmm", form.current, {
        publicKey: "QlmfoaFjIzHJl7MGe",
      })
      .then(
        () => {
          alert("Email envoyé !");
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <section ref={ref} id="contact" className="pb-16">
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="contact p-8 bg-white rounded-xl shadow-lg max-w-md w-full border border-dark-900 ">
          <h2 className="text-center text-3xl font-bold">Contactez-moi</h2>
          <p className="text-white mt-2">
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
                className="block text-sm font-medium text-black"
              >
                Nom:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-2 block w-full px-4 py-3 border border-black rounded-lg shadow-sm sm:text-sm  focus:ring-black "
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-2 block w-full px-4 py-3 border border-black rounded-lg shadow-sm sm:text-sm  focus:ring-black "
                required
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-black"
              >
                Sujet:
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="mt-2 block w-full px-4 py-3 border border-black rounded-lg shadow-sm sm:text-sm focus:ring-black "
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-black"
              >
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                className="mt-2 block w-full px-4 py-3 border border-black rounded-lg shadow-sm sm:text-sm  focus:ring-black "
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full inline-flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-md text-sm font-medium text-black hover:bg-black hover:text-white focus:outline-none  focus:ring-offset-2 focus:ring-black"
            >
              Envoyer
            </button>
          </form>
          <div className="mt-8 text-center">
            <h3 className="text-lg font-semibold text-black-800">
              Réseaux sociaux
            </h3>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/in/styven-raya-ab5312302/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-600"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/StyvenR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-300"
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
