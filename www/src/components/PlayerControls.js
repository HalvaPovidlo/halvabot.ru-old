import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRepeat, faForward, faPodcast } from '@fortawesome/free-solid-svg-icons'

const PlayerControls = () => {

    const handleSkip = async () => {
        const requestOptions = {
            crossDomain: true,
            mode: 'no-cors',
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            },
        };
        const response = await fetch('http://51.250.81.4:9091/api/v1/music/skip', requestOptions);
        const data = await response.json()
        console.log(data)
    }

    const handleLoop = async () => {
        const requestOptions = {
            crossDomain: true,
            mode: 'no-cors',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '{"enable":true}'
        };

        const response = await fetch('http://51.250.81.4:9091/api/v1/music/setloop', requestOptions);
        const loopStatus = await response.json()
        requestOptions.body = { "enable": loopStatus };
        console.log(requestOptions);
    }

    return (
        <div className='player-controls'>

            <button className="broadcast-button">
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
