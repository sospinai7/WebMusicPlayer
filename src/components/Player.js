import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiFillBackward, AiFillForward } from 'react-icons/ai';


const Player = () => {
    return(
        <div className="player">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="play-control">
                <AiFillBackward size="32px"/>
                <BsFillPlayFill size="32px"/>
                <AiFillForward size="32px"/>
            </div>
        </div>
    );
};

export default Player;