import React from 'react';
import '../styles/form.css';

const Form = ({ form, setForm }) => {
  return (
    <div className={form ? 'container-all-form' : 'container-close'}>
      {/* (title, date, subtitle, description, image_url, id_categorie) */}
      <div className="container-form">
        <div className="container-cross">
          <button type="button" onClick={() => setForm(!form)}>
            ✕
          </button>
        </div>
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
          <button
            type="button"
            className="btn-sub"
            onClick={() => setForm(!form)}
          >
            {' '}
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
