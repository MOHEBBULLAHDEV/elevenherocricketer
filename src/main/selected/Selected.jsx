
import { list } from 'postcss'
import PropTypes from 'prop-types'
import deleteIcon from "../../assets/images/icons8-trash-50.png"

const Selected = ({display,handleDisplay,selected,removeFromSelected}) => {
  console.log(removeFromSelected);
  
    
  return (
    <div style={{display:display? "": "grid"}} className='hidden pb-96'>
      <div className=''>
      {
        selected.map(list => <div className='flex justify-between border rounded-md p-2 my-4'>
          <div className='flex gap-2'>
          <img className='w-28 h-28' src={list.photo} alt="" />
          <div>
          <h2 className='text-lg'>{list.name}</h2>
          <h2 className='text-lg'>{list.country}</h2>
          <h2 className='text-lg'>{list.role}</h2>
          <h2 className='text-lg'>${list.price}</h2>

          </div>

          </div>
          <button onClick={()=>removeFromSelected(list.id)} className='mr-4'><img src={deleteIcon}  /></button>
          
           
           
           
            </div>)
      }
     

      </div>
      <div className='flex justify-between'>
      <button onClick={()=>handleDisplay(true)} style={{backgroundColor:display? "red": ""}} className='common-btn px-8 py-1'>Add More Players</button>
      <button></button>

      </div>
      
      

    </div>
  )
}

Selected.propTypes = {}

export default Selected