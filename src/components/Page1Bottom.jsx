import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Page1Bottom = () => {

  useGSAP(function(){
    gsap.to('#banner img',{
      rotate:360,
      duration:3,
      repeat:-1,
      ease:'linear'
    })
  })

  return (
    <div className='absolute bottom-0 left-0 mt-2 p-20 flex items-end justify-between w-full'>
      <div>
        <h2 className='text-[3vw] font-semibold'>BRAND DESIGN | WEBSITE DESIGN</h2>
        <h3 className='text-[3vw] font-serif text-black'><span className='text-white'>Satty</span>WebWarrior</h3>
      </div>
      <div id='banner'>
        <img className='mb-10' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_96,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
        <img src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_96,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" />
      </div>
    </div>
  )
}

export default Page1Bottom