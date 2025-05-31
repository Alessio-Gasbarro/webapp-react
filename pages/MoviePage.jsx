import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ReviewCard from '../components/ReviewCard'

const initialMovies = [
    {
        id: 1,
        title: "Titolo 1",
        director: "Direttore 1",
        genre: "Action",
        release_year: "2003",
        abstract: "Lorem ipsum",
        image: "https://picsum.photos/500/300",
        reviews: [
            {
                id: 1,
                text: "Lorem ipsum",
                author: "Autore 1",
                vote: 1
            },
            {
                id: 2,
                text: "Lorem ipsum",
                author: "Autore 2",
                vote: 1
            },
            {
                id: 3,
                text: "Lorem ipsum",
                author: "Autore 3",
                vote: 1
            },
        ]
    },
    {
        id: 2,
        title: "Titolo 2",
        director: "Direttore 2",
        genre: "Action",
        release_year: "2003",
        abstract: "Lorem ipsum",
        image: "https://picsum.photos/500/300",
        reviews: [
            {
                id: 4,
                text: "Lorem ipsum",
                author: "Autore 4",
                vote: 2
            },
            {
                id: 5,
                text: "Lorem ipsum",
                author: "Autore 5",
                vote: 2
            },
            {
                id: 6,
                text: "Lorem ipsum",
                author: "Autore 6",
                vote: 2
            },
        ]
    },
    {
        id: 3,
        title: "Titolo 3",
        director: "Direttore 3",
        genre: "Action",
        release_year: "2003",
        abstract: "Lorem ipsum",
        image: "https://picsum.photos/500/300",
        reviews: [
            {
                id: 7,
                text: "Lorem ipsum",
                author: "Autore 7",
                vote: 3
            },
            {
                id: 8,
                text: "Lorem ipsum",
                author: "Autore 8",
                vote: 3
            },
            {
                id: 9,
                text: "Lorem ipsum",
                author: "Autore 9",
                vote: 3
            },
        ]
    },
    {
        id: 4,
        title: "Titolo 4",
        director: "Direttore 4",
        genre: "Action",
        release_year: "2003",
        abstract: "Lorem ipsum",
        image: "https://picsum.photos/500/300",
        reviews: [
            {
                id: 10,
                text: "Lorem ipsum",
                author: "Autore 10",
                vote: 4
            },
            {
                id: 11,
                text: "Lorem ipsum",
                author: "Autore 11",
                vote: 4
            },
            {
                id: 12,
                text: "Lorem ipsum",
                author: "Autore 12",
                vote: 4
            },
        ]
    },
    {
        id: 5,
        title: "Titolo 5",
        director: "Direttore 5",
        genre: "Action",
        release_year: "2003",
        abstract: "Lorem ipsum",
        image: "https://picsum.photos/500/300",
        reviews: [
            {
                id: 13,
                text: "Lorem ipsum",
                author: "Autore 13",
                vote: 5
            },
            {
                id: 14,
                text: "Lorem ipsum",
                author: "Autore 14",
                vote: 5
            },
            {
                id: 15,
                text: "Lorem ipsum",
                author: "Autore 15",
                vote: 5
            },
        ]
    },
    {
        id: 6,
        title: "Titolo 6",
        director: "Direttore 6",
        genre: "Action",
        release_year: "2003",
        abstract: "Lorem ipsum",
        image: "https://picsum.photos/500/300",
        reviews: [
            {
                id: 16,
                text: "Lorem ipsum",
                author: "Autore 16",
                vote: 6
            },
            {
                id: 17,
                text: "Lorem ipsum",
                author: "Autore 17",
                vote: 6
            },
            {
                id: 18,
                text: "Lorem ipsum",
                author: "Autore 18",
                vote: 6
            },
        ]
    },
]


const initialReviews = [
    {
        id: 1,
        text: "Lorem ipsum",
        author: "Autore 1",
        vote: 3
    },
    {
        id: 2,
        text: "Lorem ipsum",
        author: "Autore 2",
        vote: 5
    },
    {
        id: 3,
        text: "Lorem ipsum",
        author: "Autore 3",
        vote: 2
    },
]

const MoviePage = () => {

    const { id } = useParams();
    const [movies, setMovies] = useState(initialMovies);
    const [movie, setMovie] = useState(null);

    const fetchMovie = () => {
        movies.forEach((actualMovie) => {
            if (actualMovie.id === parseInt(id)) {
                setMovie(actualMovie);
            }
        })
    }

    useEffect(() => {
        fetchMovie()
    }, []);

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