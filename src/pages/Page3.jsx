import React from 'react'

const Page3 = () => {
  return (
    <div className='bg-white relative h-screen flex items-center justify-center'>
        <img className='absolute z-20' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_875,h_503,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png" alt="" />
        <video autoPlay loop muted src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4" className='object-cover z-10 relative h-[65vh] w-[90vh]'>
        </video>
    </div>
  )
}

export default Page3