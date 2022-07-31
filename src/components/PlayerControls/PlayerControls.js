import React from 'react'
import { handleLoop, URL } from '../../API/API';
import { useState, useContext } from 'react'
import './PlayerControls.css'
import skip from '../../assets/skip.svg'
import radio from '../../assets/radio.svg'
import repeat from '../../assets/repeat.svg'
import { UserContext } from '../../Context';

const PlayerControls = (props) => {

    const handleRadio = async (radioStatus) => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({enable: radioStatus})
        };
    
        const response = await fetch(URL + '/music/setradio', requestOptions);
    }

    const handleSkip = async () => {
        const requestOptions = {
            method: 'POST',
            headers: new Headers({
                'Authorization': `Bearer ${token}`, 
            }), 
        };
        const response = await fetch(URL + '/music/skip', requestOptions);
        return response;
    }

    const [isRadioActive, setIsRadioActive] = useState(props.data.radio || false);
    const [isLoopActive, setIsLoopActive] = useState(props.data.radio || false);

    const token = useContext(UserContext);

    const handleLoopClick = () => {
        setIsLoopActive(current => !current);
    }

    const handleRadioClick = () => {
        setIsRadioActive(isRadioActive ? false : true, console.log(isRadioActive));
    }

    return (
        <div className='player-controls'>
            <button
                className="broadcast-button button"
                style={{ backgroundColor: isRadioActive ? '#fa586a' : '' }}
                onClick={(e) => {
                    handleRadioClick();
                    handleRadio(isRadioActive);
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
