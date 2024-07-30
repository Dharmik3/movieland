import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { SET_MOVIE } from "../context/actionType";
import "./style.css";

const Modal = () => {
  const [trailer, setTrailer] = useState(null);
  const [{ movie },dispatch] = useStateValue();

  useEffect(() => {
    const url_trailers = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=4d4ed145d3584846f5922b6a467e1f85`;
    fetch(url_trailers)
      .then((response) => response.json())
      .then((json) => json.results)
      .then((data) => {
        if (data.length === 0) {
          setTrailer(null);
        } else {
          let youtubeTrailers = data.filter(function (trailer) {
            return trailer.site === "YouTube";
          });
          setTrailer(youtubeTrailers);
        }
      })
      .catch((error) => console.log(error));
  }, []);

    const handleLogoClick = () => {
      dispatch({
        type: SET_MOVIE,
        movie: null,
      });
    };

  return (
    <div
      className="modal_container"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
      }}
    >
      <div className="modal">
        <div className="modal_heading_container">
          <Link to="/" className="logo_link" onClick={handleLogoClick}>
            <h1 className="modal_heading">MovieLand</h1>
          </Link>
        </div>

        <h2 className="title">{movie.title}</h2>
        <h3 className="description">{movie.overview}</h3>
        <p className="release_date">
          Release Date :<span className="span_date"> {movie.release_date}</span>
        </p>
        <p className="rating">
          Rating :
          <span className="span_rating"> {movie.vote_average.toFixed(1)}</span>
        </p>

        {trailer !== null ? (
          <iframe
            className="iframe"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer[0].key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : null}
        <p className="footer">
          Copyright © {new Date().getFullYear()} <strong>Dharmik Patel</strong>,{" "}
          <small>V2.O</small>
        </p>
      </div>
    </div>
  );
};

export default Modal;
