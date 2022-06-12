//import { Modal,show,Button} from 'react-bootstrap';
import React, {useState} from 'react';
import moviedetail from './moviedetail';
import {useNavigate} from "react-router-dom"
const API_IMG="https://image.tmdb.org/t/p/w500/";

const MovieComponent =({poster_path})=>{
   
    return(
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
            <img className="card-img-top" src={API_IMG+poster_path} />
          {/* <button onClick={handleElectricalPage}></button> */}
              <div className="card-body">
                
           
              </div>
            </div>
        </div>
    )
}

export default MovieComponent;