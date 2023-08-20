import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDataFromApi } from "../../Common/apis/movieApi";

//fetch movie list
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const data = await fetchDataFromApi(`/movie/upcoming`);

    return data;
  }
);

//fetch movie list
// export const fetchAsyncMovies = createAsyncThunk(
//   "movies/fetchAsyncMovies",
//   async (pageNum) => {
//     const data = await fetchDataFromApi(
//       `/movie/upcoming?language=en-US&page=${pageNum}`
//       // `/movie/upcoming/?language=en-US&page=${pageNum}`
//     );

//     return data;
//   }
// );
//fetch movie by id
export const fetchAsyncMovieById = createAsyncThunk(
  "movies/fetchAsyncMovieById",
  async (id) => {
    const data = await fetchDataFromApi(`/movie/${id}`);

    return data;
  }
);

// fetch movie details
export const fetchAsyncMovieDetail = createAsyncThunk(
  "movies/fetchAsyncMovieDetail",
  async (id) => {
    const data = await fetchDataFromApi(`/movie/${id}/credits`);
    return data;
  }
);

//fetch current page
export const fetchCurrentPage = createAsyncThunk(
  "movies/fetchCurrentPage",
  async ({ query, pageNum }) => {
    const data = await fetchDataFromApi(
      `/search/multi?query=${query}&page=${pageNum}`
    );
    console.log(data);
    return data;
  }
);
const initialState = {
  movies: {},
  selectMovie: {},
  details: {},
  page: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovie: (state) => {
      state.selectMovie = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: action.payload };
    },
    // for movies
    [fetchAsyncMovies.rejected]: (error) => {
      console.log(error);
    },
    //for movies by id
    [fetchAsyncMovieById.fulfilled]: (state, action) => {
      console.log("Fetched Successfully!");
      return { ...state, selectMovie: action.payload };
    },
    // for movie details
    [fetchAsyncMovieDetail.fulfilled]: (state, action) => {
      console.log("Fetched Successfully!");
      return { ...state, details: action.payload };
    },
    //for currentpage
    [fetchCurrentPage.fulfilled]: (state, action) => {
      console.log("Fetched Successfully!");
      return { ...state, page: action.payload };
    },
  },
});

export const { removeSelectedMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovie = (state) => state.movies.selectMovie;
export const getMovieDetails = (state) => state.movies.details;
export const getCurrentPage = (state) => state.movies.page;
export default movieSlice.reducer;
