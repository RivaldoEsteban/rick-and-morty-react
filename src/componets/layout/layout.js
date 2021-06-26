import React, { useRef, useEffect } from "react";
import "./layout.css";

function Layout({ name, image, description, setInputValue, next }) {
  const ref = useRef(null);

  function handleClickButton(event) {
    event.preventDefault();
    const value = ref.current.value;
    setInputValue(value);
  }

  return (
    <div className="grid">
      <span className="asset top">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="line"></span>
      </span>
      <img className="logo" src="./images/logo@2x.png" width="280" alt="logo" />

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
        {name}
      </div>
      <div id="character-image-container" className="character-image-container">
        {image}
      </div>
      <div className="navigation about">
        <a href="#">About</a>
      </div>
      <div
        id="character-description-container"
        className="character-description-container"
      >
        {description}
      </div>
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
      {next}
      <form action="" onSubmit={handleClickButton}>
        <label htmlFor="">Busca tu personaje por id</label>
        <input type="text" ref={ref} />
        <button>Bucar</button>
      </form>
    </div>
  );
}

export default Layout;
