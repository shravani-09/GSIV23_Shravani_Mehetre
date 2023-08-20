import { Link, useNavigate } from "react-router-dom";
import logo from "../../Images/logo192.png";
import "./Header.scss";
import React, { useState } from "react";

function Header() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="header">
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search for a movie "
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
        />
      </div>
      <div className="logo-img">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
