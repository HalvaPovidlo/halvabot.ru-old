import React from 'react'
import Player from '../../components/Player/Player'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './PlayerPage.css'

const PlayerPage = () => {
  return (
    <div className='player-page'>
      <Navbar />
      <Player />
    </div>
  )
}

export default PlayerPage
