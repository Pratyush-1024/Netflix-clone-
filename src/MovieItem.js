import React, { useState,useRef } from 'react';
import MovieTrailer from './MovieTrailer';
import './Row.css'

function MovieItem({ movie }) {
  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';
  const [showTrailer, setShowTrailer] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const trailerRef = useRef(null);

  const handleTrailerEnd = () => {
    setShowTrailer(false);
    setSelectedMovie(null);
  };


  
  const handleClick = (movie) => {
    if (selectedMovie === movie) {
      setSelectedMovie(null);
      setShowTrailer(false);
    } else {
      setSelectedMovie(movie);
      setShowTrailer(true);
    }
  };


  return (
    <div className='movie-video'
    key={movie.id} onClick={() => handleClick(movie)}>
            {showTrailer && selectedMovie?.id === movie.id ? (
              <MovieTrailer 
              movieId={movie.id}
              onEnd={handleTrailerEnd}
              ref={trailerRef}  />
            ) : (
              <img
                src={`${BASE_IMAGE_URL}${movie.poster_path}`}
                alt={movie.name}
                className="movie-item"
              />
      )}
    </div>
  );
}

export default MovieItem;
