//* LIBRERIAS
import { useState, useEffect, useRef } from 'react';
// import { Routes, Route } from 'react-router-dom';

//* MAIN *//
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import ArrowUp from '../src/assets/icons/up-chevron-large.png';

//? ESTILOS
import './App.css';

function App() {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleClick = (event) => {
            if (!navbarRef.current.contains(event.target)) {
                setActive(false);
            }
        };
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [active]);

    const navbarRef = useRef(null);

    return (
        <div className="App">
            <NavBar active={active} setActive={setActive} navbarRef={navbarRef} />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            {/*//* Flecha para subir al home */}
            <a href="#home">
                <img className="w-8 fixed bottom-3 right-3 opacity-40 hover:opacity-80" src={ArrowUp} />
            </a>
        </div>
    );
}

export default App;
