"use client"
import { useState } from 'react';
import '../styles/background.css';
import '../styles/buttons.css';
import { useRouter } from 'next/navigation';
import { carInfo } from '@/ts/interface';

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
      </div>
      <video className='videoTag' autoPlay loop muted>
         <source src={videoSrc} type='video/mp4' />
      </video>
    </div>
  );
}

export default CarsPageComponent;