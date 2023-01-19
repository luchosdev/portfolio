import Laptop from '../assets/icons/laptop-large.jpg';

const About = () => {
    return (
        <section
            id="about"
            className="md:flex md:items-center md:mx-3 lg:mx-10 py-20 xs:py-12 xs2:py-10 lg:pt-20"
        >
            <img
                className="w-96 md:w-80 md:h-60 sm900:w-96 lg:w-auto lg:h-80 rounded-md mx-auto sm900:ml-4 opacity-80"
                src={Laptop}
                alt="laptop"
            />
            <div>
                <h1 className="text-blue_1 text-3xl md:text-[1.6rem] xl:text-4xl font-extrabold font-poppins my-3 md:my-0">
                    WHO AM I?
                </h1>
                <p className="text-justify font-poppins mx-4 sm900:mx-10 lg:text-xl xl:text-2xl">
                    Hello! I am Luis Sequera Contreras. I am a self-taught front-end developer based in Lima -
                    Peru, but my country of birth is Venezuela. Since I was a kid, I really like everything
                    related to technology, then, a few months ago, THE CODE caught me, and I wanted to learn
                    everything about it. <br />
                    Nowadays, I consider myself to be a great web developer, capable of building everything I
                    want, and learning more every day to make it possible.
                </p>
            </div>
        </section>
    );
};

export { About };
