import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './App.css'

import Navigation from "./components/navigation/navigation.component";
import Playlist from "./components/playlist/playlist.component";
//import Controls from "./components/controls/controls.component";
import Switches from "./components/switches/switches.component";

const App = () => {
    /*const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };*/

  return (
    <div className='app'>
        <Navigation />
        <div className='content'>
            <Switches />
            <Playlist headline='currently playing'/>
            <Playlist headline='watch later'/>
            <Playlist headline='music'/>
        </div>


    </div>
  );
}

export default App
