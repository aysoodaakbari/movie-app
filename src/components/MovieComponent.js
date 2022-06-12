//import { Modal,show,Button} from 'react-bootstrap';
import React from 'react';
import Moviedetail from "./Moviedetail.js"
import "../style/MovieComponent.css";
import {NavLink,} from "react-router-dom"

const API_IMG="https://image.tmdb.org/t/p/w500/";
const MovieComponent =({poster_path,original_title,vote_average,release_date})=>{

    
    return(
        

     <div className="cardContainer" >
        
            <div className="card-body"  >
           

          <NavLink  to='/moviedetail'  ><img className="coverimg" alt='a' src={API_IMG + poster_path} /></NavLink>

              <h3>{original_title}</h3>
                <div className='row-container'>
                    <h4>IMDb: {vote_average}</h4>
                    <h5>{release_date}</h5>
                    
                </div>
             
            </div>
           
          
        </div>
        
        
    )
}

export default MovieComponent;