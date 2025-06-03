import React from 'react'
import StarsRating from './StarsRating'

const ReviewCard = ({ review }) => {
    const { text, vote, author } = review;

    return (
        <div>
            <div className="col-12">
                <div className="card p-4">
                    <p>{text}</p>
                    <p><StarsRating vote={vote} /></p>
                    <p>{author}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard