
import PropTypes from 'prop-types'
import Navbar from './navbar/navbar'
import Hero from './hero/Hero'
import { useState } from 'react'

const Header = ({currentBalance,addBalance}) => {
    
    

  return (
    <header className='w-10/12 mx-auto'>
        <Navbar currentBalance={currentBalance}></Navbar>
        <Hero addBalance={addBalance}></Hero>
    </header>
    
    
  )
}

Header.propTypes = {}

export default Header