import React from "react";

function Header() {
  return (
    <header>
      <div>
        <div className="header__container"></div>
        <div className="title">Awsome Protorype in shop</div>
        <div className="subtitle">
          subtitle subtitle subtitle subtitle subtitle subtitle subtitle
          subtitle subtitle subtitle subtitle subtitle
        </div>
        <div className="btn__area">
          <a href="http://www.protopie.io" target="_blank" rel="noreferrer">
            <button>Try Yourself</button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
