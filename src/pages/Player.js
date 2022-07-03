import React from 'react'
import Player from '../components/Player/Player'
import Navbar from '../components/Navbar/Navbar'

const PlayerPage = () => {
  return (
    <>
      <div className='player-page'>
        <Navbar />
        <Player/>
      </div>
    </>
  )
}

export default PlayerPage
