"use client"
import ACClogo from '@/SVG/ACClogo';
import '../../styles/background.css';
import '../../styles/buttons.css';
import { accWebsite } from '@/utils/constants';
import { usePathname, useRouter } from 'next/navigation';

// Top nav menu
const HeaderMenu = () => {
    const router = useRouter();

    const pathname = usePathname();

    const handleNavigation = (path: string) => {
        if (path !== pathname) {
                router.push(`/${path}`);
        }
    }

    return (
        <div id='headerBox'>
            <div>
             <a onClick={() => handleNavigation("cars")} className="btn-shine">Main</a>
             <a onClick={() => handleNavigation("setup")} className="btn-shine">Setup</a>
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