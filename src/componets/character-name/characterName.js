import React from "react";
import "./name-style.css";

function CharacterName({ character }) {
  console.log(character);
  return (
    <div className="character-name">
      <h2>{character.name}</h2>
    </div>
  );
}

export default CharacterName;
