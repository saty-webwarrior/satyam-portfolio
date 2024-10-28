import React from 'react'

const Page5 = () => {
  return (
    <div className='h-screen p-5 relative  bg-white'>
        <div className='h-full w-full overflow-hidden bg-black rounded-[50px]'>
        <video autoPlay muted loop className='object-cover h-full w-full' src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/480p/mp4/file.mp4"></video>
        <h1 className='text-[12vw] absolute top-40 font-medium font-serif left-20'>ABOUT</h1>
        </div>
    </div>

  )
}

export default Page5