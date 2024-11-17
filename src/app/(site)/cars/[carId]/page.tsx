'use client'
import TrackCoponent from "@/components/Track";
import Spa from "@/SVG/tracks/Spa";
import { useEffect, useState } from "react";
import { cars, laps } from "../../../../../public/data/cars";
import Barcelona from "@/SVG/tracks/Barcelona";

// Car laps page mapped out as a component
const carLapsSelectPage = ({ params }: { params: { carId: string } }) => {
    const [waitLoad, setWaitLoad] = useState(true); // initial page load animation wait
    const [bgImage, setBgImage] = useState(""); // background image
    const [carName, setCarName] = useState("");

    const existingLap = (name: string) => {
        laps.find((item) => {
            if (item.track === name) {
                return true;
            } else {
                return false;
            }
        })
    }

    // find background image for specific car and set it
    useEffect(() => {
        const id = params.carId;
        if (parseInt(id) === 1) {
            setBgImage("url('/images/1.png')");
            cars.find((item) => {
                if (item.id === parseInt(id)) {
                    setCarName(item.name)
                }
            }) 
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
                      <h1 id="headingCarName">{carName}</h1>
                      <TrackCoponent name="Spa" track={<Spa existing={() => existingLap("Spa")}/>} />
                      <TrackCoponent name="Barcelona" track={<Barcelona existing={() => existingLap("Barcelona")}/>} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default carLapsSelectPage;
