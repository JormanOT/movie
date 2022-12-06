import React from 'react'
import { AiFillLinkedin, AiFillFacebook, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='text-white text-center flex flex-col justify-center items-center text-bold w-full h[100px] p-10'>
      <p>2022 JormanDev All rigths reserverd</p>
      <div className='flex flex-row justify-center items-center'>
        <AiFillFacebook />
        <AiFillInstagram />
        <AiFillLinkedin />
      </div>
    </div>
  )
}

export default Footer