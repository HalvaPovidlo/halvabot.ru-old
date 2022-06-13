import React from 'react'
import SearchBar from '../components/SearchBar'
import Player from '../components/Player'

const PlayerPage = () => {
  return (
    <>
      <div className='player-page'>
        <SearchBar />
        <Player song={{
          artist: 'Radiohead',
          title: 'Boku No Piko opening',
          img_src: 'https://sun9-west.userapi.com/sun9-61/s/v1/if2/sFl90U3sdcM76N0vEbRjjjBDpEGNHT5gtLFr98z-oyCQBUqwO2RRzT3vNRLTgWolmhdEGIlAuWCcqPKm6IC5x-pF.jpg?size=1288x1320&quality=96&type=album'
        }
        } />
      </div>

    </>
  )
}

export default PlayerPage
