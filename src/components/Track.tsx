'use client'
import Spa from '@/SVG/Spa';
import '../styles/tracks.css';
import { useEffect, useState } from 'react';
import { trackComp } from '@/ts/interface';

const TrackCoponent = ({track, name} : trackComp) => {
    const [hoverd, setHoverd] = useState(false);

    useEffect(() => {
        console.log(hoverd);
    }, [hoverd]);

    return (
        <div onMouseOver={() => setHoverd(true)} onMouseLeave={() => setHoverd(false)} id="trackBox">
               {track}
               <div id='hoverText' style={{animationName: hoverd ? "showText" : ""}}>
                <div>
                    {name}
                </div>
               </div>
        </div>
    );
}

export default TrackCoponent;