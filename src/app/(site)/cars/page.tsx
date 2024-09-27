"use client"
import '../../../styles/background.css';
import '../../../styles/buttons.css';
import { cars } from '../../../../public/data.ts/cars';
import CarsPageComponent from '@/components/carsMap';
import { useEffect, useState } from 'react';

const CarsPage = () => {
    const [waitLoad, setWaitLoad] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setWaitLoad(false);
        }, 600);
    }, []);

  return (
    <div className=' h-screen w-screen bg-black'>
    {waitLoad ? (
        null
    ) : (
        <div>
            {cars.map((data) => (
      <CarsPageComponent 
        key={data.id} 
        id={data.id} 
        name={data.name} 
        t1={data.t1} 
        t2={data.t2} 
        t3={data.t3}
        video={data.video}
      />
    ))}
        </div>
    )}
  </div>

  );
}

export default CarsPage;