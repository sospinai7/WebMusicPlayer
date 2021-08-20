import React, {useRef, useState} from 'react';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { AiFillBackward, AiFillForward } from 'react-icons/ai';


const Player = ({currentSong, isPlaying, setIsPlaying}) => {
    //Ref
    const audioRef = useRef(null);
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

    // e is for abstract the current time
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration: duration});
    };

    const getTime = (time) => {
        return(
            (Math.floor(time/60)) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        );
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value; 
        setSongInfo({...songInfo, currentTime: e.target.value});
    }

    //State
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });

    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                    min={0} 
                    max={songInfo.duration} 
                    value={songInfo.currentTime} 
                    onChange={dragHandler}
                    type="range" 
                />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <AiFillBackward size="32px"/>
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
                <AiFillForward size="32px"/>
            </div>
            <audio 
                onTimeUpdate={timeUpdateHandler} 
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef} 
                src={currentSong.audio}>
            </audio>
        </div>
    );
};

export default Player;