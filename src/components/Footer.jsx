import ReactLogo from '../assets/icons/react-large.png';
import ViteLogo from '../assets/icons/vitejs.svg';
import TailwindLogo from '../assets/icons/tailwind-css-large.png';
import { MdCopyright } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="flex justify-center">
            <div className="xs2:text-lg md:text-xl lg:text-2xl w-screen bg-black_1 p-3 mt-3 flex flex-col items-center">
                <p>Luis Sequera - FrontEnd Developer</p>
                <div className="flex flex-col sm2:flex-row sm2:gap-x-8 items-center">
                    <div className="flex gap-x-2 items-center">
                        <p className="xs2:text-lg md:text-xl lg:text-2xl">Página web creada con:</p>
                        <img className="w-4 h-4 md:w-6 md:h-6" src={ReactLogo} />
                        <img className="w-4 h-4 md:w-6 md:h-6" src={TailwindLogo} />
                        <img className="w-4 h-4 md:w-6 md:h-6" src={ViteLogo} />
                    </div>
                    <div className="flex items-center">
                        <MdCopyright />
                        <p className="ml-2 xs2:text-lg md:text-xl lg:text-2xl">2022 - All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
