import React, { useState, useRef } from "react";
//Import styles
import './styles/app.scss'
//Adding components
import Player from './components/Player';
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
//Import util
import data from './data';

function App() {
  //Ref
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage:0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  // e is for abstract the current time
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //Calculate Percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration)*100);

    setSongInfo({...songInfo, 
      currentTime: current, 
      duration: duration, 
      animationPercentage: animation
    });

  };

  const songEndHandler = async () => {
    let currenIndex = songs.findIndex((song) => song.id === currentSong.id);
    await    setCurrentSong(songs[(currenIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  }

  return (
    <div className={`App ${libraryStatus ? 'library-active' : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player 
        audioRef={audioRef}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library 
        audioRef={audioRef} 
        songs={songs} 
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio 
                onEnded={songEndHandler}
                onTimeUpdate={timeUpdateHandler} 
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef} 
                src={currentSong.audio}>
      </audio>
    </div>
  );
}

export default App;
