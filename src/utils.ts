import axios from "axios";

export const baseURL = "https://swapi.dev/api/";
export const peoplePerPage = 10;
export const paginationActive = "pagination__item pagination__item_active";
export const paginationUnactive = "pagination__item";

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
export type speciesT = {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: null;
  language: string;
  people: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export function fetchEvery(arr: string[], func: any) {
  Promise.all(arr.map((url) => axios.get(url).then((resp) => resp.data))).then(
    (data) => {
      func(data);
    }
  );
}
