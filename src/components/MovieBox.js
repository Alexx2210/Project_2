import React from "react";
import '../styles/MovieBox.css'

const API_IMG="https://image.tmdb.org/t/p/w500";
const MovieBox = ({title, poster_path, vote_average, release_date, overview}) => {
    return(
        <div className="movieCard">
            <div className="poster">
            <img src={API_IMG+poster_path}></img>
            <button type="button" className="about_btn">About the film</button>
            </div>
        </div>
    )
}

export default MovieBox;