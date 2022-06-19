import React, { useEffect, useState } from 'react'
import PlayerControls from './PlayerControls'
import PlayerDetails from './PlayerDetails'
import { URL } from '../API/API'

const Player = (props) => {
  const [data, setData] = useState({});
  //const [radioStatus, setRadioStatus] = useState(false);

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

    /*const getRadioStatus = async () => {
      const requestOptions = {
        method: "GET",
      };

      const response = await fetch(URL + '/radiostatus', requestOptions);
      const data = await response.json();
      console.log(data);
      data === "true" ? setRadioStatus(true) : setRadioStatus(false);
    }*/

    handleNow();
    //getRadioStatus();
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
