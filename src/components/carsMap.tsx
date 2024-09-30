"use client"
import { useState } from 'react';
import '../styles/background.css';
import '../styles/buttons.css';
import { useRouter } from 'next/navigation';
import { carInfo } from '@/ts/interface';
import RevealAnimation from './animation/RevealAnimation';

const CarsPageComponent = ({ id, name , t1 , t2 , t3 , video}: carInfo) => {
  const [ navigating, setNavigating ] = useState(false);

  const videoSrc = video;

  const router = useRouter();

  const navFunc = () => {
    setNavigating(true);
    setTimeout(() => {
      router.push(`/cars/${id}`);
    }, 1000);
  }

  return (
    <div className='videoBackgroundBox'>
         <div className='videoBackground' style={{animationName: navigating ? "redirectAniBackground" : ""}}>
         <RevealAnimation dur={0.4} del={0} position={"relative"} height='auto' var1={{opacity: 0, x: -75}} var2={{opacity: 1,x: 0}} var3={{left: 0}} var4={{left: "100%"}} width='fit-content'>
         <button onClick={navFunc} id='carsButton' style={{animationName: navigating ? "navigatingButtonFadeOut" : "navigatingButtonFadeIn"}}>
      <div className="text">
        <span className=' font-light'>{t1}</span>
        <span className=' font-medium'>{t2}</span>
        <span className=' font-light'>{t3}</span>
       </div>
       <div className="clone">
        <span>Laps</span>
        <span className=' font-extralight'>&</span>
        <span>Details</span>
       </div>
      </button>
         </RevealAnimation>
      </div>
      <video className='videoTag' autoPlay loop muted> 
         <source src={videoSrc} type='video/mp4' />
      </video>
    </div>
  );
}

export default CarsPageComponent;