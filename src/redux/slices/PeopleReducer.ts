import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type peopleT = {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
};
export interface peopleSliceState {
  search: string;
  people: peopleT[];
  currentPage: number;
  totalCount: number;
}
const initialState: peopleSliceState = {
  search: "",
  people: [],
  currentPage: 1,
  totalCount: 0,
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      let search = action.payload;
      state.search = search;
    },
    setPeople: (state, action: PayloadAction<peopleT[]>) => {
      let people = action.payload;
      state.people = people;
    },
    setPage: (state, action: PayloadAction<number>) => {
      let currentPage = action.payload;
      state.currentPage = currentPage;
    },
    setTotalCount: (state, action: PayloadAction<number>) => {
      let totalCount = action.payload;
      state.totalCount = totalCount;
    },
  },
});

export default peopleSlice.reducer; //экспортируем хранилище
export const { setSearch, setPeople, setPage, setTotalCount } =
  peopleSlice.actions; //экспортируем функции (для удобства, чтобы потом обращаться напрямую)
