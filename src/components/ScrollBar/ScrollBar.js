import React from 'react'
import './ScrollBar.css'

const ScrollBar = (props) => {
    let position = props?.songStatus?.position || 0;
    let duration = props?.songStatus?.duration || 0;
    let x = position / duration * 52;

    function formatter(number) {
        number = Math.round(number);
        let seconds = Math.floor(number % 60);
        let minutes = Math.floor(number / 60) % 60;
        let hours = Math.floor(number / 3600);
        let result = '';
        if (seconds < 10) { result = `${minutes}:0${seconds}` }
        else { result = `${minutes}:${seconds}`; }
        if (hours > 0 && hours < 10) { result = `0${hours}:${result}` } else {
            if (hours >= 10) {result = `${hours}:${result}`}
        }
        return result
    }

    return (
        <div className='scrollbar-container'>
            <div className='scrollbar'>
                <div className='scrollbar-left' style={{ width: `${x}vw` }}></div>
            </div>
            <div className='timing'>
                <div className='timing-left'> {formatter(position)} </div>
                <div className='timing-right'> {formatter(duration)} </div>
            </div>
        </div>
    )
}

export default ScrollBar
