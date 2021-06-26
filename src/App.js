import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import "./css/styles.css";
import API from "./componets/api/api";
import CharacterName from "./componets/character-name/characterName";
import CharacterImage from "./componets/character-image/characterImage";
import CharacterDescription from "./componets/character-description/characterDescription";
import CharacterPlaceholder from "./componets/character-placeholder/characterPlaceholder";
import Layout from "./componets/layout/layout";
import NextCharacter from "./componets/next-character/nextCharacter";

const api = new API();
export const CharacterContext = createContext({});
function App() {
  const [character, setCharacter] = useState({});
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    async function getCharacter(id) {
      setCharacter(await api.getCharacter(id));
    }
    getCharacter(inputValue);
  }, [inputValue]);

  return (
    <CharacterContext.Provider value="rick and morty">
      <CharacterPlaceholder character={character} />
      <Layout
        setInputValue={setInputValue}
        name={<CharacterName character={character} />}
        image={<CharacterImage character={character} />}
        description={<CharacterDescription character={character} />}
        next={<NextCharacter character={character} />}
      />
    </CharacterContext.Provider>
  );
}

export default App;
