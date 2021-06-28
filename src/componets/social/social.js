import React from "react";
import "./social-style.css";

function Social() {
  return (
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
  );
}

export default Social;
