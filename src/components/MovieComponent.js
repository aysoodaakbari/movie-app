
import React, { useState,useEffect } from 'react';
import Axios from "axios";

import "../style/MovieComponent.css";


const API_IMG="https://image.tmdb.org/t/p/w500/";
const MovieComponent =({poster_path,original_title,vote_average,release_date,overview,popularity,id})=>{
 /*  const [movieInfo, setMovieInfo] = useState();
  const selectedMovie = id;
 
  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${selectedMovie}/credits?api_key=f62f750b70a8ef11dad44670cfb6aa57&language=en-US`,
    ).then((response) => setMovieInfo(response.data));
      
  }, [selectedMovie]); 
  
  console.log(movieInfo?.cast.popularity); */
const[popup,setpopup]=useState(false);
const HandelClickdetailopen=()=>
{
    setpopup(!popup);
}
const HandelClickdetailclose=()=>
{
    setpopup(false);
}
    return(
        

     <div className="cardContainer" >
        
            <div className="card-body" onClick={HandelClickdetailopen}  >
           

         <img className="coverimg" alt='a' src={API_IMG + poster_path} />
        
              <h3>{original_title}</h3>
                <div className='row-container'>
                    <h4>IMDb: {vote_average}</h4>
                    <h5>{release_date}</h5>
                   
                    
                </div>
                </div>
         {popup?   
    <div className='main-popup'>
         <div className='popup'>
                <div className='popup-header'>
                    <button className='goback-btn' onClick={HandelClickdetailclose}>Back</button>
                    <h3>{original_title}</h3>
                   
                </div>
            <div className='container-body'>
                <img className="card-img" style={{width:'14rem'}}src={API_IMG+poster_path} />
                     <div className='div-container'>
                        <div className='row-container'>
                            <h4>IMDb:</h4>
                            <h5> {vote_average}</h5>
                        </div>
                     
                        <div className='row-container'>
                      <h4>Release Date:</h4>
                      <h5> {release_date}</h5>
                      </div>
                      <div className='row-container'>
                      <h4>popularity</h4>
                      <h5>{popularity}</h5>
                      </div>
                      <h4>Overview</h4>
                      <p>{overview}</p>
                      </div>
            </div>
        </div>
    </div>:""}
           
          
        </div>
        
        
    )
}

export default MovieComponent;