import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div>
      <div className='fixed w-full z-10 py-28 px-20 flex items-center justify-end'>
        <button className='bg-black border-4 text-xl px-8 py-3 rounded-full hover:bg-gray-500 text-white'>Hire Me</button>
        <i className="ri-more-2-fill text-4xl ml-3"></i>
    </div>
    </div>
  )
}

export default Header