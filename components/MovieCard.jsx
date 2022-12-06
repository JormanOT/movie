import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { urlFor } from '../client'
import Link from 'next/link'

const MoviesCard = ({movie}) => {
  const [movieHover, setMovieHover] = useState(false);

  return (
    <Link href={`/movie/${movie._id}`} onMouseEnter={() => setMovieHover(true)} onMouseLeave={() => setMovieHover(false)} className='rounded-lg relative bg-black/60 w-[200px] h-[300px] cursor-pointer'>
      <img className='rounded-lg' src={urlFor(movie.cover)} alt="" />
      {movieHover && (
        <div className='absolute bg-blackOverlay top-0 left-0 right-0 bottom-0 text-white rounded-lg'>
          <div className='flex flex-col justify-end ml-5 h-[90%] w-full'>
            <h6>{movie.title.length > 20 ? `${movie.title.slice(0,20)}...`: movie.title}</h6>
            <p>{movie.genre[0]}</p>
            <div className='flex flex-row justify-start items-center'>
              {movie.stars.map((star)=>(
                star ? <AiFillStar /> : <AiOutlineStar/>
              ))}
            </div>
          </div>
        </div>
      )}
    </Link>
  )
}

export default MoviesCard