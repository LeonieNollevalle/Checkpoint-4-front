/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import '../styles/form.css';
import axios from 'axios';

const Form = ({ form, setForm, datas, setData }) => {
  const [projet, setProjet] = useState(null);
  const [message, setMessage] = useState(false);
  const chemin = window.location.pathname;
  console.log(chemin);
  const onSubmit = () => {
    window.location.reload();
  };

  const updateProjet = (value, type) => {
    const newProjet = { ...datas[0] };
    if (type === 'date') {
      newProjet[type] = parseInt(value, 10);
    } else {
      newProjet[type] = value;
    }
    setProjet(newProjet);
  };

  const checkValidity = () => {
    const { title, date, subtitle, description, image_url, id_categorie } =
      projet;
    return (
      title && date && subtitle && description && image_url && id_categorie
    );
  };

  const updateProjetInBDD = () => {
    axios
      .put(`http://localhost:4000/projet/${projet.id}`, { ...projet })
      .then(() => setData(projet))
      .catch((err) => console.error(err));
    window.location.reload();
  };

  const createProjetInBDD = () => {
    const validity = checkValidity();
    if (validity) {
      axios
        .post(`http://localhost:4000/projet/`, { ...projet })
        .then(() => onSubmit())
        .catch((err) => console.error(err));
    } else {
      setMessage(true);
    }
  };
  return (
    <div className={form ? 'container-all-form' : 'container-close'}>
      {/* (title, date, subtitle, description, image_url, id_categorie) */}
      <div className="container-form">
        <div className="container-cross">
          <button type="button" onClick={() => setForm(!form)}>
            ✕{message && <h4>L ensemble des champs doivent être renseigné</h4>}
          </button>
        </div>
        <form>
          <label htmlFor="titre">
            Titre :
            <input
              type="text"
              placeholder="Titre"
              value={projet ? projet.title : null}
              onChange={(event) => updateProjet(event.target.value, 'title')}
            />
          </label>
          <label htmlFor="Date">
            Date :
            <input
              type="number"
              placeholder="Date"
              value={projet ? projet.date : null}
              onChange={(event) => updateProjet(event.target.value, 'date')}
            />
          </label>
          <label htmlFor="soustitre">
            Sous-titre :
            <input
              type="text"
              placeholder="Sous-titre"
              value={projet ? projet.subtitle : ''}
              onChange={(event) => updateProjet(event.target.value, 'subtitle')}
            />
          </label>
          <label htmlFor="description">
            Description :
            <input
              type="text"
              placeholder="Description"
              value={projet ? projet.description : ''}
              onChange={(event) =>
                updateProjet(event.target.value, 'description')
              }
            />
          </label>
          <label htmlFor="image">
            Url image :
            <input
              type="text"
              placeholder="Url image"
              value={projet ? projet.image_url : ''}
              onChange={(event) =>
                updateProjet(event.target.value, 'image_url')
              }
            />
          </label>
          <label htmlFor="categorie">
            Catégorie :
            <select
              name="categorie"
              size="1"
              onChange={(event) =>
                updateProjet(event.target.value, 'id_categorie')
              }
            >
              <option value="">Catégorie</option>
              <option
                value="1"
                onChange={(event) =>
                  updateProjet(event.target.value, 'id_categorie')
                }
              >
                Éditions
              </option>
              <option
                value="2"
                onChange={(event) =>
                  updateProjet(event.target.value, 'id_categorie')
                }
              >
                Identités
              </option>
              <option
                value="3"
                onChange={(event) =>
                  updateProjet(event.target.value, 'id_categorie')
                }
              >
                Interface
              </option>
              <option
                value="4"
                onChange={(event) =>
                  updateProjet(event.target.value, 'id_categorie')
                }
              >
                Typographie
              </option>
              <option
                value="5"
                onChange={(event) =>
                  updateProjet(event.target.value, 'id_categorie')
                }
              >
                Motion
              </option>
            </select>
          </label>
          <button
            type="button"
            className="btn-sub"
            onClick={() => updateProjetInBDD()}
          >
            Modifier
          </button>
          <button
            type="button"
            className="btn-sub"
            onClick={() => createProjetInBDD()}
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
