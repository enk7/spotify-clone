import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { createContext } from "react";
import { songsData } from "../assets/assets";

// createContext: lets you create a context that components can provide or read.
export const PlayerContext =  createContext();  

const PlayerContextProvider = (props) => {

    const audioRef = useRef(); // Next, go to App.jsx and use useContext hook to access the context.
    const seekBg = useRef();
    const seekBar = useRef();

    // Managing the project state.
    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({ // One object w/ 2 properties.
        currentTime: {
            second: 0,
            minute: 0,
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    }) // Now pass these states using the contextValue.

    const play = () => {
       audioRef.current.play();
       setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    // Async is non-blocking, which means it will send multiple requests to a server. 
    // Sync is blocking — it will only send the server one request at a time and wait for that request to be answered by the server. 
    // Async increases throughput because multiple operations can run at the same time.

    // In playWithId, we'll provide any song ID that song will start playing.
    const playWithId = async(id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const previous = async() => {
        if (track.id > 0) {
            await setTrack(songsData[track.id - 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const next = async() => {
        if (track.id < songsData.length - 1) {
            await setTrack(songsData[track.id + 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const seekSong = async(e) => {
        // console.log(e);
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration)
    }


    // currentTime: left, totalTime: right
    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                // Make the green bar increase as you play the song.
                seekBar.currrent.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%"; // Convert the number into string and percentage.

                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60),
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        }, 1000)
    }, [audioRef])
    

    const contextValue = {
        // We can access the following in any other component.
        audioRef, 
        seekBg,
        seekBar,
        // Now go to the Player component and get the seekbar and seekbg reference variables.
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        // Now create the func above that we can play or pause the song.
        play, pause,
        // Now go to App.jsx and get the track state & use it in the audio tag.
        useEffect,
        playWithId,
        // Now go to SongItem.jsx file and get the playWithId function.
        previous, next,
        // Now go to Player.jsx.
        seekSong
        // Now access this seekSong in Player component.
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;