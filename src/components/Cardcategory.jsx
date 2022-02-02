import React from 'react';
import '../styles/card.css';

const Cardcategory = ({ data }) => {
  return (
    <div className="container-card">
      <img src={data.image_url} alt={data.title} />
      <p>{data.title}</p>
    </div>
  );
};

export default Cardcategory;
