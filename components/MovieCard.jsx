import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {

    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-image-top">
                    <img src={movie.image} alt="Movie" className='img-fluid' />
                </div>
                <div className="card-body">
                    <h3 className='text-primary'>{movie.title}</h3>
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
                    <Link className="btn btn-primary" to={`/movies/${movie.id}`}>Leggi tutto</Link>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;
