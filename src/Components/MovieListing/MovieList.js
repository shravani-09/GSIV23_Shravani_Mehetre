import MovieCard from "../MovieCard/MovieCard";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../Features/Movie/movieSlice";
import "./MovieList.scss";

import { getCurrentPage } from "../../Features/Movie/movieSlice";
function MovieList() {
  const movies = useSelector(getAllMovies);
  const currentPage = useSelector(getCurrentPage);
  console.log(currentPage);
  // console.log(`movies.results: ${movies.results}`);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <div className="movie-container">
          {movies.results ? (
            movies.results.map((movie, index) => {
              console.log(`movie ${movie}`);
              return <MovieCard hoverable key={index} movie={movie} />;
            })
          ) : (
            <div className="movies-error">
              <h3>Something went wrong!!</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
