import React, { useState, useEffect } from "react";
import CharacterName from "../character-name/characterName";
import CharacterImage from "../character-image/characterImage";
import CharacterDescription from "../character-description/characterDescription";
import CharacterPlaceholder from "../character-placeholder/characterPlaceholder";
import Layout from "../layout/layout";
import NextCharacter from "../next-character/nextCharacter";
import CharacterContext from "../context/context";
import api from "../api/api";

function Character({ match }) {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    async function getCharacter() {
      setCharacter(await api.getCharacter(match.params.id || 1));
    }
    getCharacter();
  }, [match.params.id]);
  const [inputValue, setInputValue] = useState(1);
  return (
    <CharacterContext.Provider
      value={{
        character,
        setCharacter,
      }}
    >
      <CharacterPlaceholder character={character} />
      <Layout
        setInputValue={setInputValue}
        name={<CharacterName character={character} />}
        image={<CharacterImage character={character} />}
        description={<CharacterDescription character={character} />}
        next={
          <NextCharacter
            character={character}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        }
      />
    </CharacterContext.Provider>
  );
}

export default Character;
