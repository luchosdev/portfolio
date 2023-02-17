import React, { useState, useRef } from 'react';

//* ICONOS
import { HiMenuAlt3, HiMenu } from 'react-icons/hi';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import CV from '../assets/others/cvLuisSequera.pdf';

// eslint-disable-next-line react/prop-types
function NavBar({ active, setActive, navbarRef }) {
  const [loader, setLoader] = useState(false);
  const [icon, setIcon] = useState('menu');
  const setActiveAndIcon = () => {
    setTimeout(() => {
      setActive(!active);
      setIcon(active ? 'menu' : 'close');
    }, 0);
  };

  const Loader = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  };

  //!---------------------------------------
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  // const toggleDarkMode = ref(document.documentElement.className === "dark");
  const toggleDarkMode = useRef(
    document.documentElement.className.includes('dark')
  );
  const changeDarkMode = () => {
    toggleDarkMode.value = document.documentElement.classList.toggle('dark');
    toggleDarkMode.value
      ? (localStorage.theme = 'dark')
      : (localStorage.theme = 'light');
  };

  return (
    <div className="group flex justify-center">
      <nav
        ref={navbarRef}
        className={`fixed flex w-screen items-center justify-between py-2 px-4 group-hover:bg-white group-hover:text-black dark:group-hover:bg-gray-300 lg:top-0 lg:bg-white lg:py-0 lg:px-8 lg:font-medium lg:text-black lg:shadow-none dark:lg:bg-gray-300 ${
          active && 'bg-white dark:bg-gray-300'
        } ${active && 'text-black'} transition-all duration-500`}
        style={{ backdropFilter: 'blur(1px)', zIndex: '999' }}
      >
        {/* //* ICONOS DARK MODE */}
        <BsFillSunFill
          onClick={changeDarkMode}
          className="hidden text-2xl dark:block md:my-1"
          alt="dark-mode"
        />
        <BsFillMoonStarsFill
          onClick={changeDarkMode}
          className="text-2xl dark:hidden"
          alt="dark-mode"
        />

        {/* //* LINKS */}
        <ul
          className={`absolute flex flex-col items-center p-3 transition-all duration-300 ease-in lg:relative lg:top-auto lg:ml-32 lg:flex-row lg:transition-none ${
            active ? 'top-[50px]' : 'top-[-490px]'
          } mx-0 gap-6 bg-white dark:bg-gray-300 lg:bg-transparent`}
        >
          <li>
            <a
              href="#about"
              className="cursor-pointer text-xl hover:underline lg:text-2xl"
              onClick={setActiveAndIcon}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="cursor-pointer text-xl hover:underline lg:text-2xl"
              onClick={setActiveAndIcon}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="cursor-pointer text-xl hover:underline lg:text-2xl"
              onClick={setActiveAndIcon}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="cursor-pointer text-xl hover:underline lg:text-2xl"
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
              className="cursor-pointer select-none rounded-md bg-violet-600 px-6 py-2 text-lg text-white shadow-lg hover:bg-violet-700 hover:shadow-none hover:shadow-gray-800 active:bg-violet-600 dark:bg-violet-900 dark:text-gray-200 lg:hidden"
              download
              rel="noreferrer"
            >
              {loader ? 'Descargando...' : 'Downdload CV'}
            </a>
          </li>
        </ul>

        {/* //* BOTON CV EN DESKTOP */}
        <ul className="hidden items-center lg:flex">
          <a
            onClick={Loader}
            href={CV}
            className="cursor-pointer rounded-md bg-violet-600 px-3 py-1 text-lg text-white shadow-lg transition-all duration-300 hover:bg-violet-700 hover:shadow-none hover:shadow-gray-800 active:bg-violet-600"
            download
          >
            {loader ? 'Descargando...' : 'Download CV'}
          </a>
        </ul>

        {/* //* BOTON MENU */}
        <button
          type="button"
          className={`menu-btn lg:hidden ${active && 'close'}`}
          onClick={setActiveAndIcon}
        >
          {icon === 'menu' ? (
            <HiMenu className="text-3xl text-white group-hover:text-black" />
          ) : (
            <HiMenuAlt3 className="text-2xl" />
          )}
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
