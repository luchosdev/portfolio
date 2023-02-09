/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { IoIosRocket } from 'react-icons/io';
import AdminECommerce from '../assets/img/works/adminEcommerce.png';
import YardSales from '../assets/img/works/yardSales.png';
import GoogleClone from '../assets/img/works/googleClone.png';
import LandingPage from '../assets/img/works/landingPage.png';
import Portfolio from '../assets/img/works/portfolio.png';
import Intranet from '../assets/img/works/intranet.png';

function Projects() {
  return (
    <section className="lg:mx-10" id="projects">
      <h1 className="mb-3 pt-14 font-poppins text-3xl font-extrabold text-blue_1 xs2:pt-8 lg:pt-16 lg:text-5xl">
        Projects
      </h1>
      <div className="sm800:grid sm800:grid-cols-2">
        {/* Portfolio */}
        <div
          className="mx-4 mt-4 flex flex-col rounded-md border bg-white px-4 pb-4"
          id="project-1"
        >
          <div>
            <picture className="px-auto mt-2 flex justify-center rounded-md bg-gray-300 min-[500px]:mx-10 md:mt-4 lg:mt-6">
              <img
                className="w-80 xs2:w-auto"
                src={Portfolio}
                alt="portfolio"
              />
            </picture>
            <h3 className="mb-2 mt-4 font-poppins text-2xl font-bold text-orange_1">
              Portfolio Web
            </h3>
            <p className="mb-5 font-poppins text-xl text-black">
              <b>Technologies: </b>
              CSS, JavaScript, Tailwind CSS, Vite, React JS, ESLint, Prettier,
              PostCss, Git, GitHub
            </p>
          </div>
          <div className="flex h-full flex-col justify-between">
            <article className="mx-2 text-justify font-poppins text-xl text-black">
              <p>
                Personal Web Portfolio, where I basically applied all the
                knowledge acquired so far.
              </p>
              <br />
              <input id="showmore_1" type="checkbox" className="showmore" />
              <span className="complete">
                <p>
                  I integrate 10 different types of breakpoint thinking about
                  the good user experience. I also use Eslint and Prettier to
                  use the best style practices, avoid errors and this is part of
                  the static tests of the code. I integrated a dynamic menu in
                  mobile mode, as well as a form to communicate with me, using
                  &quot;emailjs&quot; as a tool. I also make use of TailwindCss
                  in addition to the normal use of Css, all integrated into the
                  PostCss preprocessor, plus all the code is processed with
                  Vite, having a final deployment on GitHub-Pages.
                </p>
                <br />
              </span>
              <label htmlFor="showmore_1" className="more">
                Leer <span className="mas">más...</span>{' '}
                <span className="menos">menos...</span>
              </label>
            </article>
            <div className="mt-3 flex justify-center gap-x-5 min-[560px]:gap-x-20">
              <a
                className="flex flex-col items-center"
                href="https://github.com/LuisSequeraDev/react-shop-admin-next"
              >
                <BsGithub className="fill-black text-5xl" alt="repository" />
                <p className="font-semibold text-black">Repository</p>
              </a>
              <a
                className="flex flex-col items-center"
                href="https://react-shop-admin-next.vercel.app/"
              >
                <IoIosRocket
                  className="fill-black text-center text-5xl"
                  alt="deploy"
                />
                <p className="font-semibold text-black">Open Project</p>
              </a>
            </div>
          </div>
        </div>

        {/* Intranet */}
        <div
          className="mx-4 mt-4 flex flex-col rounded-md border bg-white px-4 pb-4"
          id="project-1"
        >
          <div>
            <picture className="px-auto mt-2 flex justify-center rounded-md bg-gray-300 min-[500px]:mx-10 md:mt-4 lg:mt-6">
              <img className="w-80 xs2:w-auto" src={Intranet} alt="intranet" />
            </picture>
            <h3 className="mb-2 mt-4 font-poppins text-2xl font-bold text-orange_1">
              Intranet Devdatep E.I.R.L.
            </h3>
            <p className="mb-5 font-poppins text-xl text-black">
              <b>Technologies: </b>
              CSS, JavaScript, Tailwind CSS, Vite, React JS, ESLint, Prettier,
              PostCss, Git, GitLab
            </p>
          </div>
          <div className="flex h-full flex-col justify-between">
            <article className="mx-2 text-justify font-poppins text-xl text-black">
              <p>
                Web system for the internal control of the company, where I am
                in charge of the Front-End area.
              </p>
              <br />
              <input id="showmore_2" type="checkbox" className="showmore" />
              <span className="complete">
                <p>
                  Technologies such as React, TailwindCss and Vite are applied
                  here. Here we create graphs and tables, using APIs created by
                  the backend area and using MySql in the Database area. We
                  filter large data as needed, in addition to giving roles and
                  permissions to users as appropriate, for this, each one must
                  start with a username and password to obtain the desired
                  permissions. We also make use of different branches for each
                  developer, uploading the changes, I review every detail to
                  avoid failures and do the static tests and ending with the
                  &quot;merge&quot; in the main, where I generate the build for
                  its final deployment.
                </p>
                <br />
                <p>
                  If you want to see this App deployed, we can arrange a video
                  call, since you only enter with private credentials.
                </p>
                <br />
              </span>
              <label htmlFor="showmore_2" className="more">
                Leer <span className="mas">más</span>{' '}
                <span className="menos">menos</span>
                ...
              </label>
            </article>

            <div className="mt-3 flex justify-center gap-x-5 min-[560px]:gap-x-20">
              <a
                className="flex flex-col items-center"
                href="https://github.com/LuisSequeraDev/react-shop-admin-next"
              >
                <BsGithub className="fill-black text-5xl" alt="repository" />
                <p className="font-semibold text-black">Repository</p>
              </a>
              <a
                className="flex flex-col items-center"
                href="https://react-shop-admin-next.vercel.app/"
              >
                <IoIosRocket
                  className="fill-black text-center text-5xl"
                  alt="deploy"
                />
                <p className="font-semibold text-black">Open Project</p>
              </a>
            </div>
          </div>
        </div>

        {/* Admin E-Commerce */}
        <div
          className="mx-4 mt-4 flex flex-col rounded-md border bg-white px-4 pb-4"
          id="project-3"
        >
          <div>
            <picture className="mt-2 flex justify-center rounded-md bg-gray-300 min-[500px]:mx-10 md:mt-4 lg:mt-6">
              <img
                className="w-80 xs2:w-auto"
                src={AdminECommerce}
                alt="admin-ecommerce"
              />
            </picture>
            <h3 className="mb-2 mt-4 font-poppins text-2xl font-bold text-orange_1">
              Admin E-commerce
            </h3>
            <p className="mb-5 font-poppins text-xl text-black">
              <b>Technologies: </b>
              CSS, JavaScript, Tailwind CSS, Webpack, React JS, Next JS, ESLint,
              Git
            </p>
          </div>
          <div className="flex h-full flex-col justify-between">
            <article className="mx-2 text-justify font-poppins text-xl text-black">
              E-commerce admin page, this project has a dashboard, and it is a
              CRUD to manage the e-commerce build with React and Next. It
              authorizes registered users to access the console. I built the
              interface with Tailwind UI to focus the development on
              functionality. The CRUD manager uses this API.
            </article>
            <div className="mt-3 flex justify-center gap-x-5 min-[560px]:gap-x-20">
              <a
                className="flex flex-col items-center"
                href="https://github.com/LuisSequeraDev/react-shop-admin-next"
              >
                <BsGithub className="fill-black text-5xl" alt="repository" />
                <p className="font-semibold text-black">Repository</p>
              </a>
              <a
                className="flex flex-col items-center"
                href="https://react-shop-admin-next.vercel.app/"
              >
                <IoIosRocket
                  className="fill-black text-center text-5xl"
                  alt="deploy"
                />
                <p className="font-semibold text-black">Open Project</p>
              </a>
            </div>
          </div>
        </div>

        {/* Yard Sales E-Commerce */}
        <div
          className="mx-4 mt-4 flex flex-col rounded-md border bg-white px-4 pb-4"
          id="project-4"
        >
          <div>
            <picture className="mt-2 flex justify-center rounded-md bg-gray-300 min-[500px]:mx-10 md:mt-4 lg:mt-6">
              <img
                className="w-80 xs2:w-auto"
                src={YardSales}
                alt="yardsales"
              />
            </picture>
            <h3 className="mb-2 mt-4 font-poppins text-2xl font-bold text-orange_1">
              Yard Sales E-commerce
            </h3>
            <p className="mb-5 font-poppins text-xl text-black lg:mx-2">
              <b>Technologies: </b>
              CSS, JavaScript, Webpack, React JS, Next JS, ESLint, Git
            </p>
          </div>
          <div className="flex h-full flex-col justify-between">
            <article className="mx-2 text-justify font-poppins text-xl text-black">
              Ecommerce made with React JS, minified with Webpack and transpiled
              with Babel for browser compatibility, then I went a bit further
              and migrated it to Next Js. In this project, I learned how state
              and context work to manage my components and send information
              through them. Products from
              <strong className="mx-1 sm:mx-2">
                <a href="https://api.escuelajs.co/api/v1/products">this API</a>
              </strong>
              were requested.
            </article>
            <div className="mt-3 flex justify-center gap-x-5 min-[560px]:gap-x-20">
              <a
                className="flex flex-col items-center"
                href="https://github.com/LuisSequeraDev/yard-sales-netx.js"
              >
                <BsGithub className="fill-black text-5xl" alt="repository" />
                <p className="font-semibold text-black">Repository</p>
              </a>
              <a
                className="flex flex-col items-center"
                href="https://yard-sales-netx-js.vercel.app/"
              >
                <IoIosRocket
                  className="fill-black text-center text-5xl"
                  alt="deploy"
                />
                <p className="font-semibold text-black">Open Project</p>
              </a>
            </div>
          </div>
        </div>

        {/* Google Clone */}
        <div
          className="mx-4 mt-4 flex flex-col rounded-md border bg-white px-4 pb-4"
          id="project-5"
        >
          <div>
            <picture className="mt-2 flex justify-center rounded-md bg-gray-300 min-[500px]:mx-10 md:mt-4 lg:mt-6">
              <img className="w-80 xs2:w-auto" src={GoogleClone} alt="" />
            </picture>
            <h3 className="mt-4 mb-2 font-poppins text-2xl font-bold text-orange_1">
              Google Clone
            </h3>
            <p className="mb-5 font-poppins text-xl text-black">
              <b>Technologies: </b>
              HTML y CSS
            </p>
          </div>
          <div className="flex h-full flex-col justify-between">
            <article className="mx-2 text-justify font-poppins text-xl text-black">
              This project was created with the intention of practicing the
              basic structure of this popular website, using only HTML and CSS.
            </article>
            <div className="mt-3 flex justify-center gap-x-5 min-[560px]:gap-x-20 ">
              <a
                className="flex flex-col items-center"
                href="https://github.com/LuisSequeraDev/clone-google"
              >
                <BsGithub className="fill-black text-5xl" alt="repository" />
                <p className="font-semibold text-black">Repository</p>
              </a>
            </div>
          </div>
        </div>

        {/* Sign in Landing Page */}
        <div
          className="mx-4 mt-4 flex flex-col rounded-md border bg-white px-4 pb-4"
          id="project-6"
        >
          <div>
            <picture className="mt-2 flex justify-center rounded-md bg-gray-300 min-[500px]:mx-10 md:mt-4  lg:mt-6">
              <img className="w-80 xs2:w-auto" src={LandingPage} alt="" />
            </picture>
            <h3 className="mb-2 mt-4 font-poppins text-2xl font-bold text-orange_1">
              Sign in Landing Page
            </h3>
            <p className="mb-5 font-poppins text-xl text-black">
              <b>Technologies: </b>
              Html, CSS and JavaScript.
            </p>
          </div>
          <div className="flex h-full flex-col justify-between">
            <article className=" mx-2 text-justify font-poppins text-xl text-black">
              This project was created as a &quot;Frontend Mentor&quot;
              challenge, where I created from scratch using the resources
              provided on the site, how it should be seen and the respective
              validations made if the email and password are correct according
              to the established criteria.
            </article>
            <div className="mt-3 flex justify-center gap-x-5 min-[560px]:gap-x-20">
              <a
                className="flex flex-col items-center"
                href="https://github.com/LuisSequeraDev/validate-forms-html-css-js"
              >
                <BsGithub className="fill-black text-5xl" alt="repository" />
                <p className="font-semibold text-black">Repository</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
