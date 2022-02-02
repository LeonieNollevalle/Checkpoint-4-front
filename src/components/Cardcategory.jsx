import React from 'react';

const Cardcategory = ({ data }) => {
  return (
    <div>
      <img src={data.image_url} alt={data.title} />
      <p>{data.title}</p>
    </div>
  );
};

export default Cardcategory;
