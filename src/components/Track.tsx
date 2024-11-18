'use client'
import '../styles/tracks.css';
import { useEffect, useState } from 'react';
import { trackComp } from '@/ts/interface';

const TrackCoponent = ({track, name} : trackComp) => {
    const [hoverd, setHoverd] = useState(false);

    return (
        <div onMouseOver={() => setHoverd(true)} onMouseLeave={() => setHoverd(false)} id="trackBox">
               {track}
               <div id='hoverText' style={{animationName: hoverd ? "showText" : ""}}>
                <div id='zoomText' style={{animationName: hoverd ? "zoomText" : ""}}>
                    {name}
                </div>
               </div>
        </div>
    );
}

export default TrackCoponent;