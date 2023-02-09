import React from 'react';
import Profile from '../assets/icons/profile.png';
import ArrowDown from '../assets/icons/flecha-hacia-abajo.svg';
import WhatsAppLogo from '../assets/icons/whatsapp.svg';
import EmailLogo from '../assets/icons/email-logo.svg';
import GitHubLogo from '../assets/icons/github-logo.svg';
import TwitterLogo from '../assets/icons/twitter-logo.svg';
import LinkedInLogo from '../assets/icons/linkedin-logo.svg';

function Home() {
  return (
    <section
      id="home"
      className="mb-16 pt-28 xs:mb-10 xs:pt-12 xs2:mx-2 xs2:flex xs2:justify-around xs2:pt-8 sm:pt-10 lg:pt-20 xl:justify-center xl:gap-x-20"
    >
      {/* //* Lado superior (mobile); Lado derecho (desktop) */}
      <div className="sm:pt-3 sm900:ml-3 lg:mx-0">
        <img
          src={Profile}
          className="mx-auto w-48 rounded-full xs2:w-32 sm:w-36 sm2:w-40 md:w-52 lg:w-60 xl:w-72"
          alt="profile"
        />
        <h1 className="mt-2 font-poppins text-3xl font-semibold text-blue_1 md:text-4xl lg:mt-3">
          Social Media
        </h1>
        {/* //* Iconos */}
        <ul className="mx-auto flex w-72 items-center gap-x-1 xs2:mx-2 xs2:w-60 xs2:gap-0 md:w-72 lg:w-[22rem] lg:gap-x-1 xl:w-96">
          <a href="https://github.com/LuisSequeraDev">
            <img
              className="w-16 xs2:w-12 md:w-14 lg:w-20"
              src={GitHubLogo}
              alt="github"
            />
          </a>
          <a href="https://twitter.com/LuisSequeraDev">
            <img
              src={TwitterLogo}
              className="w-16 xs2:w-12 md:w-14 lg:w-20"
              alt="twitter"
            />
          </a>
          <a href="https://www.linkedin.com/in/luissequeradev/">
            <img
              src={LinkedInLogo}
              className="w-16 xs2:w-12 md:w-14 lg:w-20"
              alt="linkedin"
            />
          </a>
          <a href="wa.link/qzqeia">
            <img
              className="w-[4.2rem] xs2:w-[3.3rem] md:w-[3.8rem] lg:w-[5.5rem]"
              src={WhatsAppLogo}
              alt="whatsapp"
            />
          </a>
          <a href="mailto:luissequeracontreras@gmail.com">
            <img
              className="w-16 xs2:w-12 md:w-14 lg:w-20"
              src={EmailLogo}
              alt="email"
            />
          </a>
        </ul>
      </div>

      {/* //* Lado inferior (mobile); Lado izquierdo (desktop) */}
      <div className="xs2:mx-2 sm900:mr-5">
        <div>
          <h1 className="mb-6 mt-4 font-poppins text-[42px] font-extrabold text-blue_1 xs2:mb-2 xs2:mt-2 xs2:text-3xl min-[550px]:text-4xl min-[580px]:text-[2.7rem] sm:text-5xl sm2:text-[3.5rem] md:mt-4 md:text-6xl sm900:mt-10 lg:text-7xl">
            Luis Sequera
          </h1>
          <p className="font-poppins xs2:text-sm min-[580px]:text-base sm:mt-4 sm:text-xl sm2:text-[1.4rem] md:text-2xl lg:text-3xl">
            Front-End Developer. Musician.
            <br />
            Passionate about learning.
          </p>
        </div>
        <div className="mt-5 flex flex-col items-center xs2:mt-2 min-[550px]:mt-5">
          <p className="text-xl text-orange_1 xs2:text-base min-[580px]:text-lg sm2:text-2xl lg:text-3xl">
            More about me...
          </p>
          <a href="#about">
            <img
              className="arrow_float mt-5 w-20 xs2:mt-3 xs2:w-16 min-[580px]:mt-4 sm2:w-[4.5rem] lg:mt-5 lg:w-28"
              src={ArrowDown}
              alt="arrow-down"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
