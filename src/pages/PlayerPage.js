import React from 'react'
import SearchBar from '../components/SearchBar'
import Player from '../components/Player'

const PlayerPage = () => {
  return (
    <>
      <div className='player-page'>
        <SearchBar />
        <Player/>
      </div>

    </>
  )
}

export default PlayerPage
