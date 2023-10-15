import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import PeopleReducer from "./slices/PeopleReducer";

// const persistedState = localStorage.getItem("reduxState")
//   ? JSON.parse(localStorage.getItem("reduxState"))
//   : {};

export const store = configureStore({
  reducer: {
    people: PeopleReducer,
  },
  //preloadedState- состояние, которое должно подгрузиться сначала, и  в него добавляю данные из localStorage
  // preloadedState: persistedState,
});
// store.subscribe(() => {
//   localStorage.setItem("reduxState", JSON.stringify(store.getState()));
// });
export type RootState = ReturnType<typeof store.getState>; //определяет тип переданного в него объекта и возвращает в тип RootState
export type AppDispatch = typeof store.dispatch; //
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
