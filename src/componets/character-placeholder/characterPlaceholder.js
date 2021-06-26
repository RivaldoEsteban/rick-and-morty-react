import React from "react";
import "./placeholder.css";
function CharacterPlaceholder({ character }) {
  return (
    <div className="placeholder-container">
      <h1
        id="character-name-placeholder"
        className="character-name-placeholder"
      >
        {character.name}
      </h1>
    </div>
  );
}

export default CharacterPlaceholder;
