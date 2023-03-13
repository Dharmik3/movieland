import React,{useState} from "react";
import { Modal } from "./Modal";
const MovieCard = ({ movie }) => {
    const [showModal, setShowModal] = useState(false);
    const movieOverview=() => {
         setShowModal(true);
}
    return (
      <div className="movie" onClick={movieOverview}>
            {showModal ? <Modal setShowModal={()=>{setShowModal()} } movie={movie} /> : null}
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
            alt={movie.original_title}
          />
        </div>
        <div>
          <span>{movie.vote_average.toFixed(1)}</span>
          <h3>{movie.original_title}</h3>
        </div>
      </div>
    );
}

export default MovieCard