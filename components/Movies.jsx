import React from 'react'
import MoviesCard from '../components/MovieCard'

const Movies = ({movieCount, data, color}) => {

    return (
        <div className='flex justify-center items-center w-100 vh-70 mt-10'>
            <div className={`flex flex-wrap gap-5 justify-around items-center w-[80%] p-5 rounded-3xl ${color}`}>
                {data.slice(0, movieCount).map((movie, i) => (
                    <MoviesCard key={`${movie.title}${i}`} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Movies