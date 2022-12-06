import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { urlFor } from '../client';

const HeaderBanner = ({ data }) => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const animationScroll = (i) => {
            setTimeout(() => {
                index == 4 ? setIndex(0) : setIndex(index + 1);
            }, 5000);
        };
        animationScroll()
    }, [index])


    return (
        <div className='flex justify-start items-center flex-col h-screen'>
            <div className="relative w-full h-full">
                <img className='w-full h-full object-cover bg-bottomOverlay bannerAnimation' src={urlFor(data[index].banner)} alt="banner" />
                <div className='absolute flex flex-col justify-end items-center top-0 right-0 left-0 bottom-0'>
                    <div className='w-full h-full absolute flex justify-start items-center p-5'>
                        <div>
                            <h1 className='text-white text-bold md:text-7xl text-3xl'>
                                {data[index].title.length > 20 ?
                                    `${data[index].title.slice(0, 20)}...` :
                                    data[index].title}
                            </h1>
                            <p className='text-left text-white leading-snug mt-3'>
                                {data[index].description.length > 100 ?
                                    `${data[index].description.slice(0, 150)}...` :
                                    data[index].description}
                            </p>
                            <button className='bg-white/30 rounded w-40 h-10 mt-5 hover:text-white'>Ver Detalles</button>
                        </div>
                    </div>
                    <div className='md:flex hidden justify-center gap-5'>
                        {data.slice(0, 5).map((item, i) => (
                            <Link href={`/movie/${item._id}`} key={i} className={`relative cursor-pointer mb-2 overflow-hidden img-contenedor`}>
                                <img className={`w-56 h-32 rounded-lg object-cover`} src={urlFor(item.banner)} alt='cover' />
                                <div className={`flex justify-center items-center absolute top-0 right-0 left-0 bottom-0 rounded-lg ${i === index ? 'bg-white/20 border-2 border-white' : ''}`}>
                                    <h4 className='text-bold text-white text-center'>
                                        {item.title.length > 20 ?
                                            `${item.title.slice(0, 20)}...` :
                                            item.title}
                                    </h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBanner