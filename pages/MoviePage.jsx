import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import ReviewCard from '../components/ReviewCard'
import StarsRating from '../components/StarsRating'
import ReviewForm from '../components/ReviewForm'

const MovieDetail = () => {

    const { id } = useParams()

    const [movie, setMovie] = useState({})

    const [reviews, setReviews] = useState([])

    const fecthMovie = () => {
        axios
            .get(`http://localhost:3000/api/movies/${id}`)
            .then((response) => {
                setMovie(response.data)
                setReviews(response.data.reviews)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fecthMovie()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row my-3">
                    <div className="col-12">
                        <h2>MovieDetail</h2>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12 col-md-6 col-lg-4">
                        <img
                            src={movie.image}
                            alt={movie.title}
                            className='img-fluid'
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-8">
                        <h3 className='mb-3'>{movie.title}</h3>
                        <p>Director: {movie.director}</p>
                        <p>Genre: {movie.genre}</p>
                        <p>Release Year: {movie.release_year}</p>
                        <p>Abstract: {movie.abstract}</p>
                        <p>{reviews.length} reviews</p>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-6">
                        <h3>Reviews</h3>
                    </div>
                    <div className="col-6 text-end">
                        <StarsRating vote={movie.vote} />
                    </div>
                </div>
                <div className="row">
                    {reviews.map(review => (
                        <ReviewCard review={review} key={review.id} />
                    ))}
                </div>
                <div className="row">
                    <div className="col-12">
                        <ReviewForm movie_id={movie.id} updateReviews={() => { fecthMovie() }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetail;