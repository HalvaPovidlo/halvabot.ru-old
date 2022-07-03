import React, { useEffect, useState } from 'react'
import PlayerDetails from '../PlayerDetails/PlayerDetails'
import PlayerControls from '../PlayerControls/PlayerControls'
import { URL } from '../../API/API'
import './Player.css'

const Player = (props) => {
  const [data, setData] = useState({});
  const [songStatus, setSongStatus] = useState();

  useEffect(() => {
    const handleNow = async () => {
      const requestOptions = {
        method: 'GET',
      };

      const nowResponse = await fetch(URL + '/now', requestOptions);
      const nowData = await nowResponse.json();
      
      const songStatusResponse = await fetch(URL + '/songstatus', {method: "GET"})
      const songStatusResponseData = await songStatusResponse.json(); 

      setTimeout(() => {
        setData(nowData);
        setSongStatus(songStatusResponseData)
      }, 1000)
    };

    handleNow();
  }, [data])

  return (
    <div className='player'>
      <audio></audio>
      <PlayerDetails data={data} songStatus={songStatus}> </PlayerDetails>
      <PlayerControls> </PlayerControls>
    </div>
  )
}

export default Player
