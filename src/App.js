import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import Home from "./Components/Home/Home";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import SearchResult from "./Components/Search/SearchResult";
import "./App.scss";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/movie/:tmdbID" Component={MovieDetails} />
            <Route path="/search/:query" element={SearchResult} />
            <Route path="*" Component={PageNotFound} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
