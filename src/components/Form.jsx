import React from 'react';
import '../styles/form.css';

const Form = () => {
  // const [form, addForm] = useState(true);
  // addForm();
  return (
    <div className="container-all-form">
      {/* (title, date, subtitle, description, image_url, id_categorie) */}(
      <div className="container-form">
        <form>
          <label htmlFor="titre">
            Titre :
            <input type="text" placeholder="Titre" />
          </label>
          <label htmlFor="Date">
            Date :
            <input type="text" placeholder="Date" />
          </label>
          <label htmlFor="soustitre">
            Sous-titre :
            <input type="text" placeholder="Sous-titre" />
          </label>
          <label htmlFor="description">
            Description :
            <input type="text" placeholder="Description" />
          </label>
          <label htmlFor="image">
            Url image :
            <input type="text" placeholder="Url image" />
          </label>
          <label htmlFor="categorie">
            Catégorie :
            <select name="categorie" size="1">
              <option value="">Catégorie</option>
              <option value="1">Éditions</option>
              <option value="2">Identités</option>
              <option value="3">Interface</option>
              <option value="4">Typographie</option>
              <option value="5">Motion</option>
            </select>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Form;
