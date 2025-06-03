import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

const HomePage = () => {

    // Definisco la variabile di stato
    const [movies, setMovies] = useState(initialMovies);

    const fetchMovies = () => {
        axios.get('http://127.0.0.1:3000/api/movies/').then((resp) => {
            setMovies(resp.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
            <h1 className='text-white'>Movies Boolean</h1>
            <h2 className='text-white'><i>The nerdest Movies community</i></h2>
            <div className="row gy-4">
                {movies.map((movie) => {
                    return <MovieCard movie={movie} key={`movie-${movie.id}`} />
                })}
            </div>
        </>
    );
};

export default HomePage;
