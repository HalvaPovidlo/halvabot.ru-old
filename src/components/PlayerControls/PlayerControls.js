import React from 'react'
import { handleSkip, handleLoop, handleRadio } from '../../API/API';
import { useState } from 'react'
import './PlayerControls.css'
import skip from '../../assets/skip.svg'
import radio from '../../assets/radio.svg'
import repeat from '../../assets/repeat.svg'

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
                <img src={radio} alt='radio'></img> 

            </button>

            <button className="skip-button button" onClick={(e) => {
                handleSkip();
            }}>
                <img src={skip} alt='skip'></img> 

            </button>

            <button
                className="repeat-button button"
                style={{ color: isLoopActive ? '#fa586a' : '' }}
                onClick={(e) => {
                    handleLoop();
                    handleLoopClick();
                }}>
                <img src={repeat} alt='repeat'></img> 
            </button>
        </div>
    )
}

export default PlayerControls
