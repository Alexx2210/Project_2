import React, { useEffect } from "react";
import { useState } from "react";
import MovieBox from "./MovieBox";
import '../styles/App.css';

import '../styles/App.css';


function App() {

    const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=ead762915fa943d470035bcf89cf913e";
    const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=ead762915fa943d470035bcf89cf913e&query=";
    const [movies, setMovies] = useState([]);
    const [term, setTerm] = useState([]);
    const handleSearch = (event) => {
        event.preventDefault();

        fetch(API_SEARCH + term)
        .then(res => res.json())
        .then(data => setMovies(data.results))
    }

    useEffect(() => {
        fetch(API_URL)
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            setMovies(data.results);
        })
    }, [])

        return (
            <main>
                <header>
                    <h1>Movie Search</h1>
                    <form onSubmit={handleSearch}>
                        <input onChange={(event) => setTerm(event.target.value) }/>
                        <button>Search</button>
                    </form>
                </header>
            <div className="container">
                {movies.map((movieReq) => 
                <MovieBox key={movieReq} {...movieReq} />)}
            </div>
            </main>
        );
    }

export default App;