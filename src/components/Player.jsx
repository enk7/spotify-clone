import React, { useContext } from 'react'
import { assets } from '../assets/assets'  // import an obejct songsData from the assets.js file
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

    const {track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong} = useContext(PlayerContext); // next, link this reference variables below 

    return (
        <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>

            <div className='hidden lg:flex items-center gap-4'>
                <img className='w-12' src={track.image} alt="" />
                <div>
                    {/* Get the name & descript of the first song -> replace songsData[0] w/ track. */}
                    <p>{track.name}</p>
                    {/* Reduce the length of the description by using .slice method. */}
                    <p>{track.desc.slice(0, 12)}</p>
                </div>
            </div>

            <div className='flex flex-col items-center gap-1 m-auto'>
                <div className='flex gap-4'>
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                    <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                    {playStatus // Use the ternary operator to display the pause icon if true & the play icon if false.
                    ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
                    : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                    }
                    <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
                </div>
                <div className='flex items-center gap-5'>
                    {/* Any random time -> replace it w/ real time */}
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        {/* The <hr> tag defines a thematic break in an HTML page (e.g. a shift of topic).
                        Here, set a green bar indicating where we're at in the current song (width=0 for now). 
                        Later, create this logic when building the context. */}
                        <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                    </div>
                    {/* Any random time -> replace it w/ real time  */}
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
            </div>

            {/* Icons on the bottom right. */}
            <div className='hidden lg:flex items-center gap-2 opacity-75'>
                <img className='w-4' src={assets.plays_icon} alt="" />
                <img className='w-4' src={assets.mic_icon} alt="" />
                <img className='w-4' src={assets.queue_icon} alt="" />
                <img className='w-4' src={assets.speaker_icon} alt="" />
                <img className='w-4' src={assets.volume_icon} alt="" />
                <div className='w-20 bg-slate-50 h-1 rounded'>

                </div>
                <img className='w-4' src={assets.mini_player_icon} alt="" />
                <img className='w-4' src={assets.zoom_icon} alt="" />
            </div>

        </div>
    )
}

{/* Completed the UI for the Player is done. 
Now, create a new component: display. */}

export default Player
