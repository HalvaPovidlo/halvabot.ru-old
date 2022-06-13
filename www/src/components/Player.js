import React from 'react'
import PlayerControls from './PlayerControls'
import PlayerDetails from './PlayerDetails'

const player = (props) => {
  return (
    <div className='player'>
      <audio></audio>
      <PlayerDetails song={props.song}> </PlayerDetails>
      <PlayerControls> </PlayerControls>
    </div>
  )
}

export default player
