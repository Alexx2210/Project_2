import React, { useEffect } from "react";
import { useState } from "react";
import MovieBox from "./MovieBox";

import '../styles/App.css';

function App() {

    const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=ead762915fa943d470035bcf89cf913e";
    const [movies, setMovies] = useState([]);
    const example=["one", "two"];

    console.log(movies);

        return (
            <div>
                {movies.map((movieReq) => <MovieBox/>)};
            </div>
        );
    }

export default App;