import React, { useState } from 'react'

import './switches.css'

const Switch = () => {
    const [isActive, setActive] = useState(false)

    const toggleClass = () => {
        setActive(!isActive);
    }

    return (
        <button
            className={'switch' + (isActive  ? ' active' : '')}
            onClick={toggleClass}
        >
            <div className='switch-icon'>
                <i className="bi bi-apple"></i>
            </div>
            <span className='switch-description'>
                All
            </span>
        </button>
    )
}

const Switches = () => {
    return (
        <div className='switches'>
            <Switch />
            <Switch />
            <Switch />
            <Switch />
        </div>
    )
}

export default Switches