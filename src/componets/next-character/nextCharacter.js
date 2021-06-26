import React, { useContext } from "react";
import "./next.css";
import CharacterContext from "../../App";

function NextCharacter() {
  const value = useContext(CharacterContext);
  return (
    <div className="arrow" id="load-next">
      <p>Next</p>
    </div>
  );
}

export default NextCharacter;
