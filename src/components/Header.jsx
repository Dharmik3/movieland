import React, { useState, useEffect } from "react";
import searchIcon from "../assets/search.svg";
import { SET_MOVIES, SET_MOVIE } from "../context/actionType";
import { useStateValue } from "../context/StateProvider";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [{ movie }, dispatch] = useStateValue();

  const searchMovies = async (title) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4d4ed145d3584846f5922b6a467e1f85&query=${title}`
    );
    const data = await res.json();
    dispatch({
      type: SET_MOVIES,
      movies: data.results,
    });
  };

  useEffect(() => {
    searchMovies("spider man");
  }, []);

  return (
    <>
      {movie === null && <h1 className="main_heading">MovieLand</h1>}

      {movie === null ? (
        <div className="search">
          <input
            placeholder="search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyUp={(e) => {
              if (e.keyCode === 13) searchMovies(searchTerm);
            }}
          />
          <img
            src={searchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      ) : null}
    </>
  );
};

export default Header;
