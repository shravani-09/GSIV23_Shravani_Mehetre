import MovieCard from "../MovieCard/MovieCard";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../Features/Movie/movieSlice";
import "./MovieList.scss";
function MovieList() {
  const movies = useSelector(getAllMovies);
  console.log(movies);
  console.log(`movies.results: ${movies.results}`);

  // let renderMovies = "";

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {movies.results ? (
            movies.results.map((movie, index) => {
              console.log(`movie ${movie}`);
              return <MovieCard key={index} movie={movie} />;
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
