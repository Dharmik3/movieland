import React from "react";
import MovieCard from "./MovieCard";
import { useStateValue } from "../context/StateProvider";

const Movies = () => {
  const [{ movies }] = useStateValue();
  return (
    <>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found!</h2>
        </div>
      )}
    </>
  );
};

export default Movies;
