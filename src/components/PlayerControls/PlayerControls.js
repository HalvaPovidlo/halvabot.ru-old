import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRepeat, faForward, faPodcast } from '@fortawesome/free-solid-svg-icons'
import { handleSkip, handleLoop, handleRadio } from '../../API/API';
import { useState } from 'react'
import './PlayerControls.css'

const PlayerControls = () => {

    const [isRadioActive, setIsRadioActive] = useState(false);
    const [isLoopActive, setIsLoopActive] = useState(false);

    const handleLoopClick = () => {
        setIsLoopActive(!isLoopActive);
    }

    const handleRadioClick = () => {
        setIsRadioActive(!isRadioActive);
    }

    return (
        <div className='player-controls'>

            <button
                className="broadcast-button button"
                style={{ color: isRadioActive ? '#fa586a' : '' }}
                onClick={(e) => {
                    handleRadio();
                    handleRadioClick();
                }}>
                <FontAwesomeIcon icon={faPodcast}></FontAwesomeIcon>
            </button>

            <button className="skip-button button" onClick={(e) => {
                handleSkip();
            }}>
                <FontAwesomeIcon icon={faForward}></FontAwesomeIcon>
            </button>

            <button
                className="repeat-button button"
                style={{ color: isLoopActive ? '#fa586a' : '' }}
                onClick={(e) => {
                    handleLoop();
                    handleLoopClick();
                }}>
                <FontAwesomeIcon icon={faRepeat}></FontAwesomeIcon>
            </button>
        </div>
    )
}

export default PlayerControls
