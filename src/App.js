import React, { useState, useEffect } from "react";
import "./App.css";
import "./css/styles.css";
import API from "./componets/api/api";
import CharacterName from "./componets/character-name/characterName";
import CharacterImage from "./componets/character-image/characterImage";
import styled from "styled-components";

function App() {
  const api = new API();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    async function getCharacter(id) {
      setCharacter(await api.getCharacter(id));
    }
    getCharacter(5);
  }, []);

  const Name = styled.section`
    border: 1px solid red;
  `;
  return (
    <section>
      <Name>
        <p>hola</p>
      </Name>
      <div className="placeholder-container">
        <h1
          id="character-name-placeholder"
          className="character-name-placeholder"
        ></h1>
      </div>
      <div className="grid">
        <span className="asset top">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="line"></span>
        </span>
        <img
          className="logo"
          src="./images/logo@2x.png"
          width="280"
          alt="logo"
        />
        <div className="social">
          <a href="https://instagram.com/LeonidasEsteban">
            <img src="./images/instagram.svg" alt="logo de instagram" />
          </a>
          <a href="https://facebook.com/LeonidasEsteban">
            <img src="./images/facebook.svg" alt="logo de facebook" />
          </a>
          <a href="https://twitter.com/LeonidasEsteban">
            <img src="./images/twitter.svg" alt="logo de twitter" />
          </a>
        </div>
        <div className="navigation name">
          <a href="#">Name</a>
        </div>

        <div id="character-name-container" className="character-name-container">
          <CharacterName character={character} />
        </div>
        <div
          id="character-image-container"
          className="character-image-container"
        >
          <CharacterImage character={character} />
        </div>
        <div className="navigation about">
          <a href="#">About</a>
        </div>
        <div
          id="character-description-container"
          className="character-description-container"
        ></div>
        <span className="asset bottom">
          <span className="line"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </span>
        <div></div>
        <div className="learn-more">
          <span>learn more</span>
        </div>
        <div className="arrow" id="load-next"></div>
      </div>
    </section>
  );
}

export default App;
