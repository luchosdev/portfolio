import Admin_ECommerce from '../assets/img/works/admin-ecommerce-desktop-mobile.png';
import YardSales from '../assets/img/works/Ecommerce-yard-sales-desktop-mobile.png';
import GoogleClone from '../assets/img/works/google-clone-desktop-mobile.png';
import LandingPage from '../assets/img/works/sign-in-panding-page-desktop-mobile.png';
import { BsGithub } from 'react-icons/bs';
import { IoRocketOutline } from 'react-icons/io5';

const Projects = () => {
    return (
        <section className="" id="projects">
            <h1 className="pt-12 mb-3 text-blue_1 text-3xl font-extrabold font-poppins">Projects</h1>

            <div id="project-1">
                <picture className="flex justify-center">
                    <img className="w-80" src={Admin_ECommerce} alt="admin-ecommerce" />
                </picture>
                <h3 className="text-orange_1 text-3xl font-bold font-poppins mb-2">Admin E-commerce</h3>
                <p className="text-xl font-poppins mb-5">
                    <b>Technologies:</b> CSS, JavaScript, Tailwind CSS, Webpack, React JS, Next JS, ESLint,
                    Git
                </p>
                <article className="text-xl font-poppins text-justify mx-6">
                    E-commerce admin page, this project has a dashboard, and it is a CRUD to manage the
                    e-commerce build with React and Next. It authorizes registered users to access the
                    console. I built the interface with Tailwind UI to focus the development on functionality.
                    The CRUD manager uses this API.
                </article>
                <div className="flex justify-center gap-x-20 mt-3">
                    <a
                        className="flex flex-col items-center"
                        href="https://github.com/LuisSequeraDev/react-shop-admin-next"
                    >
                        <BsGithub className="text-5xl" alt="repository" />
                        <p>Repository</p>
                    </a>
                    <a
                        className="flex flex-col items-center"
                        href="https://react-shop-admin-next.vercel.app/"
                    >
                        <IoRocketOutline className="text-5xl text-center" alt="deploy" />
                        <p>Open Project</p>
                    </a>
                </div>
            </div>

            <div id="project-2">
                <picture className="flex justify-center">
                    <img className="w-80" src={YardSales} alt="yardsales" />
                </picture>
                <h3 className="text-orange_1 text-3xl font-bold font-poppins mb-2">Yard Sales E-commerce</h3>
                <p className="text-xl font-poppins mb-5">
                    <b>Technologies:</b> CSS, JavaScript, Webpack, React JS, Next JS, ESLint, Git
                </p>
                <article className="text-xl font-poppins text-justify mx-6">
                    Ecommerce made with React JS, minified with Webpack and transpiled with Babel for browser
                    compatibility, then I went a bit further and migrated it to Next Js. In this project, I
                    learned how state and context work to manage my components and send information through
                    them. Products from
                    <strong className="mx-2">
                        <a class="link-api" href="https://api.escuelajs.co/api/v1/products">
                            this API
                        </a>
                    </strong>
                    were requested.
                </article>
                <div className="flex justify-center gap-x-20 mt-3">
                    <a
                        className="flex flex-col items-center"
                        href="https://github.com/LuisSequeraDev/yard-sales-netx.js"
                    >
                        <BsGithub className="text-5xl" alt="repository" />
                        <p>Repository</p>
                    </a>
                    <a className="flex flex-col items-center" href="https://yard-sales-netx-js.vercel.app/">
                        <IoRocketOutline className="text-5xl text-center" alt="deploy" />
                        <p>Open Project</p>
                    </a>
                </div>
            </div>

            <div id="project-3">
                <picture className="flex justify-center">
                    <img className="w-80" src={GoogleClone} alt="" />
                </picture>
                <h3 className="text-orange_1 text-3xl font-bold font-poppins mb-2">Google Clone</h3>
                <p className="text-xl font-poppins mb-5">
                    <b>Technologies:</b> HTML y CSS
                </p>
                <article className="text-xl font-poppins text-justify mx-6">
                    This project was created with the intention of practicing the basic structure of this
                    popular website, using only HTML and CSS.
                </article>
                <div className="flex justify-center gap-x-20 mt-3">
                    <a
                        className="flex flex-col items-center"
                        href="https://github.com/LuisSequeraDev/clone-google"
                    >
                        <BsGithub className="text-5xl" alt="repository" />
                        <p>Repository</p>
                    </a>
                    <a
                        className="flex flex-col items-center"
                        href="https://luissequeradev.github.io/clone-google/"
                    >
                        <IoRocketOutline className="text-5xl text-center" alt="deploy" />
                        <p>Open Project</p>
                    </a>
                </div>
            </div>

            <div id="project-4">
                <picture className="flex justify-center">
                    <img className="w-80" src={LandingPage} alt="" />
                </picture>
                <h3 className="text-orange_1 text-3xl font-bold font-poppins mb-2">Sign in Landing Page</h3>
                <p className="text-xl font-poppins mb-5">
                    <b>Technologies:</b> Html, CSS and JavaScript.
                </p>
                <article className="text-xl font-poppins text-justify mx-6">
                    This project was created as a "Frontend Mentor" challenge, where I created from scratch
                    using the resources provided on the site, how it should be seen and the respective
                    validations made if the email and password are correct according to the established
                    criteria.
                </article>
                <div className="flex justify-center gap-x-20 mt-3">
                    <a
                        className="flex flex-col items-center"
                        href="https://github.com/LuisSequeraDev/validate-forms-html-css-js"
                    >
                        <BsGithub className="text-5xl" alt="repository" />
                        <p>Repository</p>
                    </a>
                    <a
                        className="flex flex-col items-center"
                        href="https://luissequeradev.github.io/validate-forms-html-css-js/"
                    >
                        <BsGithub className="text-5xl" alt="repository" />
                        <p>Repository</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export { Projects };
