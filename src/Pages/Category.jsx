import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Category = () => {
  const { id } = useParams();
  const [adddata, setData] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/projet/categorie/${id}`)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(adddata);

  return (
    <div>
      {adddata.map((add) => {
        return <img src={add.image_url} alt={add.title} />;
      })}
    </div>
  );
};

export default Category;
