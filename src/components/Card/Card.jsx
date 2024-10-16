// Import de React, useEffect, useState depuis la bibliothèque React
import React, { useEffect, useState } from "react";
// Import d'axios pour effectuer des requêtes HTTP
import axios from "axios";
// Import de NavLink depuis la bibliothèque react-router-dom
import { NavLink } from "react-router-dom";

function card() {
  // Utilisation du hook useState pour gérer l'état des données
  const [data, setData] = useState([]);

  // Utilisation du hook useEffect pour effectuer une action après le rendu initial du composant
  useEffect(() => {
    // Appel à l'API avec axios pour récupérer les données des hébergements
    axios.get("./logement.json").then((res) => setData(res.data));
  }, []);

  // Rendu du composant
  return (
    <section className="cards">
      {/* Utilisation de la méthode map() pour parcourir le tableau de données et afficher chaque hébergement sous forme de carte */}
      {data.map((housing) => (
        <NavLink to={`/housing/${housing.id}`} key={housing.id}>
          <article className="card_thumb">
            <img
              /* logement.json  */
              src={housing.cover}
              alt={housing.title}
              className="card_img"
            ></img>
            <p className="card_text">{housing.title}</p>
          </article>
        </NavLink>
      ))}
    </section>
  );
}

export default card;
