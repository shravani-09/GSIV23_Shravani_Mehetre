import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import MovieList from "../MovieListing/MovieList";
import { fetchAsyncMovies } from "../../Features/Movie/movieSlice";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  return (
    <>
      <div className="banner-img"></div>
      <MovieList />
    </>
  );
}

export default Home;
