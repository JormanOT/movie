import React from 'react'
import MoviesCard from './MovieCard'

const MoviesGroup = ({ data, title, info, color, filter }) => {

    const movies = data.filter((movie, i)=> movie.genre.includes(filter))

    return (
        <div className='flex justify-center items-center w-100 vh-70 mt-10'>
            <div className={`grid md:grid-cols-3 grid-cols-1 w-[90%] p-5 bg-gradient-to-r ${color.from} ${color.to} rounded-3xl`}>
                <div className='flex flex-col justify-center items-center text-white text-center'>
                    <h1 className='text-3xl text-center'>{title}</h1>
                    <p className='leading-10'>{info}</p>
                    <button className='bg-white/30 rounded w-40 h-10 mt-5 hover:text-gray-600'>Ver Todo</button>
                </div>
                <div className='md:col-span-2 hidden md:flex flex-wrap gap-5 justify-around items-center w-[100%] p-5'>
                    {movies.slice(0, 3).map((movie) => (
                        <MoviesCard key={movie.title} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MoviesGroup