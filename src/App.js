import React, { useState } from "react";
//Import styles
import './styles/app.scss'
//Adding components
import Player from './components/Player';
import Song from "./components/Song";
//Import util
import data from './util';

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player/>
      <h1>Esto va para afuera.</h1>
    </div>
  );
}

export default App;
