import React from "react";
import "./image-style.css";
import styled from "styled-components";

function CharacterImage({ character }) {
  const Image = styled.img`
    max-width: 100%;
    border-radius: 50%;
  `;
  console.log(character);
  return <Image src={character.image} alt={character.name} />;
}

export default CharacterImage;
