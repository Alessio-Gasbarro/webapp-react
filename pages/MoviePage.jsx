import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';
import StarsRating from '../components/StarsRating';

const MoviePage = () => {

    const { id } = useParams();

    const [movie, setMovie] = useState(null);

    const fetchMovie = () => {
        axios.get(`http://127.0.0.1:300/api/movies/${id}`).then((resp) => {
            setMovie(resp.data);
        }).catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchMovie()
    }, []); //<- importante le parentesi quadre! Se no KABOOM!

    return (
        <>
            <div className='row'>
                {movie === null ? (
                    `Caricamento dati film`
                ) : (
                    <>
                        <div className="col-12 col-md-6 col-lg-4">
                            <img src={movie.image} alt="Movie" className='img-fluid' />
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <h1>{movie.title}</h1>
                            <h5>
                                <em className='text-secondary'>{movie.director}</em>
                            </h5>
                            <h4>
                                <em>{movie.genre}</em>
                            </h4>
                            <h6>
                                <em className='text-secondary'>{movie.release_year}</em>
                            </h6>
                            <p>{movie.abstract}</p>
                        </div>
                        <div className="col-12">
                            <div className="d-flex justify-content-between">
                                <h3>Recensioni</h3>
                                <div><StarsRating vote={movie.average_vote} /></div>
                            </div>
                        </div>
                        {movie.reviews.map((review) => (
                            <div className="row gy-3">
                                <ReviewCard review={review} key={`review -${review.id}`} />
                            </div>
                        ))}
                    </>
                )}
            </div>
        </>
    )
}

export default MoviePage;