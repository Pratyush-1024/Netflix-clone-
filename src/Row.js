import React,{useState,useEffect} from 'react'
import axios from './instance.js';
import MovieItem from './MovieItem.js'
import './Row.css'


function Row({title,fetchUrl}) {

    
    const [movies,setMovies]=useState([]);
    

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl);
          
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    },[fetchUrl]);

  

    return (
    <div className="movie-bar">
        <h2>{title}</h2>
        
        <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id}>
          <MovieItem movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row