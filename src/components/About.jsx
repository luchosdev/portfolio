import Laptop from '../assets/icons/laptop-small.jpg';
import Laptop2 from '../assets/icons/laptop-large.jpg';

const About = () => {
    return (
        <section id="about" className="py-5">
            <img className="lg:hidden w-96 mx-auto opacity-80" src={Laptop} alt="laptop" />
            <img className="hidden lg:block w-96 mx-auto opacity-80" src={Laptop2} alt="laptop" />
            <h1 className="text-blue_1 text-3xl font-extrabold font-poppins my-3">WHO AM I?</h1>
            <p className="text-justify font-poppins mx-4">
                Hello! I am Luis Sequera Contreras. I am a self-taught front-end developer based in Lima -
                Peru, but my country of birth is Venezuela. Since I was a kid, I really like everything
                related to technology, then, a few months ago, THE CODE caught me, and I wanted to learn
                everything about it. <br />
                Nowadays, I consider myself to be a great web developer, capable of building everything I
                want, and learning more every day to make it possible.
            </p>
        </section>
    );
};

export { About };
