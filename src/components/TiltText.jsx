import React from 'react'

const TiltText = (props) => {
  return (
    <div id='tiltdiv' ref={props.abc} className='mt-1s0'>
      <h1 className='text-[4.2vw] -ml-10 uppercase leading-[4vw] font-serif'>I am <span className='text-black'>DARK MODE<span>™</span></span></h1>
      <h1 className='text-[4vw] -ml-10 leading-[7vw] font-mono'>Designer</h1>
      <h1 className='text-[4.2vw] -ml-10 uppercase leading-[4vw] font-serif'>to Hire</h1>
    </div>
  )
}

export default TiltText