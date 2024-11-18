import { trackProps } from '@/ts/types';
import '../../styles/svg.css';

const Suzuka: React.FC<trackProps> = ({ existing }) => {
    return (
        <svg className={existing ? 'drawSvg' : 'drawSvg2'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 380">
            <path d="m486.84,38.73c-6.77-7.79-11.67-7.83-16-7.87h-.93c-.13-.01-.26-.01-.39-.01-15.27,0-47.7,16.21-65.76,25.93-5.65,3.04-11.01,6.68-15.94,10.81l-98.54,82.71-19.08-6.19c-3.3-1.07-6.91.48-8.41,3.61l-14.68,30.68c-1.41,2.95-1.54,6.39-.34,9.43,2.72,6.92,11.72,30.17,13.48,39.01,3.18,15.89,1.67,38.01-23.54,53.15-8.54,5.13-14.45,6.63-23.11.64-.2-.14-.41-.26-.67-.4-2.72-1.59-4.59-4.66-6.57-7.9-4.29-7.03-9.63-15.78-25.9-13.71-10.84,1.38-15.42,9.05-19.47,15.82-.56.93-1.11,1.87-1.69,2.78-2.74,4.37-6.92,7.52-11.77,8.88l.94,3.37-1.07-3.33c-.45.12-.91.16-1.36.1-2.45-.3-5.86-1.35-9.47-2.47-8.4-2.59-17.92-5.53-25.82-2.99-6.47,2.08-9.86,8.27-12.58,13.25-1.24,2.27-2.53,4.62-3.63,5.54-.8.66-4.55,1.86-8,2.55-3.53.01-30.86.16-40.55,1.16h0c-7.35.76-15.38,9.65-16.01,15.73-.93,8.91,10.63,22.53,17,26.23,2.62,1.52,9.04,3.94,13.55,3.94.4,0,.78-.02,1.15-.06,20.32-2.23,47.27-6.43,75.8-10.87,5.18-.81,10.4-1.62,15.61-2.42,1.49-.23,2.99-.45,4.48-.67l.14,1.19,3-.34-.15-1.29c.99-.14,1.98-.28,2.97-.43l.16,1.38-2.98.34.37,3.23,3-.34-.37-3.23,2.98-.34-.17-1.46c6.29-.88,12.54-1.72,18.67-2.54,25.85-3.45,50.27-6.7,67.49-12.47,9.54-3.2,20.08-8.41,24.44-29.88.58-2.84.36-8.45-.63-16.69-.04-.37.18-.72.54-.82l6.75-2.03c3.3-.99,5.55-4.1,5.48-7.54-.15-6.6-.85-13.23-2.09-19.72l-.05-.23c-.11-.4-10.54-40.4-10.35-53.67.04-2.87,1.52-9.82,4.05-19.08.6-2.2,1.84-4.13,3.58-5.6l6.43-5.4,46.94,15.23c1.07.35,2.01,1,2.71,1.88l17.4,21.94.27.3c2.71,2.7,8.38,5.17,12.88.91,1.14-1.08,1.98-2.38,2.48-3.87,1-2.94.52-6.26-1.3-8.88-.25-.36-.54-.77-.87-1.23-2.58-3.65-7.38-10.43-12.09-20.85-1.5-3.33-1.71-6.26-2-10.33-.14-2.01-.3-4.3-.66-6.88-.76-5.52,1.15-13.79,3.2-19.69,1.51-4.36,8.31-13.48,18.65-25.01,3.62-4.04,14.1-12,18.99-14.43l7.24-3.88c8.46-3.5,16.29-4.88,23.98-4.21,1.3.11,32.03,2.6,40.68,2.32,6.48-.21,12.87-6.1,17.09-15.77,3.98-9.12,5.66-21,.45-27ZM151.99,328.89c-5.21.81-10.43,1.62-15.62,2.42-14.46,2.25-28.51,4.44-41.48,6.33l17.61-7.4c.76-.2,1.54-.35,2.32-.46l41.34-5.95.3,2.65,2.98-.33.18,1.59c-2.54.37-5.09.75-7.64,1.14Zm32.25-4.53c-7.09.94-14.34,1.92-21.62,2.96l-.17-1.5-2.98.33-.31-2.75,2.97-.43.32,2.84,3-.33-.33-2.94,19.5-2.81c1.68-.24,3.29-.78,4.78-1.6.37-.2.77-.34,1.18-.4l34.1.64c-12.33,2.23-26.16,4.08-40.45,5.98Zm95.63-166.17c-2.84,2.38-4.86,5.54-5.84,9.11-1.92,7.04-4.23,16.36-4.29,20.83-.21,13.98,9.79,52.55,10.54,55.43,1.15,6.06,1.81,12.27,1.95,18.44,0,.31-.2.59-.5.68l-6.75,2.03c-3.62,1.09-5.93,4.61-5.47,8.37.85,7.07,1.12,12.48.72,14.46-3.93,19.31-13.1,22.39-19.81,24.64-3.76,1.26-7.92,2.39-12.38,3.44l-47.53-.9h-.11s-.11.01-.11.01c-.82.11-1.61.36-2.34.76-1.17.65-2.44,1.07-3.76,1.26l-22.4,3.22-.07-.63-3,.33.08.73-44.41,6.39c-.93.13-1.85.32-2.75.56l-28.49,11.95c-8.04,1.12-15.54,2.08-22.28,2.82-2.21.26-7.93-1.52-10.42-2.97-5.45-3.17-14.04-14.74-13.55-19.45.29-2.76,5.87-9.08,9.77-9.49h0c9.8-1.01,39.89-1.12,40.19-1.12h.33s.32-.06.32-.06c2-.38,8.74-1.82,11.48-4.11,2.11-1.77,3.65-4.58,5.28-7.55,2.24-4.09,4.77-8.72,8.58-9.95,5.8-1.87,14.2.73,21.62,3.02,3.91,1.21,7.61,2.35,10.68,2.73,1.36.17,2.73.07,4.05-.29l.18-.05c6.53-1.82,12.15-6.05,15.82-11.9.6-.95,1.18-1.93,1.77-2.91,3.69-6.18,6.88-11.52,14.34-12.47,11.78-1.5,14.99,3.76,19.05,10.41,2.34,3.84,4.77,7.81,8.99,10.29.08.05.17.1.3.17,12.84,8.85,22.54,4.42,30.63-.44,28.71-17.24,30.42-42.43,26.81-60.53-1.83-9.14-10.28-31.16-13.83-40.2-.49-1.24-.44-2.65.14-3.85l14.62-30.65,14.92,4.84-3.08,2.59Zm200.11-95.26c-3.02,6.92-7.3,11.46-10.9,11.57-8.26.26-39.57-2.28-39.86-2.3-8.87-.78-17.83.79-27.42,4.79l-7.55,4.03c-5.79,2.89-16.78,11.24-21.05,16-11.42,12.74-18.16,21.95-20.05,27.39-1.12,3.24-4.7,14.45-3.52,22.94.32,2.35.47,4.41.61,6.41.3,4.24.58,8.25,2.6,12.71,4.98,11.03,10.04,18.17,12.75,22.01.31.44.59.83.83,1.18.55.8.71,1.78.42,2.63-.14.41-.36.75-.66,1.04-1.01.96-2.52-.23-3.02-.67l-17.24-21.74c-1.56-1.97-3.65-3.42-6.04-4.19l-42.77-13.88,95.19-79.9c4.56-3.83,9.53-7.2,14.76-10.01,29.99-16.13,52.86-25.25,62.71-25.09h1c3.66.05,6.08.07,10.78,5.47,2.56,2.95,1.85,11.75-1.58,19.61Z"></path>
        </svg>
    );
}

export default Suzuka;