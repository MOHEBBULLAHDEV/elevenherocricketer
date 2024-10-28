import React from 'react'
import PropTypes from 'prop-types'
import footerlogo from "../../assets/images/logo.png"

const Footer = props => {
  return (
    <div className='w-full h-[600px] bg-black  my-4'>
        <img className='mx-auto py-24' src={footerlogo} alt="" />
        <div className=' flex justify-evenly text-white'>
            <div>
                <h2 className='text-2xl py-2 font-bold'>About Us</h2>
                <p>We are a passionate 
                 team <br /> dedicated to providing 
                 the <br />  best services to our customers.</p>

            </div>
            <div className='text-center' >
            <h2>Quick Links</h2>
            <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>

            </div>
            <div>
            <h2 className='text-2xl font-bold'>Subscribe</h2>
            <p className='py-1'>Subscribe to our newsletter for the latest updates.</p>
            <div className='flex'>
            <input className='px-2 py-2 mr-2 rounded-md' type="text" name="" id="" placeholder='Enter Your Email' /> <button className='subscribe-btn px-4 py-1 text-xl rounded-md'>Subscribe</button>
        </div>

            </div>

        </div>
        
    </div>
  )
}

Footer.propTypes = {}

export default Footer