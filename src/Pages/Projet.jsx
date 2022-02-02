import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

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
    <div>
      <h1>{adddata ? adddata[0].title : null}</h1>
      <img
        src={adddata ? adddata[0].image_url : null}
        alt={adddata ? adddata.title : null}
      />
    </div>
  );
};

export default Projet;
