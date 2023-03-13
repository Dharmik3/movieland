import React, { useEffect, useRef,useState } from "react";
import ReactDom from "react-dom";
import "./Modal.css";

export const Modal = ({ setShowModal, movie }) => {
  const [trailer, setTrailer] = useState(null);
  console.log(movie);
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
      console.log("close");
    }
  };

  useEffect(() => {
    const url_trailers = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=4d4ed145d3584846f5922b6a467e1f85`;
    fetch(url_trailers)
      .then((response) => response.json())
      .then((json) => json.results)
      .then((data) => {
        let youtubeTrailers = data.filter(function (trailer) {
          return trailer.site === "YouTube";
        });
          setTrailer(youtubeTrailers);
          console.log(trailer)
      })
      .catch((error) => console.log(error));
  }, []);

  // render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div
      className="container"
      ref={modalRef}
      onClick={closeModal}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
      }}
    >
      <div className="modal">
        <h1>{movie.original_title}</h1>
        <h3>{movie.overview}</h3>
        <p>
          Release Date :<span> {movie.release_date}</span>
        </p>
        <p>
          Rating :<span> {movie.vote_average.toFixed(1)}</span>
        </p>

        {trailer !== null ? (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer[0].key}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        ) : null}
        <button
          onClick={() => {
            setShowModal(false);
            console.log("hi");
          }}
        >
          X
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
