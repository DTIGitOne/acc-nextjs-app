'use client'
import Reveal from '@/components/animation/Reveal';
import '../../../styles/background.css';
import '../../../styles/buttons.css';
import '../../../styles/elements.css';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { body, github, gmail, linkedin, subject } from '@/utils/constants';

const WheelImage = "/images/wheel image.png";

const SetupPage = () => {
    return (
        <div id="setupBackground">
            <div id='topLayer'>
                <Reveal height='auto' var1={{opacity: 0, x: -75}} var2={{opacity: 1,x: 0}} width='fit-content'>
                <div className=' flex flex-col'>
                  <h1>SETUP</h1>
                  <RevealAnimation height='auto' var1={{opacity: 0, x: -75}} var2={{opacity: 1,x: 0}} var3={{left: 0}} var4={{left: "100%"}} width='fit-content'>
                    <h3>All of my settings and hardware used</h3>
                  </RevealAnimation>
                </div>
                </Reveal>
            </div>
            <div id='secondLayer'>
             <Reveal height='auto' var1={{opacity: 0, x: 0}} var2={{opacity: 1, x: "40%"}} width='100%'>
               <div id='aniBlockElement2'></div>
             </Reveal>
            <div id='imageBox'>
                <img src={WheelImage} alt="" />
            </div>
            </div>
            <div id='thirdLayer'>
                
            </div>
            <div id='fourthLayer'>
            <Reveal height='100%' var1={{opacity: 0, y: 0}} var2={{opacity: 1, y: 75}} width='100%'>
            <button id='setupButton'>
             <span>Socials</span>
             <div className="container">
             <div className=' cursor-pointer' onClick={() => window.location.href = `mailto:${gmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}>
              <svg width="50px" height="50px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#d30c0c" stroke-linejoin="round" stroke-width="12" d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"/></svg>
             </div>
             <a href={github} target='_blank' rel='noopener noreferrer'>
             <svg
               className="icon"
               viewBox="0 0 1024 1024"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               width="50"
               height="50"
              >
              <path
               d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"
               fill="#d30c0c"
              ></path>
             </svg>
             </a>
             <a href={linkedin} target='_blank' rel='noopener noreferrer'>
             <svg fill="#d30c0c" height="46px" width="46px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310">
              <g id="XMLID_801_">
	          <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73C77.16,101.969,74.922,99.73,72.16,99.73z"/>
              <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
	          <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		       c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		       c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		       C310,145.43,300.549,94.761,230.454,94.761z"/>
              </g>
              </svg>
             </a>
            </div>
            </button>
            </Reveal>
            </div>
        </div>
    );
}

export default SetupPage