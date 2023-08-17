function MovieCard({ movie }) {
  // const posterPath= movie.poster_path?
  // console.log(`data ${movie}`);
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <p>{movie.title}</p>
          <img src={movie.poster_path} alt="user"></img>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
