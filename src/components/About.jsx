import React from 'react';
import Laptop from '../assets/icons/laptop-large.jpg';

function About() {
  return (
    <section
      id="about"
      className="py-20 xs:py-12 xs2:py-10 md:mx-3 md:flex md:items-center lg:mx-10 lg:pt-20"
    >
      <img
        className="mx-auto w-96 rounded-md opacity-80 md:h-60 md:w-80 sm900:ml-4 sm900:w-96 lg:h-80 lg:w-auto"
        src={Laptop}
        alt="laptop"
      />
      <div>
        <h1 className="my-3 font-poppins text-3xl font-extrabold text-blue_1 md:my-0 md:text-[1.6rem] xl:text-4xl">
          WHO AM I?
        </h1>
        <p className="mx-4 text-justify font-poppins sm900:mx-10 lg:text-xl xl:text-2xl">
          Hello! I am Luis Sequera Contreras. I am a self-taught front-end
          developer based in Lima - Peru, but my country of birth is Venezuela.
          Since I was a kid, I really like everything related to technology,
          then, a few months ago, THE CODE caught me, and I wanted to learn
          everything about it. <br />
          Nowadays, I consider myself to be a great web developer, capable of
          building everything I want, and learning more every day to make it
          possible.
        </p>
      </div>
    </section>
  );
}

export default About;
