import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import "./css/styles.css";
import api from "./componets/api/api";
import CharacterName from "./componets/character-name/characterName";
import CharacterImage from "./componets/character-image/characterImage";
import CharacterDescription from "./componets/character-description/characterDescription";
import CharacterPlaceholder from "./componets/character-placeholder/characterPlaceholder";
import Layout from "./componets/layout/layout";
import NextCharacter from "./componets/next-character/nextCharacter";
import CharacterContext from "./componets/context/context";
import "./nprogress.css";

function App() {
  // const [context, setContext] = useState({});
  const [character, setCharacter] = useState({});
  const [inputValue, setInputValue] = useState(1);

  // const currentContext = {
  //   value: context,
  //   setContext,
  // };

  useEffect(() => {
    async function getCharacter(id = 2) {
      setCharacter(await api.getCharacter(id));
    }
    getCharacter(inputValue);
  }, [inputValue]);

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

export default App;
