import React, { useEffect, useState } from 'react'
import PlayerDetails from '../PlayerDetails/PlayerDetails'
import PlayerControls from '../PlayerControls/PlayerControls'
import { URL } from '../../API/API'
import './Player.css'

const Player = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const handleNow = async () => {
      const requestOptions = {
        method: 'GET',
      };
      const response = await fetch(URL + '/now', requestOptions);
      const data = await response.json();
      setTimeout(() => {
        setData(data);
      }, 1000)
    };

    handleNow();
  }, [data])

  return (
    <div className='player'>
      <audio></audio>
      <PlayerDetails data={data} radioStatus> </PlayerDetails>
      <PlayerControls> </PlayerControls>
    </div>
  )
}

export default Player
