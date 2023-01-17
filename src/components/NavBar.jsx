import { useState, useEffect } from 'react';
import React from 'react';
import CV from '../assets/others/cvLuisSequera.pdf';

//* ICONOS
import { HiMenuAlt3, HiMenu } from 'react-icons/hi';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const NavBar = () => {
    const [active, setActive] = useState(false);
    const [loader, setLoader] = useState(false);
    const [closeModal, setCloseModal] = useState('false');

    const Loader = () => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    };

    return (
        <div>
            <nav
                className={`flex p-2 lg:justify-around lg:shadow-none justify-between items-center fixed hover:bg-white hover:text-black w-screen lg:bg-transparent ${
                    active && 'bg-white'
                } ${active && 'text-black'} transition-all duration-500`}
                style={{ backdropFilter: 'blur(1px)', zIndex: '999' }}
            >
                {/* //* ICONOS DARK MODE */}
                <BsFillSunFill alt="dark-mode" />
                <BsFillMoonStarsFill className="hidden" alt="dark-mode" />

                {/* //* LINKS */}
                <ul
                    className={`flex lg:flex-row items-center p-3 flex-col lg:relative absolute lg:top-auto lg:left-auto lg:right-auto lg:transition-none transition-all duration-300 ease-in ${
                        active ? 'top-[50px]' : 'top-[-490px]'
                    } left-0 right-0 gap-6 lg:bg-transparent bg-white`}
                >
                    <li>
                        <a
                            href="#about"
                            className="cursor-pointer hover:underline text-xl"
                            onClick={() => setActive(false)}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className="cursor-pointer hover:underline text-xl"
                            onClick={() => setActive(false)}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="cursor-pointer hover:underline text-xl"
                            onClick={() => setActive(false)}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="cursor-pointer hover:underline text-xl"
                            onClick={() => setActive(false)}
                        >
                            Contact me
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={Loader}
                            href={CV}
                            target="_blank"
                            className="select-none lg:hidden cursor-pointer text-white hover:shadow-none shadow-lg text-lg active:bg-violet-600 hover:bg-violet-700 hover:shadow-gray-800 bg-violet-600 px-6 py-2 rounded-md"
                            download
                        >
                            {loader ? 'Descargando...' : 'Downdload CV'}
                        </a>
                    </li>
                </ul>

                {/* //* BOTON CV EN DESKTOP */}
                <ul className="items-center hidden lg:flex">
                    <a
                        onClick={Loader}
                        href={CV}
                        className="cursor-pointer text-white hover:shadow-none shadow-lg text-lg active:bg-violet-600 hover:bg-violet-700 hover:shadow-gray-800 transition-all duration-300 bg-violet-600 px-6 py-2 rounded-md"
                        download
                    >
                        {loader ? 'Descargando...' : 'Download CV'}
                    </a>
                </ul>

                {/* //* BOTON MENU */}
                <div className="lg:hidden">
                    {active ? (
                        <HiMenuAlt3
                            className="text-3xl cursor-pointer mr-2"
                            onClick={() => setActive(!active)}
                        />
                    ) : (
                        <HiMenu className="text-3xl cursor-pointer mr-2" onClick={() => setActive(!active)} />
                    )}
                </div>
            </nav>
            {/* //* CUANDO EL USUARIO DA CLICK FUERA DEL MENU, ESTE SE CIERRA  */}
            {/* <div className="absolute top-0 left-0 right-0 bottom-0" onClick={() => setActive(false)}></div> */}{' '}
        </div>
    );
};

export { NavBar };
