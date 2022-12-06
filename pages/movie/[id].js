import React from 'react'
import { Client, urlFor } from '../../client'
import { BiPlayCircle } from 'react-icons/bi'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import ReactPlayer from 'react-player/youtube'
import Carousel from '../../components/Carousel'

const Movie = ({ movieData , similar }) => {

    const scrollSmooth = ()=>{
        window.scrollTo({ top: 590, behavior: 'smooth' })
    }

    return (
        <>
            <div className='relative w-full h-screen'>
                <img className='w-full h-full object-cover bg-bottomOverlay' src={urlFor(movieData.banner)} />
                <div className='flex flex-col justify-center items-start top-0 right-0 left-0 bottom-0 w-full h-full absolute p-5 text-white'>
                    <div>
                        <h1 className='text-bold md:text-5xl text-3xl'>
                            {movieData.title}
                        </h1>
                        <p className='text-left leading-snug mt-3 max-w-3xl'>
                            {movieData.description}
                        </p>
                        <div className='flex flex-row justify-start items-center mt-3 mb-2'>
                            {movieData.stars.map((star) => (
                                star ? <AiFillStar /> : <AiOutlineStar />
                            ))}
                        </div>
                        <button onClick={()=> scrollSmooth()} className='bg-white/30 rounded w-40 h-10 mt-5 hover:text-black flex flex-row gap-4 p-5 items-center'>
                            <BiPlayCircle className='text-xl' />  <span>Ver Trailer</span>
                        </button>
                    </div>
                    <div className='hidden lg:fixed right-0 p-20 sm:flex justify-center items-center animate-[pulse_3s_ease-in-out_infinite]'>
                        <img src={urlFor(movieData.cover)} className='w-full h-[500px] object-cover rounded-xl' alt="" />
                    </div>
                </div>
            </div>
            <div className='w-full sm:w-[640px] sm:ml-10'>
                <ReactPlayer className='bg-bottomOverlay' width='100%' style={{
                    borderRadius : '25px'
                }} url={movieData.trailer} />
            </div>

            <div className='mt-6 flex flex-col md:w[50%] text-white ml-5'>
                <h1 className='text-2xl'>Te podrian interesar</h1>
                <Carousel movies={similar} />
            </div>
        </>
    )
}
export default Movie

export const getServerSideProps = async ({ params: { id } }) => {
    
    const movieData = await Client.fetch(`*[_type == "movies" && _id == "${id}"][0]`);

    const similarData = await Client.fetch(`*[_type == "movies"]`);

    let similar = similarData.filter((movie)=> movie.genre.includes(movieData.genre[1]) && movie._id != movieData._id)

    similar < 1 ? similar = similarData : similar;

    return {
        props: { movieData , similar }
    }
}