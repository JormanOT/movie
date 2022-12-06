import React from 'react'
import MoviesCard from './MovieCard'

const Carousel = ({ movies }) => {
    return (
        <div className={`carousel w-full lg:w-[50%] p-5 bg-gradient-to-r rounded-3xl`}>
            {movies.map((movie) => (
                <MoviesCard key={movie._id} movie={movie} />
            ))}
        </div>
    )
}

export default Carousel