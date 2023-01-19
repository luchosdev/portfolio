import Profile from '../assets/icons/profile.png';
import ArrowDown from '../assets/icons/flecha-hacia-abajo.svg';
import WhatsAppLogo from '../assets/icons/whatsapp.svg';
import EmailLogo from '../assets/icons/email-logo.svg';
import GitHubLogo from '../assets/icons/github-logo.svg';
import TwitterLogo from '../assets/icons/twitter-logo.svg';
import LinkedInLogo from '../assets/icons/linkedin-logo.svg';

const Home = () => {
    return (
        <section
            id="home"
            className="pt-28 xs:pt-12 xs2:pt-8 sm:pt-10 lg:pt-20 mb-16 xs2:mx-2 xs:mb-10 xs2:flex xs2:justify-around xl:justify-center xl:gap-x-20"
        >
            {/* //* Lado superior (mobile); Lado derecho (desktop) */}
            <div className="sm:pt-3 sm900:ml-3 lg:mx-0">
                <img
                    src={Profile}
                    // style={{ width: '208px' }}
                    className="mx-auto w-48 xs2:w-32 sm:w-36 sm2:w-40 md:w-52 lg:w-60 xl:w-72 rounded-full"
                    alt="profile-photo"
                />
                <h1 className="text-blue_1 text-3xl md:text-4xl font-semibold font-poppins mt-2 lg:mt-3">
                    Social Media
                </h1>
                {/* //* Iconos */}
                <ul className="flex w-72 xs2:w-60 md:w-72 lg:w-[22rem] xl:w-96 gap-x-1 xs2:gap-0 lg:gap-x-1 mx-auto xs2:mx-2 items-center">
                    <a href="https://github.com/LuisSequeraDev">
                        <img className="w-16 xs2:w-12 md:w-14 lg:w-20" src={GitHubLogo} alt="github" />
                    </a>
                    <a href="https://twitter.com/LuisSequeraDev">
                        <img src={TwitterLogo} className="w-16 xs2:w-12 md:w-14 lg:w-20" alt="twitter" />
                    </a>
                    <a href="https://www.linkedin.com/in/luissequeradev/">
                        <img src={LinkedInLogo} className="w-16 xs2:w-12 md:w-14 lg:w-20" alt="linkedin" />
                    </a>
                    <a href="wa.link/qzqeia">
                        <img
                            className="w-[4.2rem] xs2:w-[3.3rem] md:w-[3.8rem] lg:w-[5.5rem]"
                            src={WhatsAppLogo}
                            alt="whatsapp"
                        />
                    </a>
                    <a href="mailto:luissequeracontreras@gmail.com">
                        <img className="w-16 xs2:w-12 md:w-14 lg:w-20" src={EmailLogo} alt="email" />
                    </a>
                </ul>
            </div>

            {/* //* Lado inferior (mobile); Lado izquierdo (desktop) */}
            <div className="xs2:mx-2 sm900:mr-5">
                <div>
                    <h1 className="text-blue_1 text-[42px] xs2:text-3xl min-[550px]:text-4xl min-[580px]:text-[2.7rem] sm:text-5xl sm2:text-[3.5rem] md:text-6xl lg:text-7xl font-extrabold font-poppins mb-6 xs2:mb-2 mt-4 xs2:mt-2 md:mt-4 sm900:mt-10">
                        Luis Sequera
                    </h1>
                    <p className="font-poppins xs2:text-sm min-[580px]:text-base sm:text-xl sm2:text-[1.4rem] md:text-2xl lg:text-3xl sm:mt-4">
                        Front-End Developer. Musician. <br />
                        Passionate about learning.
                    </p>
                </div>
                <div className="flex flex-col items-center mt-5 xs2:mt-2 min-[550px]:mt-5">
                    <p className="text-xl xs2:text-base min-[580px]:text-lg sm2:text-2xl lg:text-3xl text-orange_1">
                        More about me...
                    </p>
                    <a href="#about">
                        <img
                            className="w-20 xs2:w-16 sm2:w-[4.5rem] lg:w-28 arrow_float mt-5 xs2:mt-3 min-[580px]:mt-4 lg:mt-5"
                            src={ArrowDown}
                            alt="arrow-down"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export { Home };
