import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRepeat, faForward, faPodcast } from '@fortawesome/free-solid-svg-icons'
import { handleSkip, handleLoop, handleRadio } from '../API/API'

const PlayerControls = () => {

    return (
        <div className='player-controls'>

            <button className="broadcast-button" onClick={(e) => {
                handleRadio();
            }}>
                <FontAwesomeIcon icon={faPodcast}></FontAwesomeIcon>
            </button>

            <button className="skip-button" onClick={(e) => {
                handleSkip();
            }}>
                <FontAwesomeIcon icon={faForward}></FontAwesomeIcon>
            </button>

            <button className="repeat-button" onClick={(e) => {
                handleLoop();
            }}>
                <FontAwesomeIcon icon={faRepeat}></FontAwesomeIcon>
            </button>
        </div>
    )
}

export default PlayerControls
