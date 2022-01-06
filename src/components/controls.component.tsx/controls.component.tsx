import React from 'react'

import './controls.css'

const Controls = () => {
    return (
        <div className='controls'>
                <button className='control control-prev'>
                    <i className="bi bi-chevron-double-left"></i>
                </button>
                <button className='control control-play-pause'>
                    <i className="bi bi-play-fill"></i>
                </button>
                <button className='control control-next'>
                    <i className="bi bi-chevron-double-right"></i>
                </button>
        </div>
    )
}

export default Controls