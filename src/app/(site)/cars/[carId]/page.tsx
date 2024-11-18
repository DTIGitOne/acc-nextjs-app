'use client'
import TrackCoponent from "@/components/Track";
import Spa from "@/SVG/tracks/Spa";
import { useEffect, useState } from "react";
import { cars, laps } from "../../../../../public/data/cars";
import Barcelona from "@/SVG/tracks/Barcelona";
import Bathurst from "@/SVG/tracks/Bathurst";
import BrandsHatch from "@/SVG/tracks/BrandsHatch";
import Hungaroring from "@/SVG/tracks/Hungaroring";
import Imola from "@/SVG/tracks/Imola";
import Kyalami from "@/SVG/tracks/Kyalami";
import LagunaSeca from "@/SVG/tracks/LagunaSeca";
import Misano from "@/SVG/tracks/Misano";
import Monza from "@/SVG/tracks/Monza";
import Nurburgring from "@/SVG/tracks/Nurburgring";
import PaulRicard from "@/SVG/tracks/PaulRicard";
import Silverstone from "@/SVG/tracks/Silverstone";
import Suzuka from "@/SVG/tracks/Suzuka";
import Valencia from "@/SVG/tracks/Valencia";
import Zandvoort from "@/SVG/tracks/Zandvoort";
import Zolder from "@/SVG/tracks/Zolder";

// Car laps page mapped out as a component
const carLapsSelectPage = ({ params }: { params: { carId: string } }) => {
    const [waitLoad, setWaitLoad] = useState(true); // initial page load animation wait
    const [bgImage, setBgImage] = useState(""); // background image
    const [carName, setCarName] = useState("");

    const existingLap = (name: string) => {
        return laps.some((item) => item.track === name);
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
                           <div id="trackLayout">
                           <TrackCoponent name="Spa" track={<Spa existing={existingLap("Spa")}/>} />
                           <TrackCoponent name="Barcelona" track={<Barcelona existing={existingLap("Barcelona")}/>} />
                           <TrackCoponent name="Bathurst" track={<Bathurst existing={existingLap("Bathurst")}/>} />
                           <TrackCoponent name="Brands Hatch" track={<BrandsHatch existing={existingLap("BrandsHatch")}/>} />
                           <TrackCoponent name="Hungaroring" track={<Hungaroring existing={existingLap("Hungaroring")}/>} />
                           <TrackCoponent name="Imola" track={<Imola existing={existingLap("Imola")}/>} />
                           <TrackCoponent name="Kyalami" track={<Kyalami existing={existingLap("Kyalami")}/>} />
                           <TrackCoponent name="Laguna Seca" track={<LagunaSeca existing={existingLap("LagunaSeca")}/>} />
                           <TrackCoponent name="Misano" track={<Misano existing={existingLap("Misano")}/>} />
                           <TrackCoponent name="Monza" track={<Monza existing={existingLap("Monza")}/>} />
                           <TrackCoponent name="Nurburgring" track={<Nurburgring existing={existingLap("Nurburgring")}/>} />
                           <TrackCoponent name="Paul Ricard" track={<PaulRicard existing={existingLap("PaulRicard")}/>} />
                           <TrackCoponent name="Silverstone" track={<Silverstone existing={existingLap("Silverstone")}/>} />
                           <TrackCoponent name="Suzuka" track={<Suzuka existing={existingLap("Suzuka")}/>} />
                           <TrackCoponent name="Valencia" track={<Valencia existing={existingLap("Valencia")}/>} />
                           <TrackCoponent name="Zandvoort" track={<Zandvoort existing={existingLap("Zandvoort")}/>} />
                           <TrackCoponent name="Zolder" track={<Zolder existing={existingLap("Zolder")}/>} />
                           </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default carLapsSelectPage;
