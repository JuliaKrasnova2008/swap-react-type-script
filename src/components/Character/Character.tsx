import React from "react";
import "./Character.css";
import { useNavigate } from "react-router-dom";
import { peopleT } from "../../redux/slices/PeopleReducer";

export interface iCharacterProps {
  elem: peopleT;
}

const Character: React.FunctionComponent<iCharacterProps> = ({ elem }) => {
  const navigate = useNavigate();
  const url = elem.url.match(/\d+/);
  const id = url && +url;

  return (
    <li className="character" onClick={() => navigate(`/${id}`)}>
      <h1 className="character__name">{elem.name}</h1>
      <p className="character__attribute">
        {"birth year of the person: " + elem.birth_year}
      </p>
      <p className="character__attribute">
        {elem.eye_color === "n/a"
          ? "eye color: no information"
          : "eye color: " + elem.eye_color}
      </p>
      <p className="character__attribute">
        {elem.hair_color === "n/a"
          ? "hair color: no information"
          : "hair color: " + elem.hair_color}
      </p>
      <p className="character__attribute">
        {elem.gender === "n/a"
          ? "person does not have a gender"
          : "gender: " + elem.gender}
      </p>
      <p className="character__attribute">{"skin color: " + elem.skin_color}</p>
      <p className="character__attribute">{"height: " + elem.height + " cm"}</p>
      <p className="character__attribute">{"mass: " + elem.mass + " kg"}</p>
    </li>
  );
};
export default Character;
