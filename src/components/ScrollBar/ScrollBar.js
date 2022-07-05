import React from 'react'
import './ScrollBar.css'

const ScrollBar = (props) => {
    let position = props?.songStatus?.position || 0;
    let duration = props?.songStatus?.duration || 0;
    let x = position / duration * 60;

    function formatter(number){
        number = Math.round(number);
        let minutes = Math.floor(number / 60);
        let seconds = Math.floor(number % 60);
        return seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`
    }

    return (
        <div className='scrollbar-container'>
            <div className='scrollbar'>
                <div className='scrollbar-left' style={{width: `${x}vw`}}></div>
            </div>
            <div className='timing'>
                <div className='timing-left'> {formatter(position)} </div>
                <div className='timing-right'> {formatter(duration)} </div>
            </div>
        </div>
    )
}

export default ScrollBar
