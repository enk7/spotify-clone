import React, { useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'
import { useEffect } from 'react'


const Display = () => {

    // When we open the album, the corresponding background color will be displayed.
    const displayRef = useRef(); // Next, link this displayRef w/ the div below.
    const location = useLocation();
    const isAlbum = location.pathname.includes("album");
    const albumId = isAlbum ? location.pathname.slice(-1) : ""; // If theAlbum is true, we'll get the Id in a string format. If false, we'll set the Id as empty string.
    const bgColor = albumsData[Number(albumId)].bgColor; // Convert into a number using Number()
    // Setting the background color
    // Whenever the component gets rendered, useEffect func will get executed.
    useEffect(()=>{
        if (isAlbum) {
            displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)` // Template literals: delimited with backtick ( ` ) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.
        }
        else {
            displayRef.current.style.background = `#121212`
        }
    })

    return (
        <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
            <Routes>
                {/* Path: homepage & Element: DisplayHome component. 
                So whenever we open this route(/), it will show DisplayHome component. */}
                <Route path='/' element={<DisplayHome/>} />
                <Route path='/album/:id' element={<DisplayAlbum/>} />
            </Routes>
        </div>
    )
}

export default Display

