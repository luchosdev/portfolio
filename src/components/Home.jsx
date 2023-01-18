import Profile from '../assets/icons/profile.png';
import ArrowDown from '../assets/icons/flecha-hacia-abajo.svg';
import WhatsAppLogo from '../assets/icons/whatsapp.svg';
import EmailLogo from '../assets/icons/email-logo.svg';
import GitHubLogo from '../assets/icons/github-logo.svg';
import TwitterLogo from '../assets/icons/twitter-logo.svg';
import LinkedInLogo from '../assets/icons/linkedin-logo.svg';

const Home = () => {
    return (
        <section id="home" className="pt-28 mb-16">
            <img src={Profile} className="flex mx-auto w-48 rounded-full" alt="profile-photo" />
            <h1 className="text-blue_1 text-3xl font-semibold font-poppins mt-2">Social Media</h1>
            {/* //* Iconos */}
            <ul className="flex w-72 gap-x-1 mx-auto items-center">
                <a href="https://github.com/LuisSequeraDev">
                    <img className="w-16" src={GitHubLogo} alt="github" />
                </a>
                <a href="https://twitter.com/LuisSequeraDev">
                    <img src={TwitterLogo} className="w-16" alt="twitter" />
                </a>
                <a href="https://www.linkedin.com/in/luissequeradev/">
                    <img src={LinkedInLogo} className="w-16" alt="linkedin" />
                </a>
                <a href="wa.link/qzqeia">
                    <img className="w-[4.2rem]" src={WhatsAppLogo} alt="whatsapp" />
                </a>
                <a href="mailto:luissequeracontreras@gmail.com">
                    <img className="w-16" src={EmailLogo} alt="email" />
                </a>
            </ul>
            <div>
                <h1 className="text-blue_1 text-[42px] sm:text-[54px] font-extrabold font-poppins mb-6 mt-4">
                    Luis Sequera
                </h1>
                <p className="font-poppins sm:text-[23px]">
                    Front-End Developer. Musician. <br />
                    Passionate about learning.
                </p>
            </div>
            <div className="flex flex-col items-center mt-5">
                <p className="text-orange_1">More about me...</p>
                <a href="#about">
                    <img className="w-20 arrow_float mt-5" src={ArrowDown} alt="arrow-down" />
                </a>
            </div>
        </section>
    );
};

export { Home };
