import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
// Import images
import MorpionImg from "/assets/Morpion.png";
import Puissance4Img from "/assets/Puissance4.png";
import CssGeneratorImg from "/assets/CssGenerator.png";
import MyMeeticImg from "/assets/MyMeetic.png";
import MyTwitterImg from "/assets/MyTwitter.png";

function App() {
  const projects = [
    {
      id: "001",
      name: "Morpion",
      description:
        "Le but de ce projet était de faire toute la logique du jeu du morpion en javascript",
      duration: "3 heures",
      src: MorpionImg,
    },
    {
      id: "002",
      name: "Puissance 4",
      description:
        "Nous devons réaliser un puissance 4 en javascript avec une interface graphique en HTML et CSS ",
      duration: "2 semaines",
      src: Puissance4Img,
    },
    {
      id: "003",
      name: "CSSGenerator",
      description:
        "L'idée principale du projet est de développer un programme, qui concatène toutes ces images en un seul sprite",
      duration: "2 semaines",
      src: CssGeneratorImg,
    },
    {
      id: "004",
      name: "MyMeetic",
      description:
        "En utilisant la base de données MySQL fournie avec le sujet, nous avons dû créer un site de rencontre pour interagir avec celle-ci.",
      duration: "2 semaines",
      src: MyMeeticImg,
    },
    {
      id: "005",
      name: "MyTwitter",
      description:
        "Le but de ce projet était de créer un réseau social pour les étudiants de notre promotion, qui a les mêmes fonctionnalités que twitter. Il devait être le plus ressemblant possible en terme de fonctionnalités par rapport au site 'Twitter'.",
      duration: "4 semaines",
      src: MyTwitterImg,
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
