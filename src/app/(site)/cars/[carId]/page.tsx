'use client'
import TrackCoponent from "@/components/Track";
import Spa from "@/SVG/Spa";
import { useEffect, useState } from "react";

const carLapsSelectPage = ({ params }: { params: { carId: string } }) => {
    const [waitLoad, setWaitLoad] = useState(true);
    const [bgImage, setBgImage] = useState("");

    useEffect(() => {
        const id = params.carId;
        if (parseInt(id) === 1) {
            console.log("ok");
            setBgImage("url('/images/1.png')"); // Correct format
        }
        setTimeout(() => {
            setWaitLoad(false);
        }, 600);
    }, [params.carId]);

    return (
        <div className='h-screen w-screen bg-black'>
            {waitLoad ? (
                null
            ) : (
                <div 
                    id="carBackground" 
                    style={{
                        backgroundImage: bgImage,
                    }}
                >
                    <div id="animationPage">
                      <TrackCoponent name="Spa" track={<Spa />} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default carLapsSelectPage;
