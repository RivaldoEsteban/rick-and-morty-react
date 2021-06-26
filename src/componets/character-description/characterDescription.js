import React from "react";
import "./description.css";

function CharacterDescription({ character }) {
  return (
    <div className="character-labels">
      <h3 className="character-label">Género: {character.gender}</h3>
      <h3 className="character-label">Especie: {character.species}</h3>
      <h3 className="character-label">Status: {character.status}</h3>
    </div>
  );
}

export default CharacterDescription;
