
import PropTypes from 'prop-types'
import Available from './available/Available'
import "./Main.css"
import { useState } from 'react'
import { useEffect } from 'react'
import Selected from './selected/Selected'
import Newslatter from './newslater/Newslatter'
import Footer from './footer/Footer'
import { toast} from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";


const Main = ({currentBalance,setBalance}) => {
  const [display,SetDisplay] = useState(true);
  const handleDisplay = (value) =>{
    SetDisplay(value);
    
  }
  const [selected,setSelect] = useState([]);
  const handleSelectedPlayer = (players) =>{
    // console.log(selected);
    // console.log(selected);;
    // console.log(players);
  
   if ((!selected.includes(players)) && (players.price < currentBalance) && (selected.length < 6) ) {
    
    const addNewPlayer = [...selected,players]
    setSelect(addNewPlayer);
    const remainingBalance = currentBalance - players.price;
    setBalance(remainingBalance) 
    toast.success("successful");
   
    
   }else{
    toast.error("Can't Choose This Player");


   }
  

  }
  const removeFromSelected = (id) => {
    
   const remainingPlayer =  selected.filter(PlayerId => PlayerId.id !== id );
   setSelect(remainingPlayer)
   
    
    

  }


    
  return (
    <main className='w-10/12 mx-auto relative'>
        <div className='flex justify-between items-center py-8'>
            <h2 className='text-3xl font-bold'>{display?"Available Players":`Selected Players (${selected.length}) / 6`}</h2>
            
            <div className='text-2xl'>
                <button onClick={()=>handleDisplay(true)} style={{backgroundColor:display? "red": ""}} className='common-btn px-8 py-1'>Available</button>
                <button  onClick={()=>handleDisplay(false)} style={{backgroundColor:display? "": "red"}} className='common-btn px-8 py-1 ml-4'>Selected({selected.length})</button>
            </div>
        </div>
        <Available display={display} handleSelectedPlayer={handleSelectedPlayer}></Available>
        <Selected display={display} selected={selected} removeFromSelected={removeFromSelected} handleDisplay={handleDisplay}></Selected>
        <div className='w-11/12 z-10 absolute -bottom-24
        '>
        <Newslatter></Newslatter>
       
        
        </div>
        
    
        
       
        
        

       
       
    </main>
  
  )
}

Main.propTypes = {}

export default Main