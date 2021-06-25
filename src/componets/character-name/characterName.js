import React from "react";
import "./name-style.css";

function CharacterName({ character }) {
  return (
    <div className="character-name">
      <h2>{character.name}</h2>
    </div>
  );
}

export default CharacterName;
