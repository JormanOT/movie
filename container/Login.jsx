import React from 'react'
import { BiUser } from 'react-icons/bi'

const Login = ({ login }) => {

    const handleLogin = () => {
        login();
    }
    return (
        <div className='flex justify-start items-center flex-col h-screen'>
            <div className="relative w-full h-full">
                <video
                    src={require('../public/assets/video.mp4')}
                    type='video/mp4'
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className='w-full h-full object-cover'
                />
                <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay'>
                    <div className='shadow-2xl'>
                        <h1 className='text-white flex justify-center items-center font-bold text'>MOVIES</h1>
                    </div>
                    <button
                        onClick={handleLogin}
                        type='button'
                        className='bg-black/25 text-white flex justify-center items-center p-3 rounded cursor-pointer outline-none animate-pulse'
                    >
                        <BiUser className='mr-4' /> Iniciar Sesion
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login