import React from 'react'

const ReviewCard = ({ review }) => {
    return (
        <div>
            <div className="col-12">
                <div className="card p-4">
                    <p>{review.text}</p>
                    <p>{review.vote}</p>
                    <p>{review.author}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard