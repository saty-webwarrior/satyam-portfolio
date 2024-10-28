import React, { useRef, useState } from 'react'
import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page1 = () => {
  const tiltRef = useRef(null)
  const [xVal, setXVal] =useState(0)
  const [yVal, setYVal] = useState(0)

  const mouseMoving =(e)=>{
    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x-tiltRef.current.getBoundingClientRect().width/2)/30)
    setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y-tiltRef.current.getBoundingClientRect().height/2)/30)
    
  }

  useGSAP(function(){
    gsap.to(tiltRef.current,{
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration:2,
      ease: 'elastic.out(1.0.2)'
    })
  },[xVal,yVal])

  return (
    <div onMouseMove={(e)=>{
      mouseMoving(e)
    }
    } className='h-screen overflow-hidden bg-white p-7'>
        <div id='page1-in' className='h-full p-20 w-full object-cover bg-cover shadow-sxl shadow-gray-700 rounded-3xl bg-[url(/src/assets/anime.jpg)]'>
        <img className='h-28 -mt-10 ' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_74,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" />
        <TiltText abc={tiltRef}/>
        <Page1Bottom />
        </div>
    </div>
  )
}

export default Page1