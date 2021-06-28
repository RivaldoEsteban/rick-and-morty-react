import React, { useContext, useEffect } from "react";
import "./next.css";
import CharacterContext from "../context/context";
import api from "../api/api";
import NProgress from "nprogress";
import { useHistory } from "react-router-dom";

function NextCharacter({ inputValue, setInputValue, character }) {
  const context = useContext(CharacterContext);
  const history = useHistory();
  async function handleClick() {
    NProgress.start();
    history.push(`${context.character.id + 1}`);
    context.setCharacter(await api.getCharacter(context.character.id + 1));
    NProgress.done();
  }

  return <div className="arrow" id="load-next" onClick={handleClick}></div>;
}

export default NextCharacter;
