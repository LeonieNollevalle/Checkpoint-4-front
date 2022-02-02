import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/home.css';
import Hi from '../Asset/Tablette.gif';
/* eslint-disable prettier/prettier */

const Home = () => {
  const [categorie, setCategorie] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/categorie/`)
      .then((res) => setCategorie(res.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(categorie);
  return (
    <>
      <div className="container-intro">
        <h1>Léonie&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Nollevalle☺︎</h1>
        <div className="container-subtitle">
          <h3>Designer Graphique</h3>
          <h3>Dev Parfois</h3>
        </div>
        <div className="container-desc">
          <p>Bienvenue, sur mon portfolio, je m’appelle Léonie, je suis graphiste et développeuse junior ! Passionnée par le graphisme, je souhaite faire partager mon expérience à travers mon travail. Que je vous invite à parcourir à votre guise. :) ↓</p>
          <img src={Hi} alt="hi"/>
        </div>
      </div>
      <div className="container-menu-h">
        {categorie
          ? categorie.map((cat) => {
            return <Link className="link-h" to={`/category/${cat.id}`}>
              <h1 className="title-h">{cat.name}</h1>
            </Link>;
          })
          : null}
      </div>
    </>
  );
};

export default Home;
