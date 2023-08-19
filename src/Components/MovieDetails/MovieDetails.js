import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieById,
  fetchAsyncMovieDetail,
  getSelectedMovie,
  removeSelectedMovie,
  getMovieDetails,
} from "../../Features/Movie/movieSlice";

function MovieDetails() {
  const { tmdbID } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(getSelectedMovie);
  const movieDetails = useSelector(getMovieDetails);
  console.log(movieDetails);
  useEffect(() => {
    dispatch(fetchAsyncMovieDetail(tmdbID));
    dispatch(fetchAsyncMovieById(tmdbID));
    return () => {
      dispatch(removeSelectedMovie());
    };
  }, [dispatch, tmdbID]);

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };
  const director = movieDetails.crew?.filter((f) => f.job === "Director");
  // let date = typeof (movie.release_date);
  console.log(typeof movie.release_date);
  // let year = date.split("-");

  return (
    <div className="movie_detailed_card">
      <div className="img_wrap">
        <img
          className="movie_img"
          src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
          alt="movie"
        ></img>
      </div>
      <div className="card_body">
        <div className="title_wrap">
          <h4>{movie.title}</h4>
          <p>{movie.vote_average}</p>
        </div>
        <div className="about_wrap">
          <p>Year</p>
          <p> {toHoursAndMinutes(movie.runtime)}</p>
          <p>
            {director?.map((d, i) => (
              <span key={i}>
                {d.name}
                {director.length - 1 !== i && ", "}
              </span>
            ))}
          </p>
        </div>
        <div className="casting_wrap">
          <p>Cast:</p>
          <div className="actors_list">
            {movieDetails.cast?.map((d, i) => (
              <span key={i}>
                {d.name}
                {director.length - 1 !== i && ", "}
              </span>
            ))}
          </div>
        </div>
        <div className="card_desc_wrap">
          <p className="card_desc">Description:</p>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
