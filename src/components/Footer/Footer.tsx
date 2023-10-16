import React from "react";

import SocialMedia from "../SocialMedia/SocialMedia";

import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <SocialMedia />
      <p className="footer__subtitle">&copy; 2023 Krasnova</p>
    </section>
  );
}
