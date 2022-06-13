import React from 'react'

const PlayerDetails = (props) => {

    /* props = song.duration to render progressbar properly */

    return (
        <div className='details'>
            <div className='details-img'>
                <img src={props.song.img_src} alt='' />
            </div>
            {/* music progressbar */}
            <h3 className='details-title'>
                {props.song.title}
            </h3>
            <h4 className='details-artist'>
                {props.song.artist}
            </h4>
        </div>
    )
}

export default PlayerDetails
