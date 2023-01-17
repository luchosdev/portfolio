//* LIBRERIAS
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
    return (
        <div className="App">
            <NavBar />
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
