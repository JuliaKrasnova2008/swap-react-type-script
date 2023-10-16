import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface filterSliceState {
  search: string;
  currentPage: number;
}
const initialState: filterSliceState = {
  search: "",
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { setSearch, setPage } = filterSlice.actions;
