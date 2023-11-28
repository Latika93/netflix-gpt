import React from 'react'
import { LOGO } from '../utils/contants'

const Header = () => {
  return (
    <div className='absolute z-10'>
        <img className='py-8 w-36 bg-gradient-to-b from-black' src={LOGO} />
    </div>
  )
}

export default Header