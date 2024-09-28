"use client"
import ACClogo from '@/SVG/ACClogo';
import '../styles/background.css';
import '../styles/buttons.css';
import { accWebsite } from '@/utils/constants';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setNavigating } from '@/redux/slices/navigatingSlice';

const HeaderMenu = () => {
    const dispatch = useDispatch();

    const navigating = useSelector((state: any) => state.navSlice)

    const router = useRouter();

    const handleInfoNav = () => {
        dispatch(setNavigating(true));
        console.log(navigating);
        setTimeout(() => {
            router.push("/info");
        }, 1000);
    }

    return (
        <div id='headerBox' style={{animationName: navigating ? "fadeIn" : ""}}>
            <div>
             <a className="btn-shine">Main</a>
             <a className="btn-shine">Setup</a>
             <a onClick={handleInfoNav} className="btn-shine">Info</a>
            </div>
            <button>
             <a href={accWebsite} target='_blank' rel='noopener noreferrer'>
                <ACClogo />
             </a>
            </button>
        </div>
    );
}

export default HeaderMenu;