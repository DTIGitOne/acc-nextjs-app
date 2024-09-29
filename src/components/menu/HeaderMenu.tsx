"use client"
import ACClogo from '@/SVG/ACClogo';
import '../../styles/background.css';
import '../../styles/buttons.css';
import { accWebsite } from '@/utils/constants';
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setNavigating } from '@/redux/slices/navigatingSlice';

const HeaderMenu = () => {
    const dispatch = useDispatch();

    const navigating = useSelector((state: any) => state.navSlice)

    const router = useRouter();

    const pathname = usePathname();

    const handleNavigation = (path: string) => {
        if (path !== pathname) {
            dispatch(setNavigating(true));
            setTimeout(() => {
                router.push(`/${path}`);
            }, 1000);
        }
    }

    return (
        <div id='headerBox' style={{animationName: navigating ? "fadeIn" : ""}}>
            <div>
             <a onClick={() => handleNavigation("cars")} className="btn-shine">Main</a>
             <a onClick={() => handleNavigation("setup")} className="btn-shine">Setup</a>
             <a onClick={() => handleNavigation("info")} className="btn-shine">Info</a>
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