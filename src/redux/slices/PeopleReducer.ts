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
      state.search = action.payload;
    },
    setPeople: (state, action: PayloadAction<peopleT[]>) => {
      state.people = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload;
    },
  },
});

export default peopleSlice.reducer;
export const { setSearch, setPeople, setPage, setTotalCount } =
  peopleSlice.actions;
