import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    // Forward & backward buttons
    const navigate = useNavigate() // Use this in the onClick property below.

    return (
        <>
            <div className='w-full flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2'>
                    {/* rounded-2xl: border-radius: 1rem; */}
                    {/* Add an onClick property & call a navigate func that we'll get from navigate hook. */}
                    <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
                    <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
                </div>

                {/* Buttons on the top right */}
                <div className='flex items-center gap-4'>
                    <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
                    <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-premium'>Install App</p>
                    <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>E</p>
                </div>
            </div>

            <div className='flex items-center gap-2 mt-4'>
                <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
                <p className='bg-black px-4py-1 rounded-2xl cursor-pointer'>Music</p>
                <p className='bg-black px-4py-1 rounded-2xl cursor-pointer'>Podcasts</p>
            </div>
        </>
    )
}

// Now our Navbar has been created!

export default Navbar
