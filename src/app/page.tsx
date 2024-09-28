"use client"
import { useState } from 'react';
import '../styles/background.css';
import '../styles/buttons.css';
import { useRouter } from 'next/navigation';

const videoSrc = '/videos/acc intro site.mp4';

const Home = () => {
  const [ navigating, setNavigating ] = useState(false);

  const router = useRouter();

  const navFunc = () => {
    setNavigating(true);
    setTimeout(() => {
      router.push("/cars");
    }, 1000);
  }

  return (
    <div  className='videoBackgroundBox'>
        <div className='videoBackground' style={{animationName: navigating ? "redirectAniBackground" : ""}}>
      <button onClick={navFunc} className="cta">
       <span className="hover-underline-animation" style={{animationName: navigating ? "navigatingButtonFadeOut" : "navigatingButtonFadeIn"}}> Check out details </span>
        <path
         id="Path_10"
         data-name="Path 10"
         d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
         transform="translate(30)"
        ></path>
      </button>
      </div>
      <video className='videoTag' autoPlay loop muted>
         <source src={videoSrc} type='video/mp4' />
      </video>
    </div>
  );
}

export default Home;