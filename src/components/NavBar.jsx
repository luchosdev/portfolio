import { useState } from 'react';
import React from 'react';
import CV from '../assets/others/cvLuisSequera.pdf';

//* ICONOS
import { HiMenuAlt3, HiMenu } from 'react-icons/hi';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const NavBar = ({ active, setActive, navbarRef }) => {
    const [loader, setLoader] = useState(false);
    const [icon, setIcon] = useState('menu');
    const setActiveAndIcon = () => {
        setTimeout(() => {
            setActive(!active);
            setIcon(active ? 'menu' : 'close');
        }, 0);
    };

    // const [closeModal, setCloseModal] = useState('false');

    const Loader = () => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    };

    return (
        <div className="flex justify-center">
            <nav
                ref={navbarRef}
                className={`flex py-2 lg:py-0 px-4 lg:px-8 lg:shadow-none justify-between items-center fixed lg:top-0 hover:bg-white hover:text-black w-screen lg:bg-white lg:text-black lg:font-medium ${
                    active && 'bg-white'
                } ${active && 'text-black'} transition-all duration-500`}
                style={{ backdropFilter: 'blur(1px)', zIndex: '999' }}
            >
                {/* //* ICONOS DARK MODE */}
                <BsFillSunFill className="md:my-1 text-2xl opacity-0" alt="dark-mode" />
                <BsFillMoonStarsFill className="hidden" alt="dark-mode" />

                {/* //* LINKS */}
                <ul
                    className={`flex lg:flex-row items-center p-3 flex-col lg:relative absolute lg:top-auto lg:ml-32 lg:transition-none transition-all duration-300 ease-in ${
                        active ? 'top-[50px]' : 'top-[-490px]'
                    } mx-0 gap-6 lg:bg-transparent bg-white`}
                >
                    <li>
                        <a
                            href="#about"
                            className="cursor-pointer hover:underline text-xl lg:text-2xl"
                            onClick={setActiveAndIcon}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className="cursor-pointer hover:underline text-xl lg:text-2xl"
                            onClick={setActiveAndIcon}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="cursor-pointer hover:underline text-xl lg:text-2xl"
                            onClick={setActiveAndIcon}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="cursor-pointer hover:underline text-xl lg:text-2xl"
                            onClick={setActiveAndIcon}
                        >
                            Contact
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
                        className="cursor-pointer text-white hover:shadow-none shadow-lg text-lg active:bg-violet-600 hover:bg-violet-700 hover:shadow-gray-800 transition-all duration-300 bg-violet-600 px-3 py-1 rounded-md"
                        // className="cursor-pointer text-white hover:shadow-none shadow-lg text-lg active:bg-violet-600 hover:bg-violet-700 hover:shadow-gray-800 transition-all duration-300 bg-violet-600 px-3 py-1 rounded-md"
                        download
                    >
                        {loader ? 'Descargando...' : 'Download CV'}
                    </a>
                </ul>

                {/* //* BOTON MENU */}
                <button className={`menu-btn lg:hidden ${active && 'close'}`} onClick={setActiveAndIcon}>
                    {icon === 'menu' ? <HiMenu className="text-3xl" /> : <HiMenuAlt3 className="text-2xl" />}
                </button>
            </nav>
            {/* //* CUANDO EL USUARIO DA CLICK FUERA DEL MENU, ESTE SE CIERRA  */}
            {/* <div className="absolute top-0 left-0 right-0 bottom-0" onClick={setActiveAndIcon}></div> */}{' '}
        </div>
    );
};

export { NavBar };
