import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL, fetchEvery, filmT, speciesT, starshipT } from "../../utils";
import axios from "axios";
import { peopleT } from "./PeopleAsyncReducer";

export interface personSliceAsyncState {
  peoplePage: any;
  films: any;
  starships: any;
  species: any;
}
const initialState: personSliceAsyncState = {
  peoplePage: {},
  films: [],
  starships: [],
  species: [],
};
export type responseT = {
  films: filmT[];
  starships: starshipT[];
  species: speciesT[];
  peopleInfo: peopleT;
};

export interface idI {
  id: string;
}

export const fetchPerson = createAsyncThunk<responseT, idI>(
  "personAsync/fetch",
  async ({ id }) => {
    const res = await axios.get(`${baseURL}/people/${id}/`);
    const peopleInfo = res.data;
    const films = await fetchEvery(peopleInfo.films);
    const starships = await fetchEvery(peopleInfo.starships);
    const species = await fetchEvery(peopleInfo.species);
    return { peopleInfo, films, starships, species };
  }
);

export const personAsyncSlice = createSlice({
  name: "personAsync",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPerson.fulfilled, (state, action) => {
      state.peoplePage = action.payload.peopleInfo;
      state.films = action.payload.films;
      state.starships = action.payload.starships;
      state.species = action.payload.species;
    });
  },
});

export default personAsyncSlice.reducer;
