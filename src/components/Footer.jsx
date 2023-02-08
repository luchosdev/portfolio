import React from 'react';
import { MdCopyright } from 'react-icons/md';
import ReactLogo from '../assets/icons/react-large.png';
import ViteLogo from '../assets/icons/vitejs.svg';
import TailwindLogo from '../assets/icons/tailwind-css-large.png';

function Footer() {
  return (
    <footer className="flex justify-center">
      <div className="mt-3 flex w-screen flex-col items-center bg-black_1 p-3 xs2:text-lg md:text-xl lg:text-2xl">
        <p>Luis Sequera - FrontEnd Developer</p>
        <div className="flex flex-col items-center sm2:flex-row sm2:gap-x-8">
          <div className="flex items-center gap-x-2">
            <p className="xs2:text-lg md:text-xl lg:text-2xl">
              Página web creada con:
            </p>
            <img className="h-4 w-4 md:h-6 md:w-6" src={ReactLogo} />
            <img className="h-4 w-4 md:h-6 md:w-6" src={TailwindLogo} />
            <img className="h-4 w-4 md:h-6 md:w-6" src={ViteLogo} />
          </div>
          <div className="flex items-center">
            <MdCopyright />
            <p className="ml-2 xs2:text-lg md:text-xl lg:text-2xl">
              2022 - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
