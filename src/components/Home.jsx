import Profile from '../assets/icons/profile.png';
import WhatsApp from '../assets/icons/whatsapp.svg';
import Email from '../assets/icons/email.svg';
import ArrowDown from '../assets/icons/flecha-hacia-abajo.svg';
import { VscGithub } from 'react-icons/vsc';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

const Home = () => {
    return (
        <section id="home" className="pt-20 mb-16">
            <img src={Profile} className="flex mx-auto w-48 rounded-full" alt="profile-photo" />
            <h1 className="text-blue_1 text-3xl font-semibold font-poppins mt-2">Social Media</h1>
            {/* //* Iconos */}
            <ul className="flex justify-center items-center">
                <li>
                    <VscGithub className="w-16 text-6xl" alt="github" />
                </li>
                <li>
                    <a href="">
                        <TiSocialTwitterCircular className=" text-7xl" alt="twitter" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <TiSocialLinkedinCircular className="w-16 text-6xl" alt="linkedin" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img className="w-16" src={WhatsApp} alt="whatsapp" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img className="w-16" src={Email} alt="email" />
                    </a>
                </li>
            </ul>
            <div>
                <h1 className="text-blue_1 text-[54px] font-extrabold font-poppins mb-6 mt-4">
                    Luis Sequera
                </h1>
                <p className="font-poppins text-[23px]">
                    Front-End Developer. Musician. <br />
                    Passionate about learning.
                </p>
            </div>
            <div className="hidden">
                <p>More about me...</p>
                <a href="">
                    <img src={ArrowDown} alt="arrow-down" />
                </a>
            </div>
        </section>
    );
};

export { Home };
