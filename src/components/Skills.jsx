import React from 'react';
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

function Skills() {
  return (
    <section id="skills" className="mx-3 pt-10 pb-16 xs:pt-0 lg:pt-10 lg:pb-4">
      <h1 className="mb-3 pt-12 font-poppins text-3xl font-extrabold text-blue_1 dark:opacity-80 xs2:pt-8 lg:mb-6 lg:text-5xl">
        Skills
      </h1>
      <ul className="mx-4 grid grid-cols-3 gap-2 min-[500px]:grid-cols-4 min-[600px]:grid-cols-5 sm800:grid-cols-6 lg:mx-10">
        <li className="flex h-24 flex-col items-center justify-center rounded-lg bg-white p-2 dark:opacity-80 lg:h-32">
          <h6 className="font-poppins font-bold text-black lg:text-xl">
            HMTL5
          </h6>
          <img className="w-14 lg:w-20" src={Html} alt="html-logo" />
        </li>
        <li className="flex h-24 flex-col items-center justify-center rounded-lg bg-white p-2 dark:opacity-80 lg:h-32">
          <h6 className="font-poppins font-bold text-black lg:text-xl">CSS3</h6>
          <img className="w-14 lg:w-20" src={Css} alt="css3-logo" />
        </li>
        <li className="flex h-24 flex-col items-center justify-center rounded-lg bg-white p-2 dark:opacity-80 lg:h-32">
          <h6 className="-mt-1 font-poppins font-bold text-black lg:text-xl">
            JavaScript
          </h6>
          <img
            className="w-14 lg:w-20"
            src={JavaScript}
            alt="javascript-logo"
          />
        </li>
        <li className="flex h-24 flex-col items-center justify-center rounded-lg bg-white p-2 dark:opacity-80 lg:h-32">
          <h6 className="font-poppins font-bold text-black lg:text-xl">
            React JS
          </h6>
          <img className="w-14 lg:w-20" src={React1} alt="react-logo" />
        </li>
        <li className="flex h-24 flex-col items-center justify-center rounded-lg bg-white p-2 dark:opacity-80 lg:h-32">
          <h6 className="font-poppins font-bold text-black lg:text-xl">
            Angular
          </h6>
          <img className="w-14 lg:w-20" src={Angular} alt="angular-logo" />
        </li>
        <li className="flex h-24 flex-col items-center justify-center rounded-lg bg-white p-2 dark:opacity-80 lg:h-32">
          <h6 className="pt-1 font-poppins text-sm font-bold text-black lg:text-xl">
            TailwindCSS
          </h6>
          <img
            className="-mt-1 w-16 lg:w-24"
            src={Tailwind}
            alt="tailwind-logo"
          />
        </li>
        <li className="flex h-24 flex-col items-center justify-center rounded-lg bg-white p-2 dark:opacity-80 lg:h-32">
          <h6 className="font-poppins font-bold text-black lg:text-xl">
            Next JS
          </h6>
          <img className="lg: my-1 w-20 lg:w-32" src={Next} alt="next-logo" />
        </li>
        <li className="flex h-24 flex-col items-center justify-center rounded-lg bg-white p-2 dark:opacity-80 lg:h-32">
          <h6 className="font-poppins font-bold text-black lg:text-xl">
            Webpack
          </h6>
          <img className="w-14 lg:w-20" src={Webpack} alt="webpack-logo" />
        </li>
        <li className="flex h-24 flex-col items-center justify-center rounded-lg bg-white p-2 dark:opacity-80 lg:h-32">
          <h6 className="font-poppins font-bold text-black lg:text-xl">Vite</h6>
          <img
            className="w-14 pb-1 lg:w-20"
            src={ViteLogo}
            alt="webpack-logo"
          />
        </li>
        <li className="flex h-24 flex-col items-center justify-center rounded-lg bg-white p-2 dark:opacity-80 lg:h-32">
          <h6 className="font-poppins font-bold text-black lg:text-xl">
            ESLint
          </h6>
          <img className="w-14 pb-1 lg:w-20" src={Eslint} alt="eslint-logo" />
        </li>
        <li className="flex h-24 flex-col items-center justify-center rounded-lg bg-white p-2 dark:opacity-80 lg:h-32">
          <h6 className="font-poppins font-bold text-black lg:text-xl">
            Prettier
          </h6>
          <img className="w-14 pb-2 lg:w-20" src={Prettier} alt="eslint-logo" />
        </li>
        <li className="flex h-24 flex-col items-center justify-center rounded-lg bg-white px-2 py-4 dark:opacity-80 lg:h-32">
          <h6 className="font-poppins font-bold text-black lg:text-xl">Git</h6>
          <img className="my-1 w-14 lg:w-20" src={Git} alt="git-logo" />
        </li>
        <li className="flex h-24 flex-col items-center justify-center rounded-lg bg-white dark:opacity-80 lg:h-32">
          <h6 className="-mt-1 mb-1 font-poppins font-bold text-black lg:text-xl">
            GitHub
          </h6>
          <img className="w-14 lg:w-20" src={GitHub} alt="github-logo" />
        </li>
        <li className="flex h-24 flex-col items-center justify-center rounded-lg bg-white p-2 dark:opacity-80 lg:h-32">
          <h6 className="font-poppins font-bold text-black lg:text-xl">
            GitLab
          </h6>
          <img className="mt-1 w-16 lg:w-20" src={GitLab} alt="gitlab-logo" />
        </li>
      </ul>
    </section>
  );
}

export default Skills;
