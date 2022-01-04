import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './App.css'

import Navigation from "./components/navigation.component"

const App = () => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

  return (
    <div className='app'>
        <Navigation />

        <div className='content'>
            <div className='container-fluid'>
                <a className='btn btn-primary'
                   onClick={toggleClass}>toggle</a>
            </div>
        </div>
    </div>
  );
}

export default App
