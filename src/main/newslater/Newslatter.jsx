import React from 'react'
import PropTypes from 'prop-types'
import "./Newslatter.css"
import subscribebg from "../../assets/images/bg-shadow.png"


const Newslatter = props => {
  return (
    <div  className='w-8/12 mx-auto border-x-2 border-y-2 border-slate-200 h-[300px]  z-10'>
      <div style={{ backgroundColor:"#f5f5f5c5",
      backgroundImage: `url(${subscribebg})`,
    }} className='m-[30px]'>
      
        <div  className=' w-11/12 h-[250px] mx-auto my-[25px] '>
        <div className='text-center py-12' >
        <h2 className='text-4xl'>Subscribe to our Newsletter</h2>
        <p className='py-2'>Get the latest updates and news right in your inbox!</p>
        <div>
            <input className='px-2 py-2 mr-2 rounded-md' type="text" name="" id="" placeholder='Enter Your Email' /> <button className='subscribe-btn px-4 py-1 text-xl rounded-md'>Subscribe</button>
        </div>
        </div>

        </div>
    </div>
    </div>
  )
}

Newslatter.propTypes = {}

export default Newslatter