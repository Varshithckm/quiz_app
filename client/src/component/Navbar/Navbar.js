import React from 'react'

import {Ritlogo,Govtlogo, Kscstlogo} from '../../images/index'

const Navbar = () => {
  return (
    <div className='h-15 z-1 bg-transparent'>
      <nav className="flex items-center justify-between flex-wrap px-4 py-3 w-full">
        <img src={Govtlogo}   className='w-20 h-7' />
        <img src={Kscstlogo}  className='w-20 h-7' />
        <img src={Ritlogo} className='w-20 h-7' />
            </nav>
    </div>
  )
}

export default Navbar
