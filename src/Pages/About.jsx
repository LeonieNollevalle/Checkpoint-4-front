import React, { useState } from 'react';
import ContactFrom from '../components/ContactFrom';
import NavBar from '../components/NavBar';
import '../styles/about.css';

const About = () => {
  const [contact, setContact] = useState(false);
  return (
    <div className="container-About">
      <ContactFrom contact={contact} setContact={setContact} />
      <NavBar />
      <div className="container-intro">
        <h1>HI,</h1>
        <p>
          Je possède un intérêt particulier en design graphique pour la
          typographie ainsi que l’édition auxquelles j’aime insuffler une
          identité. Expérimenter et transposer ces intérêts dans des interfaces
          numériques et les faire dialoguer avec des supports print sont des
          choses que j&apos;affectionne particulièrement.
          <br />
          <br />
          D’autre part, j’apprécie travailler à partir de contraintes techniques
          afin de les transcender et donner des réponses justes et créatives.
          Ces contraintes techniques viennent parfois ajouter une part de hasard
          et de perte de contrôle que j’aimerai davantage expérimenter,
          notamment dans le numérique. En dehors du Design graphique, la mode
          est un des champs du design qui m’intéresse à travers le traitement
          des textures et des formes présentées dans des univers intéressants à
          observer. Surtout du point de vue photographique, les images produites
          par la mode peuvent être une grande source d’inspiration.
        </p>
      </div>
      <button
        type="button"
        className="btn-contact"
        onClick={() => setContact(!contact)}
      >
        Contact
      </button>

      <div className="container-info">
        <h2>Expériences</h2>
        <h3>Stage//2020</h3>
        <p>
          Réalisé chez Ben&Jo un studio de Design graphique qui prône des
          valeurs éthiques et est spécialisé dans l’identité visuelle, avec
          lequel j’ai passé deux mois à Strasbourg d’appréhension de la réalité
          du métier et de Designer Graphique et la concrétisation de projet.
        </p>
        <h3>Stage//2022</h3>
        <p>
          Réalisé chez Jocelyn Richard sur le site flownaely avec lequel j’ai pu
          développer l’expérience utilisateur de flownaely, son l’identité
          visuelle ainsi que son intégration web.
        </p>
        <h3>Workshop//2018</h3>
        <p>
          Avec Eric Mahé, de l’Atelier Du Bourg à Rennes, mené au cours d’une
          semaine autour de la sérigraphie et le motion design sur la thématique
          de la jungle urbaine.
        </p>
        <h3>Workshop//2019</h3>
        <p>
          Avec Mathieu Renard, de Lendroit Edition mené au cours d’une semaine
          autour de l’édition d’artiste, sur la thématique de la viralité.
        </p>
        <h3>Workshop//2020</h3>
        <p>
          Avec Sixtine Gervais de L’atelier mené au cours d’une semaine autour
          de la typographie modulaire.
        </p>
        <h3>Workshop//2021</h3>
        <p>
          Avec Sixtine Gervais de L’atelier mené au cours d’une semaine autour
          de la typographie, sur la thématique «liberticide».
        </p>
        <h3>Auto-entreprenaria//2021</h3>
        <p>
          Réalisation du catalogue d’exposition d’Éric Choisy Bernard, artiste
          plasticien, bricodeur.
        </p>
        <h3>Auto-entreprenaria//2021</h3>
        <p>
          Réalisation de maquette et d’univers graphique pour le site flownaely
          créé par jocelyn richard.
        </p>
        <h2>Cursus</h2>
        <h4>Bac STD2A//2015-2018 </h4>
        <p>Réalisé au Pôle des arts Graphiques La Joliverie, Nantes</p>
        <h4>DNMADe//2018-2021</h4>
        <p>
          Design Graphique (Diplôme National des Métiers d’Arts et du Design)
          Animé à Brequigny, Rennes
        </p>
        <h4>FORMATION DÉVELLOPEMENT WEB ET WEB MOBILE// 2021-2022</h4>
        <p>Framework React/NodeJS, à la wild code school, Nantes</p>
        <h2>Compétence</h2>
      </div>

      <div className="container-competence">
        <div className="competence-graphique">
          <p>• Photoshop</p>
          <p>• illustrator</p>
          <p>• Indesign</p>
          <p>• After effect</p>
          <p>• Adobe xd</p>
          <p>• Figma</p>
        </div>
        <div className="competence-dev">
          <p>• HTML/CSS</p>
          <p>• Javascript</p>
          <p>• REACT js</p>
          <p>• NODE js</p>
          <p>• Express js</p>
          <p>• Mysql</p>
        </div>
        <div className="competence-perso">
          <p>• Curiosité</p>
          <p>• Persévérence</p>
          <p>• Créativité</p>
        </div>
      </div>
    </div>
  );
};

export default About;
