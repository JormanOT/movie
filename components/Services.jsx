import React from 'react'
import ServicesCard from './ServicesCard'

const Services = ({data}) => {

    return (
        <div className='flex flex-col justify-start p-3 w-full mt-4'>
            <h4 className='text-white text-bold leading-10'>Plataformas de Entretenimiento</h4>
            <div className='grid sm:grid-cols-3 gap-3 w-full h-[300px]'>
                {data.map((item,i) => (
                    <ServicesCard key={i} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Services