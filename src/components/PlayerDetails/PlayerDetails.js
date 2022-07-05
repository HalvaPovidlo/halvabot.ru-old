import React from 'react'
import ScrollBar from '../ScrollBar/ScrollBar'
import "./PlayerDetails.css"

const PlayerDetails = (props) => {
    return (
        <div className='details'>
            <div className='details-img'>
                <img src={props.data?.artwork_url || "https://sun9-west.userapi.com/sun9-9/s/v1/ig2/XRPpJchLDoXOin3XrCU_z8SN62mTu271VvgPdHTmsnS16BDBJK9TXzTqCHLaOqHIlNBRg9SYUWdI74imFV5kul_m.jpg?size=1920x1080&quality=96&type=album"} alt='' />
            </div>
            <ScrollBar songStatus={props.songStatus}></ScrollBar>
            <h3 className='details-title'>
                {props.data?.title || "Ботик спит :("}
            </h3>
            <h4 className='details-artist'>
                {props.data?.artist_name}
            </h4>
        </div>
    )
}

export default PlayerDetails
