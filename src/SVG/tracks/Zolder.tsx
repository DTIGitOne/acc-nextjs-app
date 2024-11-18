import { trackProps } from '@/ts/types';
import '../../styles/svg.css';

const Zolder: React.FC<trackProps> = ({ existing }) => {
    return (
        <svg className={existing ? 'drawSvg' : 'drawSvg2'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 380">
            <path d="m446.56,166.61c-10.03-10.87-25.16-28.47-40.65-55.73-1-1.76-3.96-12.97-5.92-20.39-2.44-9.25-3.86-14.57-4.75-16.49l-.08-.18c-.92-2-3.35-7.29-10.23-10.39-3.8-1.71-9.81-2.21-20.12-1.68-17.17.89-23.48,3.81-25,11.57l-.18.91c-.67,3.44-1.5,7.64-2.26,10.31-.73-.05-1.61-.1-2.59-.04-6.34.38-7.16,8.34-8.3,19.35-.21,2.05-.44,4.22-.71,6.48-1.54,12.84-5.96,26.99-27.63,43.38-15.98,12.08-33.36,20.53-46.04,26.7-4.25,2.07-7.92,3.85-11,5.5-3.82,2.05-3.62,5.12-3.3,6.86-4,.95-14.64,1.75-25.86,2.59l-5.33.4c-3.78.29-8.42.64-13.58,1.04l-1.5.12c-24.66,1.89-61.93,4.75-73.58,5.34-.99.05-2.08.09-3.25.13-14,.49-40.06,1.39-43.42,27.42-2.55,19.75-2.39,40.82-1.39,53.96.67,8.86,5.89,15.13,10.9,20.09,5.63,5.58,10,7.63,21.11,11.33.26.09.57.2.96.33,2.93,1.03,8.4,2.95,13.59,2.95,2.49,0,4.69-.44,6.54-1.3,8.05-3.77,12.23-10.92,12.76-21.87.17-3.49-.33-7.16-1.42-15.22l-.03-.22c-.49-3.62-1.1-8.11-1.83-13.92-.22-1.78-.48-3.66-.74-5.61-1.54-11.38-3.45-25.54-.86-32.03.74-1.85,4-3.29,7.76-3.43,14.57-.54,35.36-1.34,57.55-2.21l.04,1.28,2.37-.08-.04-1.3c.78-.03,1.57-.06,2.36-.09l.04,1.31,2.37-.08-.04-1.33c28.04-1.11,57.46-2.3,78.87-3.26,3.69-.17,14.93-.67,15.09-15.33,0-.42,0-.85-.02-1.27-.01-.55-.04-1.57.02-1.74,0,0,.76-.69,4.5-.78,21.89-.49,67.53-5.47,89.5-7.87l.31-.03c6.01-.66,10.35-1.13,11.7-1.24,4.21-.33,6.52-1.58,8.38-2.59,1.18-.64,1.97-1.06,3.15-1.17,2.22-.2,6-.75,10.42-1.4,5.63-.82,12-1.75,16.3-2.1,4.36-.35,7.57-2.35,8.79-5.47.93-2.39,1.04-6.33-3.75-11.52Zm-154.39,29.33c-1.84-.4-4.73-.59-9.49-.28-10.77.7-12.83,2.28-16.45,5.77-1.02.98-2.17,2.1-3.83,3.38-3.59,2.78-11.02,3.47-16.29,3.75-10.48.56-33.47,1.43-57.81,2.35-23.13.88-49.35,1.88-68.34,2.73-12.94.59-20.82,4.01-23.42,10.19-3.3,7.83,1.81,19.15,15.6,34.61,5.15,5.78,11.9,17.1,15.31,23.06.98,7.24,1.42,10.63,1.29,13.42-.41,8.34-3.1,13.24-8.74,15.88-4.02,1.88-11.6-.77-14.84-1.91-.41-.14-.77-.27-1.07-.37-10.09-3.36-13.72-5.04-18.39-9.67-4.1-4.06-8.35-9.09-8.85-15.66-.97-12.79-1.13-33.31,1.36-52.54,2.6-20.14,23.96-20.88,36.72-21.32,1.21-.04,2.33-.08,3.36-.13,11.75-.59,49.08-3.46,73.83-5.36l1.64-.13c5.08-.39,9.64-.74,13.37-1.02l5.33-.4c26.67-2,33.01-2.47,32.65-8.18-.06-.91-.23-1.69-.35-2.27,2.88-1.53,6.34-3.21,10.4-5.19,12.95-6.3,30.67-14.92,47.2-27.41,23.76-17.96,28.64-33.75,30.37-48.13.27-2.3.5-4.51.72-6.59.4-3.84,1.21-11.67,2.13-13.1.54,0,1.06.03,1.59.07,1.61.12,4.94.35,6.22-2.89,1.12-2.83,2.18-8.27,3.12-13.08l.18-.91c.42-2.12.99-5.03,18.5-5.93,3.22-.17,13.01-.67,16.88,1.07,4.49,2.02,6.01,5.33,6.74,6.92l.09.2c.68,1.46,2.71,9.16,4.34,15.34,3.2,12.14,5.25,19.69,6.6,22.07,17.68,31.11,35.68,50.61,41.6,57.02,2.3,2.5,2.49,3.92,2.37,4.22-.1.26-.96.89-2.83,1.04-4.55.37-11.06,1.32-16.81,2.16-4.09.6-7.95,1.16-9.96,1.34-2.62.23-4.42,1.2-5.87,1.98-1.54.83-2.87,1.55-5.6,1.76-1.48.12-5.74.58-12.29,1.3-21.83,2.38-67.26,7.34-88.84,7.82-4.66.11-7.57,1.01-9.41,2.95,0,0,0,0,0,0Zm-1.95,6.81c0,.31.02.63.01.95-.08,7.45-3.69,8.21-8.41,8.42-21.95.99-52.42,2.22-81.16,3.35l-.04-1.18-2.37.08.04,1.2c-23.07.91-44.84,1.74-59.94,2.3-5.09.19-11.81,2.35-13.99,7.82-3.28,8.21-1.31,22.74.42,35.57l.04.33c.24,1.81.48,3.55.69,5.21.33,2.6.63,4.92.91,7.04-3.57-5.91-8.17-13.03-12.04-17.37-15.9-17.83-16.98-26.94-15.08-31.45,2.11-5.01,9.11-7.83,20.79-8.35,18.98-.86,45.19-1.85,68.32-2.73,24.35-.93,47.36-1.8,57.86-2.36,5.67-.3,13.71-1.08,17.97-4.37,1.79-1.38,3.01-2.56,4.08-3.6,3.04-2.94,4.43-4.28,14.56-4.94,3.84-.25,6.22-.15,7.71.04-.42,1.42-.39,2.85-.36,4.05Z"/><polygon points="198.64 226.23 196.28 226.31 196.36 228.68 198.73 228.61 198.65 226.23 201.02 226.15 200.94 223.78 198.57 223.86 198.64 226.23"/>
        </svg>
    );
}

export default Zolder;