import React from "react";
import "./SocialMedia.css";
import telegram from "../../images/telegram.svg";
import instagram from "../../images/instagram.svg";
import facebook from "../../images/facebook.svg";
import git from "../../images/gitHub.svg";
import { Link } from "react-router-dom";

export default function SocialMedia() {
  return (
    <div className="social-media">
      <Link
        className="social-media__icon"
        to="https://t.me/Uliyyyaaa"
        rel="noreferrer"
        target="_blank"
      >
        <img className="social-media__icon" alt="Телеграм" src={telegram} />
      </Link>
      <Link
        className="social-media__icon"
        to="https://instagram.com/uliyyyaaa?igshid=OGQ5ZDc2ODk2ZA=="
        rel="noreferrer"
        target="_blank"
      >
        <img className="social-media__icon" alt="Инстаграм" src={instagram} />
      </Link>
      <Link
        className="social-media__icon"
        to="https://www.facebook.com/profile.php?id=100045973824238&mibextid=LQQJ4d"
        rel="noreferrer"
        target="_blank"
      >
        <img
          className="social-media__icon social"
          alt="Фейсбук"
          src={facebook}
        />
      </Link>
      <Link
        className="social-media__icon"
        to="https://github.com/JuliaKrasnova2008"
        rel="noreferrer"
        target="_blank"
      >
        <img className="social-media__icon" alt="Гит" src={git} />
      </Link>
    </div>
  );
}
