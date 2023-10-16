import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

import { filterSliceState } from "./FilterReducer";
import { baseURL } from "../../utils";

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

export interface peopleSliceAsyncState {
  people: peopleT[];
  totalCount: number;
}
const initialState: peopleSliceAsyncState = {
  people: [],
  totalCount: 0,
};
export type responseT = {
  results: peopleT[];
  count: number;
};

export const fetchPeople = createAsyncThunk<responseT, filterSliceState>(
  "peopleAsync/fetch",
  async ({ search, currentPage }) => {
    const response = await axios.get(
      `${baseURL}/people/?search=${search}&page=${currentPage}`
    );
    return response.data;
  }
);

export const peopleAsyncSlice = createSlice({
  name: "peopleAsync",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPeople.fulfilled, (state, action) => {
      state.people = action.payload.results;
      state.totalCount = action.payload.count;
    });
  },
});

export default peopleAsyncSlice.reducer;
