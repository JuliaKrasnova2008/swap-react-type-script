import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL, fetchEvery } from "../utils";
import axios from "axios";
import { peopleT } from "../redux/slices/PeopleReducer";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export type filmT = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};

export type starshipT = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export default function PreviewInfo() {
  const { id } = useParams(); //достаем id из параметров строки url
  const [peoplePage, setPeoplePage] = useState<any>({});
  const [films, setFilms] = useState([]);
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}/people/${id}/`)
      .then((res) => {
        setPeoplePage(res.data);
        fetchEvery(res.data.films, setFilms);
        fetchEvery(res.data.starships, setStarships);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  console.log(peoplePage.name);
  console.log(starships);

  return (
    <>
      <Header />
      <div className="preview">
        <ul className="characters__list">
          {/* <li className="character">
          <h1 className="character__name">{peoplePage.name}</h1>
          <p className="character__attribute">
            {"birth year of the person: " + peoplePage.birth_year}
          </p>
          <p className="character__attribute">
            {peoplePage.eye_color === "n/a"
              ? "eye color: no information"
              : "eye color: " + peoplePage.eye_color}
          </p>
          <p className="character__attribute">
            {peoplePage.hair_color === "n/a"
              ? "hair color: no information"
              : "hair color: " + peoplePage.hair_color}
          </p>
          <p className="character__attribute">
            {peoplePage.gender === "n/a"
              ? "person does not have a gender"
              : "gender: " + peoplePage.gender}
          </p>
          <p className="character__attribute">
            {"skin color: " + peoplePage.skin_color}
          </p>
          <p className="character__attribute">
            {"height: " + peoplePage.height + " cm"}
          </p>
          <p className="character__attribute">
            {"mass: " + peoplePage.mass + " kg"}
          </p>
        </li> */}
        </ul>

        <ul className="characters__list characters__list_preview">
          <h2 className="character__attribute character__attribute_title">
            Film that this person has been in:
          </h2>

          {films.map((elem: filmT) => (
            <li className="character__preview" key={elem.title}>
              <p className="character__attribute">{elem.title}</p>
              <p className="character__attribute character__attribute_preview">
                {"Director: " + elem.director}
              </p>
              <p className="character__attribute character__attribute_preview">
                {"Producer: " + elem.producer}
              </p>
              <p className="character__attribute character__attribute_preview">
                {"Release date: " +
                  new Date(elem.release_date).toLocaleDateString("en", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
              </p>
            </li>
          ))}
        </ul>

        <ul className="characters__list characters__list_preview">
          <h2 className="character__attribute character__attribute_title">
            Starships that this person has piloted:
          </h2>
          {starships.map((elem: starshipT) => (
            <li className="character__preview" key={elem.name}>
              <p className="character__attribute">{elem.name}</p>
              <p className="character__attribute character__attribute_preview">
                {"Model: " + elem.model}
              </p>
              <p className="character__attribute character__attribute_preview">
                {"Starship class: " + elem.starship_class}
              </p>
              <p className="character__attribute character__attribute_preview">
                {"MGLT: " + elem.MGLT}
              </p>
              <p className="character__attribute character__attribute_preview">
                {"Cargo capacity: " + elem.cargo_capacity}
              </p>
              <p className="character__attribute character__attribute_preview">
                {"Consumables: " + elem.consumables}
              </p>
              <p className="character__attribute character__attribute_preview">
                {"Hyperdrive rating: " + elem.hyperdrive_rating}
              </p>
              <p className="character__attribute character__attribute_preview">
                {"Length: " + elem.length}
              </p>
              <p className="character__attribute character__attribute_preview">
                {"Manufacturer: " + elem.manufacturer}
              </p>
              <p className="character__attribute character__attribute_preview">
                {"Max atmosphering speed: " + elem.max_atmosphering_speed}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
