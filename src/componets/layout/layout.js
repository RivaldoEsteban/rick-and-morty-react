import React, { useRef } from "react";
import "./layout.css";
import Social from "../social/social";
import AssetTop from "../asset/asset";
import Logo from "../logo/logo";
import AssetBottom from "../assetBottom/assetBottom";
import NavigationItem from "../navigation-item";

function Layout({ name, image, description, setInputValue, next }) {
  const ref = useRef(null);

  function handleClickButton(event) {
    event.preventDefault();
    const value = ref.current.value;
    setInputValue(value);
  }

  return (
    <div className="grid">
      <AssetTop />
      <Logo />
      <Social />
      <div className="navigation name">
        <NavigationItem url="#" text="name" />
      </div>
      <div id="character-name-container" className="character-name-container">
        {name}
      </div>
      <div id="character-image-container" className="character-image-container">
        {image}
      </div>
      <div className="navigation about">
        <NavigationItem url="#" text="about" />
      </div>
      <div
        id="character-description-container"
        className="character-description-container"
      >
        {description}
      </div>
      <AssetBottom />
      <div></div>
      <div className="learn-more">
        <span>learn more</span>
      </div>
      {next}
    </div>
  );
}

export default Layout;
