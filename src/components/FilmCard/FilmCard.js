import React from 'react'
import './FilmCard.css'

const FilmCard = (props) => {

    const style = {
        height: props.style.height,
        width: props.style.width,
        backgroundImage: `url(${props.style.url})`
    };

    console.log(style);

    return (
        <div className='FilmCard-container'>
            <div className='FilmCard' style={style}>

            </div>
        </div>
    )
}

export default FilmCard