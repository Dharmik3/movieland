import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { SET_MOVIE } from "../context/actionType";

const MovieCard = ({ movie }) => {
  const [{ }, dispatch] = useStateValue();
  

  const setMovie = () => {
    dispatch({
      type: SET_MOVIE,
      movie:movie
    })
  };

  return (
    <div className="movie">
      <Link to={`/${movie.id}`} onClick={setMovie}>
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.poster_path !== null
              ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
              : "https://via.placeholder.com/400"
          }
          alt={movie.title}
        />
      </div>
      <div>
        <span>{movie.vote_average.toFixed(1)}</span>
        <h3>{movie.title}</h3>
      </div>
    </Link>
    </div>
  );
};

export default MovieCard;
