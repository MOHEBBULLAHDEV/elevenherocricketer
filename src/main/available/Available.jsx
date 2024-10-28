import { useState } from 'react'
import { useEffect } from 'react'

import "./Available.css"
import PropTypes from 'prop-types'
import Players from "./players/Players"

const Available = ({display,handleSelectedPlayer}) => {
  console.log(display);
  const [players,setPlayers] = useState([]);
  useEffect(()=>{
    fetch('players.json')
    .then(res => res.json())
    .then(data=> setPlayers(data))

  },[])
  return (
    <div style={{display:display? "grid": ""}} className='hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-96'>
       {
      players.map(players => <Players players = {players} handleSelectedPlayer={handleSelectedPlayer} ></Players>)
    }
    </div>
   
  )
}

Available.propTypes = {}

export default Available