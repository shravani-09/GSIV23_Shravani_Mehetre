import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./Movie/movieSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
