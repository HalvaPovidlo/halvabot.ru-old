import React, { useEffect, useState } from 'react'
import PlayerDetails from '../PlayerDetails/PlayerDetails'
import PlayerControls from '../PlayerControls/PlayerControls'
import { URL } from '../../API/API'
import './Player.css'

const Player = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const handleStatus = async () => {
      const requestOptions = {
        method: 'GET',
      };

      const statusResponse = await fetch(URL + '/music/status', requestOptions);
      const statusData = await statusResponse.json();
      setTimeout(() => {
        setData(statusData);
      }, 1000)
    }
    handleStatus();
  })

  return (
    <div className='player'>
      <PlayerDetails data={data}> </PlayerDetails>
      <PlayerControls data={{radio: data.radio, loop: data.loop}}> </PlayerControls>
    </div>
  )
}

export default Player
