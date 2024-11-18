import { trackProps } from '@/ts/types';
import '../../styles/svg.css';

const Monza: React.FC<trackProps> = ({ existing }) => {
    return (
        <svg className={existing ? 'drawSvg' : 'drawSvg2'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 380">
            <path d="m483.56,246.74c-3.67-8.15-8.56-11.48-16.89-11.48-3.1,0-67.2.15-185.37.44l-6.31.02-.35.02c-.33.01-.81-.07-.89-.22-1.11-2.05-4.33-7.17-10.31-10.43-4.62-2.51-12.31-4.59-22.78-.2-1.25.53-3.13,1.32-7.78-3.49-10.59-10.97-59.67-59.15-85.02-81.5-5.47-4.82-20.95-28.68-30.2-42.94l-.13-.19c-3.04-4.69-5.44-8.39-6.83-10.41-.52-.75-.96-1.5-1.42-2.27-3.73-6.3-7.46-8.54-20.87-6.04-8.02,1.49-14.39,2.82-20.55,4.1-5.8,1.21-11.28,2.36-17.41,3.47-7.63,1.39-12.63,4.62-14.84,9.6-3.4,7.65,1.21,16.53,3.33,19.96,7.56,14.52,9.57,22.35,11.05,28.11.5,1.96.94,3.65,1.51,5.35.49,1.46.91,2.78,1.29,3.97,1.39,4.36,2.31,7.25,4.5,9.62,2.1,2.26,4.9,2.11,6.43,2.03.05,0,.1,0,.16,0,.61,5.48,1.88,20.78,3.12,35.62l.05.55c1.1,13.21,2.14,25.68,2.6,29.86,4,36.19,27.58,65.82,54.86,68.92,6.73.76,13.77,1.15,20.95,1.15,16.26,0,31.92-2.06,39.89-5.25,2.41-.96,4.59-2.11,6.53-3.14,2.34-1.24,5.27-2.78,6.28-2.48q1.1.32,1.13,1.25c.03.86.07,2.29,1.3,3.52,1.63,1.64,2.65,1.78,5.01,1.74.38,0,.85-.01,1.43-.01,14.7,0,88.2-.28,141.86-.49h.15c14.27-.06,28.16-.11,39.41-.15v1.88h2.62v2.63h-2.62v2.63h2.63v-2.63h2.62v-2.63h-2.62v-1.89c.89,0,1.77,0,2.62,0v1.9h2.63v-1.91c9.25-.03,15.61-.06,17.12-.06,11.16,0,30.54-2.78,48.46-10.63,11.27-4.93,18.91-11.92,22.1-20.21,2.26-5.87,2.11-11.98-.44-17.64Zm-50.72,39.79c-6.63-.82-30.24-3.56-33.27-3.91l-.1-.13-73.77.64-32.62,5.9c-39.36.15-76.13.28-86.06.28-.44,0-.82,0-1.17,0-.4-3.14-2.37-5.24-5.85-6.24-3.59-1.04-7.13.83-11.24,3-1.87.99-3.8,2.01-5.89,2.84-9.56,3.82-34.31,6.31-57.62,3.66-24.27-2.76-45.33-29.86-48.99-63.04-.46-4.15-1.51-16.82-2.63-30.28-1.28-15.32-2.6-31.16-3.19-36.27-.29-2.47-1.59-5.41-6.15-5.41-.36,0-.69.02-.94.03-.25.01-.97.06-1.24,0-1.14-1.29-1.84-3.47-2.97-7.03-.39-1.22-.82-2.57-1.33-4.07-.5-1.47-.91-3.06-1.38-4.91-1.55-6.05-3.68-14.33-11.62-29.57-.02-.04-.09-.16-.2-.35-2.54-4.1-4.64-9.87-2.91-13.76,1.26-2.85,4.61-4.78,9.95-5.75,6.18-1.12,11.72-2.28,17.58-3.5,6.13-1.28,12.47-2.6,20.41-4.08,11-2.04,11.8-.7,13.94,2.9.47.79,1,1.69,1.66,2.64,1.34,1.95,3.74,5.64,6.77,10.31l.09.14c12.77,19.67,25.7,39.3,31.38,44.31,25.22,22.23,74.08,70.2,84.63,81.13,5.47,5.66,10,7.16,15.14,5.01,15.52-6.51,22.8,4.21,24.66,7.65,1.66,3.07,4.99,3.9,7.29,3.69,7.69-.02,186.35-.45,191.48-.45,5.62,0,8.25,1.84,10.83,7.55,1.81,4.01,1.91,8.35.3,12.52-2.54,6.6-8.96,12.31-18.56,16.51-8.87,3.89-18.1,6.45-26.39,8.02Zm-41.78.13v1.99c-11.67.04-26.65.1-42.06.16h-.15c-11.53.05-23.97.09-36.55.14l13.57-2.42,73.43-.64c6.26.73,14,1.63,20.57,2.4-2.36.19-4.52.27-6.42.27-1.65,0-9.08.03-19.75.06v-1.98h-2.63Z"/>
        </svg>
    );
}

export default Monza;