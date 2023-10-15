import axios from "axios";

export const baseURL = "https://swapi.dev/api/";
export const peoplePerPage = 10;
export const paginationActive = "pagination__item pagination__item_active";
export const paginationUnactive = "pagination__item";

export function fetchEvery(arr: string[], func: any) {
  Promise.all(arr.map((url) => axios.get(url).then((resp) => resp.data))).then(
    (data) => {
      func(data);
    }
  );
}
