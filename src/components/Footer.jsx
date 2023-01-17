import ReactLogo from '../assets/icons/react-large.png';
import ViteLogo from '../assets/icons/vitejs.svg';
import TailwindLogo from '../assets/icons/tailwind-css-large.png';
import { MdCopyright } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="font-poppins bg-black_1 p-3 mt-3 flex flex-col items-center">
            <p>Luis Sequera - FrontEnd Developer</p>
            <div className="flex gap-x-2 items-center">
                <p>Página web creada con:</p>
                <img className="w-4 h-4" src={ReactLogo} />
                <img className="w-4 h-4" src={TailwindLogo} />
                <img className="w-4 h-4" src={ViteLogo} />
            </div>
            <div className="flex items-center">
                <MdCopyright />
                <p className="ml-2">2022 - All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export { Footer };
