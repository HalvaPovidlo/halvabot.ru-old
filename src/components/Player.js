import React, { useEffect, useState } from 'react'
import PlayerControls from './PlayerControls'
import PlayerDetails from './PlayerDetails'

const Player = (props) => {
  const[data, setData] = useState({});

  useEffect(() => {
    const URL = "http://51.250.81.4:9090/api/v1/music";
    const handleNow = async () => {
      const requestOptions = {
        method: 'GET',
      };
      const response = await fetch(URL + '/now', requestOptions);
      const data = await response.json();
      return data;
    };

    handleNow()
      .then((data) => {
        setData(data);
      });

  }, [])

  return (
    <div className='player'>
      <audio></audio>
      <PlayerDetails data={data}> </PlayerDetails>
      <PlayerControls> </PlayerControls>
    </div>
  )
}

export default Player
