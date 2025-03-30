import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
function App() {
  const projects = [
    {
      id: "001",
      name: "Morpion",
      description:
        "Le but de ce projet était de faire toute la logique du jeu du morpion en javascript",
      duration: "3 heures",
      src: "src/assets/Morpion.png",
    },
    {
      id: "002",
      name: "Puissance 4",
      description:
        "Nous devons réaliser un puissance 4 en javascript avec une interface graphique en HTML et CSS ",
      duration: "2 semaines",
      src: "src/assets/Puissance4.png",
    },
    {
      id: "003",
      name: "CSSGenerator",
      description:
        "L’idée principale du projet est de développer un programme, qui concatène toutes ces images en un seul sprite",
      duration: "2 semaines",
      src: "src/assets/CssGenerator.png",
    },
    {
      id: "004",
      name: "MyMeetic",
      description:
        "En utilisant la base de données MySQL fournie avec le sujet, nous avons dû créer un site de rencontre pour interagir avec celle-ci.",
      duration: "2 semaines",
      src: "src/assets/MyMeetic.png",
    },
    {
      id: "005",
      name: "MyTwitter",
      description:
        "Le but de ce projet était de créer un réseau social pour les étudiants de notre promotion, qui a les mêmes fonctionnalités que twitter. Il devait être le plus ressemblant possible en terme de fonctionnalités par rapport au site “Twitter”.",
      duration: "4 semaines",
      src: "src/assets/MyTwitter.png",
    },
  ];
  return (
    <div>
      <Navbar />
      <About />
      <Projects projects={projects} />
      <ContactForm />
    </div>
  );
}
export default App;
