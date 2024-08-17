import React from 'react'
import Player from './components/Player'
import Sidebar from './components/Sidebar'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'
import { useContext } from 'react'

const App = () => {

  const {audioRef, track} = useContext(PlayerContext)

  return (
    // Using tailwind CSS classes (black background)
    <div className='h-screen bg-black'>

      <div className='h-[90%] flex'>
        {/* Adding a Sidebar component. */}
        <Sidebar />
        <Display />
      </div>

      {/* Adding a Player component. */}
      <Player />

      {/* <audio> tag: used to embed sound content in a document, such as music or other audio streams. */}
      <audio ref={audioRef} src={track.file} preload='audo'></audio> 
      {/* Next, create a new context file (PlayerContext.jsx). 
      After that, using the reference above, now we can pause, play, or change the track of the audio file. 
      Then, after getting a song file, go to Player.jsx. */}

    </div>
  )
}

export default App
