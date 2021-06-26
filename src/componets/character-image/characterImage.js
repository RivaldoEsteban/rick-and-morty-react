import React from "react";
import "./image-style.css";
import styled from "styled-components";

const Image = styled.img`
  max-width: 100%;
  border-radius: 50%;
`;

function CharacterImage({ character }) {
  return <Image src={character.image} alt={character.name} />;
}

export default CharacterImage;
