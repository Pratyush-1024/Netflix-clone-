import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Row.css'

function MovieTrailer({ movieId }) {
  const [trailerKey, setTrailerKey] = useState('');

  useEffect(() => {
    async function fetchTrailer() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          {
            params: {
              api_key: 'acbf08ad4902fee992ccfcec4a6e0ddf',
              language: 'en-US',
            },
          }
        );

        const trailer = response.data.results.find(
          (video) => video.type === 'Trailer'
        );

        if (trailer) {
          setTrailerKey(trailer.key);
        }
      } catch (error) {
        console.error('Error fetching movie trailer:', error);
      }
    }

    fetchTrailer();
  }, [movieId]);

  return (
    <div className='movie-video'>
      {trailerKey && (
        <iframe
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="Movie Trailer"
          frameBorder="0"
        ></iframe>
      )}
    </div>
  );
}

export default MovieTrailer;
