import React, { useEffect, useState } from 'react';
import axios from './instance';
import {requests } from './url_req';
import './Banner.css'

function Banner() {

    const [banner,setBanner]=useState([]);

    

    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(requests.fetchNetflixOriginals);
            setBanner(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
            return request;
        }
        fetchData();
    },[]);

    const truncate= (str,n)=>{
      return str?.length>n?str.substr(0,n-1)+"...":str;
    }



  return (
    <header 
    
    className='banner'
    style={{
        backgroundSize:"100% 100%",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${banner?.backdrop_path}")`,
        backgroundPosition:"center center"
    }}>
        <div className='banner-contents'>
            <h1 className='banner-title'>{banner?.title||banner?.name||banner?.original_name}</h1>
      

        <div className='banner-buttons'>
            <button className='banner-button'>Play</button>
            <button className='banner-button'>My List</button>
        </div>

            <h1 className='banner-description'>
                {truncate(banner?.overview,175)}
            </h1>
        </div>
        <div className='banner--fadeBottom'></div>
    </header>
    
  ); 
}

export default Banner