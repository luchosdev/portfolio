import Html from '../assets/icons/html-large.png';
import Css from '../assets/icons/css-large.png';
import JavaScript from '../assets/icons/js-large.png';
import React1 from '../assets/icons/react-large.png';
import Angular from '../assets/icons/angular-icon.svg';
import Tailwind from '../assets/icons/tailwind-css-large.png';
import Next from '../assets/icons/next-large.png';
import Webpack from '../assets/icons/webpack-large.svg';
import ViteLogo from '../assets/icons/vitejs.svg';
import Eslint from '../assets/icons/eslint.png';
import Prettier from '../assets/icons/prettier.svg';
import Git from '../assets/icons/git.svg';
import GitHub from '../assets/icons/github-large.png';
import GitLab from '../assets/icons/gitlab.svg';

const Skills = () => {
    return (
        <section id="skills" className="mx-3 pt-10 xs:pt-0 lg:pt-10 pb-16 lg:pb-4">
            <h1 className="pt-12 xs2:pt-8 mb-3 lg:mb-6 text-blue_1 text-3xl lg:text-5xl font-extrabold font-poppins">
                Skills
            </h1>
            <ul className="grid grid-cols-3 min-[500px]:grid-cols-4 min-[600px]:grid-cols-5 sm800:grid-cols-6 mx-4 lg:mx-10 gap-2">
                <li className="flex h-24 lg:h-32 flex-col items-center justify-center bg-white rounded-lg p-2">
                    <h6 className="text-black lg:text-xl font-poppins font-bold">HMTL5</h6>
                    <img className="w-14 lg:w-20" src={Html} alt="html-logo" />
                </li>
                <li className="flex h-24 lg:h-32 flex-col items-center justify-center bg-white rounded-lg p-2">
                    <h6 className="text-black lg:text-xl font-poppins font-bold">CSS3</h6>
                    <img className="w-14 lg:w-20" src={Css} alt="css3-logo" />
                </li>
                <li className="flex h-24 lg:h-32 flex-col items-center justify-center bg-white rounded-lg p-2">
                    <h6 className="text-black lg:text-xl -mt-1 font-poppins font-bold">JavaScript</h6>
                    <img className="w-14 lg:w-20" src={JavaScript} alt="javascript-logo" />
                </li>
                <li className="flex h-24 lg:h-32 flex-col items-center justify-center bg-white rounded-lg p-2">
                    <h6 className="text-black lg:text-xl font-poppins font-bold">React JS</h6>
                    <img className="w-14 lg:w-20" src={React1} alt="react-logo" />
                </li>
                <li className="flex h-24 lg:h-32 flex-col items-center justify-center bg-white rounded-lg p-2">
                    <h6 className="text-black lg:text-xl font-poppins font-bold">Angular</h6>
                    <img className="w-14 lg:w-20" src={Angular} alt="angular-logo" />
                </li>
                <li className="flex h-24 lg:h-32 flex-col items-center justify-center bg-white rounded-lg p-2">
                    <h6 className="pt-1 text-sm lg:text-xl text-black font-poppins font-bold">TailwindCSS</h6>
                    <img className="w-16 lg:w-24 -mt-1" src={Tailwind} alt="tailwind-logo" />
                </li>
                <li className="flex h-24 lg:h-32 flex-col items-center justify-center bg-white rounded-lg p-2">
                    <h6 className="text-black lg:text-xl font-poppins font-bold">Next JS</h6>
                    <img className="w-20 lg:w-32 my-1 lg:" src={Next} alt="next-logo" />
                </li>
                <li className="flex h-24 lg:h-32 flex-col items-center justify-center bg-white rounded-lg p-2">
                    <h6 className="text-black lg:text-xl font-poppins font-bold">Webpack</h6>
                    <img className="w-14 lg:w-20" src={Webpack} alt="webpack-logo" />
                </li>
                <li className="flex h-24 lg:h-32 flex-col items-center justify-center bg-white rounded-lg p-2">
                    <h6 className="text-black lg:text-xl font-poppins font-bold">Vite</h6>
                    <img className="w-14 lg:w-20 pb-1" src={ViteLogo} alt="webpack-logo" />
                </li>
                <li className="flex h-24 lg:h-32 flex-col items-center justify-center bg-white rounded-lg p-2">
                    <h6 className="text-black lg:text-xl font-poppins font-bold">ESLint</h6>
                    <img className="w-14 lg:w-20 pb-1" src={Eslint} alt="eslint-logo" />
                </li>
                <li className="flex h-24 lg:h-32 flex-col items-center justify-center bg-white rounded-lg p-2">
                    <h6 className="text-black lg:text-xl font-poppins font-bold">Prettier</h6>
                    <img className="w-14 lg:w-20 pb-2" src={Prettier} alt="eslint-logo" />
                </li>
                <li className="flex h-24 lg:h-32 flex-col items-center justify-center bg-white rounded-lg px-2 py-4">
                    <h6 className="text-black lg:text-xl font-poppins font-bold">Git</h6>
                    <img className="w-14 lg:w-20 my-1" src={Git} alt="git-logo" />
                </li>
                <li className="flex h-24 lg:h-32 flex-col items-center justify-center bg-white rounded-lg">
                    <h6 className="text-black lg:text-xl -mt-1 mb-1 font-poppins font-bold">GitHub</h6>
                    <img className="w-14 lg:w-20" src={GitHub} alt="github-logo" />
                </li>
                <li className="flex h-24 lg:h-32 flex-col items-center justify-center bg-white rounded-lg p-2">
                    <h6 className="text-black lg:text-xl font-poppins font-bold">GitLab</h6>
                    <img className="w-16 lg:w-20 mt-1" src={GitLab} alt="gitlab-logo" />
                </li>
            </ul>
        </section>
    );
};

export { Skills };
