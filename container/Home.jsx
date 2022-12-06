import React from 'react'

// Components
import HeaderBanner from '../components/HeaderBanner'
import Movies from '../components/Movies'
import MoviesGroup from '../components/MoviesGroup'
import Services from '../components/Services'




const Home = ({service, movies}) => {

  return (
    <>
      <HeaderBanner data={movies} />

      <h1 className='font-bold text-white text-4xl text-center mt-16'>Peliculas Populares</h1>

      <Movies movieCount={8} data={movies} color='bg-white/40' />

      <MoviesGroup color={{ from: 'from-rose-500', to: 'to-rose-900 ' }} title='Las Mejores Peliculas de Heroes' info='Coleccion de las mejores Peliculas de Marvel y DC' data={movies} filter='Heroes' />

      <h1 className='font-bold text-white text-4xl text-center mt-16'>Peliculas Recomendadas</h1>

      <Movies movieCount={4} data={movies} color='bg-yellow-400/50' />

      <MoviesGroup color={{ from: 'from-blue-500', to: 'to-blue-900 ' }} title='Mejores Peliculas de Accion' info='Coleccion de las mejores de Accion y suspenso' data={movies} filter='Acción' />

      <Services data={service} />
    </>
  )
}

export default Home