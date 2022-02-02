/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CardCategory from '../components/Cardcategory';

const Category = () => {
  const { id } = useParams();
  const [adddata, setData] = useState();
  const [categorie, setCategorie] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/projet/categorie/${id}`)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/categorie/${id}`)
      .then((res) => setCategorie(res.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(categorie);
  return (
    <div>
      <h1>{categorie ? categorie[0].name : null}</h1>
      {adddata
        ? adddata.map((add) => {
          return (
            <Link to={`/projet/${add.id}`}>
              <CardCategory data={add} />
            </Link>
          );
        })
        : null}
    </div>
  );
};

export default Category;
