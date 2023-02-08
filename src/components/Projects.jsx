import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { IoIosRocket } from 'react-icons/io';
import AdminECommerce from '../assets/img/works/admin-ecommerce-desktop-mobile.png';
import YardSales from '../assets/img/works/Ecommerce-yard-sales-desktop-mobile.png';
import GoogleClone from '../assets/img/works/google-clone-desktop-mobile.png';
import LandingPage from '../assets/img/works/sign-in-panding-page-desktop-mobile.png';

function Projects() {
  return (
    <section className="lg:mx-10" id="projects">
      <h1 className="mb-3 pt-14 font-poppins text-3xl font-extrabold text-blue_1 xs2:pt-8 lg:pt-16 lg:text-5xl">
        Projects
      </h1>
      <div className="sm800:grid sm800:grid-cols-2">
        {/* Admin E-Commerce */}
        <div
          className="mx-4 mt-4 flex flex-col justify-between rounded-md border bg-white px-4 pb-4"
          id="project-1"
        >
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
            <b>Technologies:</b> CSS, JavaScript, Tailwind CSS, Webpack, React
            JS, Next JS, ESLint, Git
          </p>
          <article className=" mx-2 text-justify font-poppins text-xl text-black">
            E-commerce admin page, this project has a dashboard, and it is a
            CRUD to manage the e-commerce build with React and Next. It
            authorizes registered users to access the console. I built the
            interface with Tailwind UI to focus the development on
            functionality. The CRUD manager uses this API.
          </article>
          <div className="mt-3 flex justify-center gap-x-5 min-[560px]:gap-x-20 sm800:mt-10">
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

        {/* Yard Sales E-Commerce */}
        <div
          className="mx-4 mt-4 flex flex-col justify-between rounded-md border bg-white px-4 pb-4"
          id="project-2"
        >
          <picture className="mt-2 flex justify-center rounded-md bg-gray-300 min-[500px]:mx-10 md:mt-4 lg:mt-6">
            <img className="w-80 xs2:w-auto" src={YardSales} alt="yardsales" />
          </picture>
          <h3 className="mb-2 mt-4 font-poppins text-2xl font-bold text-orange_1">
            Yard Sales E-commerce
          </h3>
          <p className="mb-5 font-poppins text-xl text-black lg:mx-2">
            <b>Technologies:</b> CSS, JavaScript, Webpack, React JS, Next JS,
            ESLint, Git
          </p>
          <article className=" mx-2 text-justify font-poppins text-xl text-black">
            Ecommerce made with React JS, minified with Webpack and transpiled
            with Babel for browser compatibility, then I went a bit further and
            migrated it to Next Js. In this project, I learned how state and
            context work to manage my components and send information through
            them. Products from
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

        {/* Google Clone */}
        <div
          className="mx-4 mt-4 flex flex-col justify-between rounded-md border bg-white px-4 pb-4"
          id="project-3"
        >
          <picture className="mt-2 flex justify-center rounded-md bg-gray-300 min-[500px]:mx-10 md:mt-4 lg:mt-6">
            <img className="w-80 xs2:w-auto" src={GoogleClone} alt="" />
          </picture>
          <h3 className="font-poppins text-2xl font-bold text-orange_1 lg:-mt-24">
            Google Clone
          </h3>
          <p className="font-poppins text-xl text-black lg:-mt-28">
            <b>Technologies:</b> HTML y CSS
          </p>
          <article className=" mx-2 text-justify font-poppins text-xl text-black lg:-mt-24">
            This project was created with the intention of practicing the basic
            structure of this popular website, using only HTML and CSS.
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

        {/* Sign in Landing Page */}
        <div
          className="mx-4 mt-4 flex flex-col justify-between rounded-md border bg-white px-4 pb-4"
          id="project-4"
        >
          <picture className="mt-2 flex justify-center rounded-md bg-gray-300 min-[500px]:mx-10 md:mt-4  lg:mt-6">
            <img className="w-80 xs2:w-auto" src={LandingPage} alt="" />
          </picture>
          <h3 className="mb-2 mt-4 font-poppins text-2xl font-bold text-orange_1">
            Sign in Landing Page
          </h3>
          <p className="mb-5 font-poppins text-xl text-black">
            <b>Technologies:</b> Html, CSS and JavaScript.
          </p>
          <article className=" mx-2 text-justify font-poppins text-xl text-black">
            This project was created as a "Frontend Mentor" challenge, where I
            created from scratch using the resources provided on the site, how
            it should be seen and the respective validations made if the email
            and password are correct according to the established criteria.
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
    </section>
  );
}

export default Projects;
