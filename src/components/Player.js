import React, { useEffect } from 'react';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { AiFillBackward, AiFillForward } from 'react-icons/ai';
import Song from './Song';
import { playAudio } from '../util';


const Player = ({audioRef, currentSong, isPlaying, setIsPlaying, setSongInfo, songInfo, songs, setCurrentSong, setSongs}) => {
    //Use effect
    useEffect(() => {
        const newSongs = songs.map((song) => {
            if(song.id === currentSong.id){
                return{
                    ...song,
                    active:true,
                };
            } else {
                return{
                    ...song,
                    active:false,
                };
            }
        });
        setSongs(newSongs);
    }, [currentSong]);
    //Event Handlres
    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    const getTime = (time) => {
        return(
            (Math.floor(time/60)) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        );
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value; 
        setSongInfo({...songInfo, currentTime: e.target.value});
    }

    const skipTrackHandler = (direction) => {
        let currenIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(direction === 'skip-forward') {
            setCurrentSong(songs[(currenIndex + 1) % songs.length]);
        }
        if(direction === 'skip-back'){
            if((currenIndex - 1) % songs.length === -1){
                setCurrentSong(songs[songs.length - 1]);
                playAudio(isPlaying, audioRef);
                return;
            }
            setCurrentSong(songs[(currenIndex - 1) % songs.length]);
        }
        playAudio(isPlaying, audioRef);
    }

    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                    min={0} 
                    max={songInfo.duration || 0} 
                    value={songInfo.currentTime} 
                    onChange={dragHandler}
                    type="range" 
                />
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play-control">
                <AiFillBackward onClick={() => skipTrackHandler('skip-back')} size="32px"/>

                {isPlaying ? <BsFillPauseFill 
                                size="32px" 
                                onClick={playSongHandler} 
                                className="play"/> : 
                             <BsFillPlayFill 
                                size="32px" 
                                onClick={playSongHandler} 
                                className="play"
                             />
                }

                <AiFillForward onClick={() => skipTrackHandler('skip-forward')} size="32px"/>
            </div>          
        </div>
    );
};

export default Player;