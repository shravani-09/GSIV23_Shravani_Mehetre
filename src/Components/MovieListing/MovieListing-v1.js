import MovieCard from "../MovieCard/MovieCard";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies } from "../../Features/Movie/movieSlice";
import "./MovieList.scss";
import { useEffect, useState } from "react";
import { fetchAsyncMovies } from "../../Features/Movie/movieSlice";

function MovieListV1() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const newMovies = useSelector(getAllMovies);
  const array = new Array(newMovies.results);

  function fetchMovies() {
    dispatch(fetchAsyncMovies(page));
    setMovies((preMovies) => [...preMovies, ...array]);
    setPage((prePage) => prePage + 1);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  console.log(movies);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 500
    ) {
      fetchMovies();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <div className="movie-container">
          {movies ? (
            movies.map((movie) => {
              return movie.map((m, i) => {
                return <MovieCard key={m.id} movie={m} />;
              });
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

export default MovieListV1;
