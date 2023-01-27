import React, { useState } from "react";
import '../styles/MovieBox.css'
import Modal from "./Modal";

const API_IMG="https://image.tmdb.org/t/p/w500";
const MovieBox = ({title, poster_path, vote_average, release_date, overview}) => {
    const [modalActive, setModalActive] = useState(false);
    return(
        <div>
        <div className="movieCard">
            <div className="poster">
            <img src={API_IMG+poster_path}></img>
            </div>
            <button type="button" className="about_btn" onClick={() => setModalActive(true)}>About the film</button>
            </div>

            <Modal active={modalActive} setActive={setModalActive}>
            <img src={API_IMG+poster_path}></img>

            <div className="info">
            <h1>{title}</h1>
            <h2>IMDB: {vote_average}</h2>
            <h3>Release Date: {release_date}</h3>
            <p>{overview}</p>
            </div>
            </Modal>
            
        
        </div>
    )
}

export default MovieBox;