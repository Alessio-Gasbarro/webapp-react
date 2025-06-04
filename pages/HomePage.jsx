import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from '../components/MovieCard'

const Homepage = () => {

    const [movies, setMovies] = useState([])

    const fecthMovies = () => {
        axios
            .get('http://localhost:3000/api/movies')
            .then((response) => {
                setMovies(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fecthMovies()
    }, [])

    return (
        <>
            <div className="container my3">
                <h2 className='my-3'>Movie List</h2>
                <div className="row gy-4">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Homepage;
