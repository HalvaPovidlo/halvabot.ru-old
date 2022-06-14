import React from 'react'

const PlayerDetails = (props) => {

    /* props = song.duration to render progressbar properly */

    return (
        <div className='details'>
            <div className='details-img'>
                <img src={props.data.thumbnail_url} alt='' />
            </div>
            {/* music progressbar */}
            <h3 className='details-title'>
                {props.data.title}
            </h3>
            <h4 className='details-artist'>
                {props.data.artist_name}
            </h4>
        </div>
    )
}

export default PlayerDetails
