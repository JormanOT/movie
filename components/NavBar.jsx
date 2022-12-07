import React from 'react'
import Link from 'next/link'
import { MdOutlineLocalMovies } from 'react-icons/md'

const NavBar = ({ user, signOut }) => {

  return (
    <div className='navbar-container'>
      <Link href='/' className="flex gap-4 items-center font-extrabold text-white">
        <MdOutlineLocalMovies className='text-3xl text-white' />  MOVIES
      </Link>
      <div onClick={signOut} className="flex flex-col justify-center items-center cursor-pointer">
        <img className='rounded-full w-10 h-10' src={user.image} alt="user-image" />
      </div>
    </div>
  )
}

export default NavBar