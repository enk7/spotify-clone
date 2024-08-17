import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({name, image, desc, id}) => {
    
    const {playWithId} = useContext(PlayerContext) // Use this w/ in the onClick property below.

    return (
        // Inside 'Today's biggest hits', just by clicking a specific song, the song will be played.
        // Go to DisplayAlbum.jsx to let this work inside each album.
        <div onClick={() => playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
            <img className='rounded' src={image} alt="" />
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className='text-slate-200 text-sm'>{desc}</p>
        </div>
    )
}

// UI for this component is complete. Use this to map the song data in DisplayHome.jsx.

export default SongItem
