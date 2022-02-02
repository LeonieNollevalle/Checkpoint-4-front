import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import '../styles/projet.css';
import { Link } from 'react-router-dom';

const Projet = () => {
  const { id } = useParams();
  const [adddata, setData] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/projet/${id}`)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(adddata);
  return (
    <div className="container-projet">
      <div className="container-title">
        <h1>● {adddata ? adddata[0].title : null}</h1>
      </div>
      <div className="container-subtit">
        <Link
          className="link"
          to={`/category/${adddata ? adddata[0].id_categorie : null}`}
        >
          <p>←</p>
        </Link>
        <div className="container-information">
          <h2>{adddata ? adddata[0].subtitle : null}</h2>
          <p>{adddata ? adddata[0].description : null}</p>
          <button type="button" className="btn-vers-site">
            Supprimer
          </button>
          <button type="button" className="btn-vers-proto">
            Modifier
          </button>
        </div>
        <img
          src={adddata ? adddata[0].image_url : null}
          alt={adddata ? adddata[0].title : null}
        />
      </div>
    </div>
  );
};

export default Projet;
