import React, { useContext } from "react";
import "./next.css";
import CharacterContext from "../context/context";
import api from "../api/api";
import NProgress from "nprogress";

function NextCharacter({ inputValue, setInputValue }) {
  const context = useContext(CharacterContext);

  async function handleClick() {
    NProgress.start();
    context.setCharacter(await api.getCharacter(context.character.id + 1));
    NProgress.done();
    // setInputValue(Number(inputValue) + 1);
    // console.log(inputValue);
  }
  return <div className="arrow" id="load-next" onClick={handleClick}></div>;
}

export default NextCharacter;
