import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './App.css'

import Playlist from "./components/playlist/playlist.component";
import Controls from "./components/controls.component.tsx/controls.component";

const App = () => {
    /*const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };*/

  return (
    <div className='app'>
        <Controls />

        <div className='content'>
            <Playlist headline='currently playing'/>
            <Playlist headline='watch later'/>
            <Playlist headline='music'/>
        </div>


    </div>
  );
}

export default App
