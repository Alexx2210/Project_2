import React, { useEffect } from "react";
import { useState } from "react";

import '../styles/App.css';

function App() {

    const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=ead762915fa943d470035bcf89cf913e";
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(API_URL)
        .then(res => res.json())
        .then(data => setMovies(data))
    }, [])

    console.log(movies);

        return (
            <div>
                {movies.map((movieReq) => <MovieBox/>)};
            </div>
        );
    }

export default App;