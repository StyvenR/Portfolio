import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
import MorpionImg from "/assets/Morpion.png";
import Puissance4Img from "/assets/Puissance4.png";
import CssGeneratorImg from "/assets/CssGenerator.png";
import MyMeeticImg from "/assets/MyMeetic.png";
import MyTwitterImg from "/assets/MyTwitter.png";
import MySpotify from "/assets/MySpotify.png";
import MyQuizImg from "/assets/MyQuizImg.png";
import SnapchatImg from "/assets/SnapchatImg.jpg";
import MernImg from "/assets/MernImg.png";
import FreeAdsImg from "/assets/FreeAdsImg.png";
import H5AI from "/assets/H5AI.png";

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
      teamSize: "Solo",
    },
    {
      id: "002",
      name: "Puissance 4",
      description:
        "Puissance 4 est un jeu de stratégie classique où deux joueurs s'affrontent pour aligner quatre jetons de leur couleur dans une grille. Ce projet est une implémentation numérique du jeu.",
      link: "https://github.com/StyvenR/puissance4",
      duration: "2 semaines",
      src: Puissance4Img,
      teamSize: "Solo",
    },
    {
      id: "003",
      name: "CSSGenerator",
      description:
        "CSS Generator est un outil PHP qui combine plusieurs images PNG en une seule feuille de sprite et génère le CSS correspondant. Cet outil est utile pour les développeurs web qui souhaitent réduire les requêtes HTTP en combinant plusieurs images en un seul fichier.",
      link: "https://github.com/StyvenR/CSSGenerator",
      duration: "2 semaines",
      src: CssGeneratorImg,
      teamSize: "Solo",
    },
    {
      id: "004",
      name: "MyMeetic",
      description:
        "My Meetic est une application web de rencontres inspirée du site Meetic. Cette plateforme permet aux utilisateurs de créer un profil, de rechercher des partenaires potentiels et d'interagir avec d'autres membres.",
      link: "https://github.com/StyvenR/MyMeetic",
      duration: "2 semaines",
      src: MyMeeticImg,
      teamSize: "Solo",
    },
    {
      id: "005",
      name: "MyTwitter",
      description:
        "Ce projet a pour objectif de créer une plateforme de réseau social similaire à Twitter, permettant aux étudiants de se connecter et d'interagir entre eux. Le système comportera une base de données commune, une interface utilisateur interactive et diverses fonctionnalités permettant une expérience utilisateur dynamique.",
      link: "https://github.com/StyvenR/MyTwitter",
      duration: "4 semaines",
      src: MyTwitterImg,
      teamSize: "4 personnes",
    },
    {
      id: "006",
      name: "MySpotify",
      description:
        "Ce projet est un lecteur multimédia en ligne exploitant une API pour afficher et gérer des albums, artistes et genres. Développé en React, il permet aux utilisateurs de parcourir et d’écouter des albums via un lecteur audio intégré.",
      link: "https://github.com/StyvenR/MySpotify",
      duration: "1 semaines",
      src: MySpotify,
      teamSize: "2 personnes",
    },
    {
      id: "007",
      name: "My-Quiz",
      description:
        "Une application de quiz interactive permettant de créer et de répondre à des questionnaires. Ce projet offre une interface utilisateur intuitive pour tester ses connaissances sur différents sujets.",
      link: "https://github.com/StyvenR/My-Quiz",
      duration: "2 semaines",
      src: MyQuizImg,
      teamSize: "4 personnes",
    },
    {
      id: "008",
      name: "Snapchat-Styven",
      description:
        "Un clone de Snapchat développé pour reproduire les fonctionnalités principales de l'application de messagerie éphémère. Ce projet explore les concepts de partage de médias temporaires et de communication instantanée.",
      link: "https://github.com/StyvenR/Snapchat-Styven",
      duration: "2 semaines",
      src: SnapchatImg,
      teamSize: "2 personnes",
    },
    {
      id: "009",
      name: "MERN-Styven",
      description:
        "Une application full-stack développée avec la stack MERN (MongoDB, Express.js, React, Node.js). Ce projet démontre une architecture moderne pour le développement d'applications web complètes.",
      link: "https://github.com/StyvenR/MERN-Styven",
      duration: "2 semaines",
      src: MernImg,
      teamSize: "Solo",
    },
    {
      id: "010",
      name: "Free-Ads",
      description:
        "Une plateforme de petites annonces gratuites permettant aux utilisateurs de publier et consulter des annonces diverses. Ce projet intègre un système de gestion d'annonces avec recherche et filtrage.",
      link: "https://github.com/StyvenR/Free-Ads",
      duration: "2 semaines",
      src: FreeAdsImg,
      teamSize: "Solo",
    },
    {
      id: "011",
      name: "H5AI",
      description:
        "H5AI est un projet de gestion de fichiers, permettant aux utilisateurs de visualiser et organiser leurs fichiers de manière intuitive. Ce projet met en avant l'utilisation de technologies web pour la gestion de contenu.",
      link: "https://github.com/StyvenR/H5AI",
      duration: "2 semaines",
      src: H5AI,
      teamSize: "2 personnes",
    },
  ];
  return (
    <div className="portfolio-bg min-h-screen">
      <Navbar />
      <About />
      <Projects projects={projects} />
      <ContactForm />
    </div>
  );
}
export default App;
