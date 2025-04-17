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
import MySpotify from "/assets/MySpotify.png";

function App() {
  const projects = [
    {
      id: "001",
      name: "Morpion",
      description:
        "Un jeu de morpion classique (Tic-Tac-Toe) développé en HTML, CSS et JavaScript. Cette application permet à deux joueurs de s'affronter à tour de rôle sur une même interface et garde une trace des scores.",
      link: "https://github.com/StyvenR/Morpion",
      duration: "3 heures",
      src: MorpionImg,
    },
    {
      id: "002",
      name: "Puissance 4",
      description:
        "Puissance 4 est un jeu de stratégie classique où deux joueurs s'affrontent pour aligner quatre jetons de leur couleur dans une grille. Ce projet est une implémentation numérique du jeu.",
      link: "https://github.com/StyvenR/puissance4",
      duration: "2 semaines",
      src: Puissance4Img,
    },
    {
      id: "003",
      name: "CSSGenerator",
      description:
        "CSS Generator est un outil PHP qui combine plusieurs images PNG en une seule feuille de sprite et génère le CSS correspondant. Cet outil est utile pour les développeurs web qui souhaitent réduire les requêtes HTTP en combinant plusieurs images en un seul fichier.",
      link: "https://github.com/StyvenR/CSSGenerator",
      duration: "2 semaines",
      src: CssGeneratorImg,
    },
    {
      id: "004",
      name: "MyMeetic",
      description:
        "My Meetic est une application web de rencontres inspirée du site Meetic. Cette plateforme permet aux utilisateurs de créer un profil, de rechercher des partenaires potentiels et d'interagir avec d'autres membres.",
      link: "https://github.com/StyvenR/MyMeetic",
      duration: "2 semaines",
      src: MyMeeticImg,
    },
    {
      id: "005",
      name: "MyTwitter",
      description:
        "Ce projet a pour objectif de créer une plateforme de réseau social similaire à Twitter, permettant aux étudiants de se connecter et d'interagir entre eux. Le système comportera une base de données commune, une interface utilisateur interactive et diverses fonctionnalités permettant une expérience utilisateur dynamique.",
      link: "https://github.com/StyvenR/MyTwitter",
      duration: "4 semaines",
      src: MyTwitterImg,
    },
    {
      id: "006",
      name: "MySpotify",
      description:
        "Ce projet est un lecteur multimédia en ligne exploitant une API pour afficher et gérer des albums, artistes et genres. Développé en React, il permet aux utilisateurs de parcourir et d’écouter des albums via un lecteur audio intégré.",
      link: "https://github.com/StyvenR/MySpotify",
      duration: "1 semaines",
      src: MySpotify,
    },
  ];
  return (
    <div style={{ background: "rgba(255, 255, 255, 0.8)" }}>
      <Navbar />
      <About />
      <Projects projects={projects} />
      <ContactForm />
    </div>
  );
}
export default App;
