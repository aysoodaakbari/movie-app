//import { Modal,show,Button} from 'react-bootstrap';
import React, { useState } from 'react';
import Moviedetail from "./Moviedetail.js"
import "../style/MovieComponent.css";
//import {Link} from "react-router-dom"

const API_IMG="https://image.tmdb.org/t/p/w500/";
const MovieComponent =({poster_path,original_title,vote_average,release_date})=>{
const[popup,setpopup]=useState(false);
const HandelClickdetail=()=>
{
    setpopup(!popup);
}
    return(
        

     <div className="cardContainer" >
        
            <div className="card-body" onClick={HandelClickdetail}  >
           

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
                    <button className='goback-btn'>Back</button>
                    <h3>{original_title}</h3>
                </div>
            </div>
        </div>:""}
           
          
        </div>
        
        
    )
}

export default MovieComponent;