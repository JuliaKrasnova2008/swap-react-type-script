import React from "react";

import "./Header.css";
import logo from "../../images/logo.png";

export default function Header() {
  return (
    <section className="header">
      <img className="header__logo" src={logo} alt="Лого SW" />
    </section>
  );
}
