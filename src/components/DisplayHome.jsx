import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'

const DisplayHome = () => {
    return (
        <>
          <Navbar />  
          <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'> Featured Charts</h1> 
            {/* A horizontal scroll bar will be shown once you click inspect b/c of overflow-auto.
            Hiding a scroll bar will be done in index.css */}
            <div className='flex overflow-auto'>
                {/* Passing name, desc, id, and image data as props in the AlbumItem component.
                In this album, data is one array. */}
                {albumsData.map((item, index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
            </div>
          </div>
          <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'> Today's biggest hits</h1> 
            <div className='flex overflow-auto'>
                {songsData.map((item, index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
            </div>
          </div>
        </>
    )
}

export default DisplayHome
