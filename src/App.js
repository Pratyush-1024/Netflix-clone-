import React from 'react';
import Row from './Row';
import { requests } from './url_req';
import Banner from './Banner';
import Navbar from './Navbar';
import './App.css';

const App = ()=>{


  return(
    <>
      <div><Navbar/></div>
      <div><Banner /></div>
      <div>
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title='Treding Now' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
      </div>

    </>
    
  );
  
}

export default App;
