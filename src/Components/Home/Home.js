import { useDispatch } from "react-redux/es/exports";
import MovieList from "../MovieListing/MovieList";
import useFetch from "../../Hooks/useFetch";
import { addMovies } from "../../Features/Movie/movieSlice";

function Home() {
  const { data, loading, error } = useFetch(`/movie/upcoming`);
  const dispatch = useDispatch();

  if (data) dispatch(addMovies(data));
  if (error) throw error;
  if (loading) return <h1>loading...</h1>;
  return (
    <>
      <div className="banner-img"></div>
      <MovieList />
    </>
  );
}

export default Home;
