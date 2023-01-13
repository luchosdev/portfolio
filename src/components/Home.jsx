import { About } from './About';
import { Contact } from './Contact';
import { NavBar } from './NavBar';
import { Projects } from './Projects';
import { Skills } from './Skills';

const Home = () => {
    return (
        <div className="">
            <NavBar />
            <About />
            <Contact />
            <Projects />
            <Skills />
            <div>Hola</div>
        </div>
    );
};

export { Home };
