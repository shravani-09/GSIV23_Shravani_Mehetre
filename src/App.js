import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import MovieList from "./Components/MovieListing/MovieList";
import Home from "./Components/Home/Home";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

import "./App.scss";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/movie/:tmdbID" Component={MovieList} />
            <Route Component={PageNotFound} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
