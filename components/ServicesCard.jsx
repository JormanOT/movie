import React, { useState } from 'react'
import Link from 'next/link'
import { urlFor } from '../client'

const servicesCard = ({item}) => {
    const [hoverServices, setHoverServices] = useState(false)
    return (
        <Link href={item.link} onMouseEnter={() => setHoverServices(true)} onMouseLeave={() => setHoverServices(false)} className='relative cursor-pointer services-contenedor overflow-hidden'>
            <img className='w-full h-full object-cover rounded-md transition ease-in' src={urlFor(item.image)} alt={item.service} />
            <div className='absolute flex flex-col bottom-0 pb-3 pl-4 text-white services-info'>
                <h1 className={`${hoverServices && 'animate-bounce'}`}>{item.service}</h1>
                {hoverServices && (<p className='leading-5 text-xs'>{item.info}</p>)}
            </div>
        </Link>
    )
}

export default servicesCard