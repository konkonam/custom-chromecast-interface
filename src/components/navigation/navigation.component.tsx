import React, {useState} from 'react'

import './navigation.css'

const Navigation = () => {
    const [isOpen, setOpen] = useState(false)

    const toggleClass = () => {
        setOpen(!isOpen);
    }

    return (
        <div className={'navigation' + (isOpen  ? ' open' : '')}>
            <div className='container-fluid'>
                <button
                    className='navigation-toggle d-block ms-auto'
                    onClick={toggleClass}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <div className='navigation-content'>
                <div className='container-fluid'>
                    Lorem ipsum dolor set amet
                </div>
            </div>
        </div>
    )
}


export default Navigation