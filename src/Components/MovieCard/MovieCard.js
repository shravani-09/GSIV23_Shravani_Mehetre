import "./MovieCard.scss";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <div className="movie_card" onClick={() => navigate(`/movie/${movie.id}`)}>
      <div className="img_wrap">
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
          alt="movie"
        ></img>
      </div>
      <div className="card_body">
        <div className="title_wrap">
          <h4>{movie.title}</h4> <p>{movie.vote_average}</p>
        </div>
        <p className="card_desc">{`${movie.overview}...(2 lines)`}</p>
      </div>
    </div>
  );
}

export default MovieCard;
